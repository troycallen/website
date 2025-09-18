import { NextResponse } from 'next/server'
import { Redis } from '@upstash/redis'

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token'
const SPOTIFY_NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing'
const TOKEN_CACHE_KEY = 'spotify_access_token'
const REFRESH_TOKEN_CACHE_KEY = 'spotify_refresh_token'

interface TokenCache {
  access_token: string
  expires_at: number
}

// Initialize Redis
const redis = Redis.fromEnv()

// Fallback in-memory cache for local development
let localTokenCache: TokenCache | null = null
let localRefreshToken: string | null = null

async function getFromCache(): Promise<TokenCache | null> {
  try {
    const cached = await redis.get<TokenCache>(TOKEN_CACHE_KEY)
    if (cached) {
      console.log('Retrieved token from Redis')
      return cached
    }
  } catch (error) {
    console.log('Redis unavailable, using local cache:', error.message)
    if (localTokenCache) {
      console.log('Using local token cache')
      return localTokenCache
    }
  }
  return null
}

async function setToCache(tokenData: TokenCache): Promise<void> {
  try {
    await redis.set(TOKEN_CACHE_KEY, tokenData, { ex: 3600 })
    console.log('Stored token in Redis')
  } catch (error) {
    console.log('Redis unavailable, using local cache:', error.message)
    localTokenCache = tokenData
    console.log('Stored token in local cache')
  }
}

async function getRefreshToken(): Promise<string> {
  try {
    const cached = await redis.get<string>(REFRESH_TOKEN_CACHE_KEY)
    if (cached) {
      console.log('Using refresh token from Redis')
      return cached
    }
  } catch (error) {
    console.log('Redis unavailable for refresh token:', error.message)
    if (localRefreshToken) {
      console.log('Using local refresh token')
      return localRefreshToken
    }
  }

  // Fallback to environment variable
  const envToken = process.env.SPOTIFY_REFRESH_TOKEN
  if (!envToken) {
    throw new Error('No refresh token available')
  }
  console.log('Using refresh token from environment')
  return envToken
}

async function setRefreshToken(refreshToken: string): Promise<void> {
  try {
    await redis.set(REFRESH_TOKEN_CACHE_KEY, refreshToken)
    console.log('Stored new refresh token in Redis')
  } catch (error) {
    console.log('Redis unavailable, storing refresh token locally:', error.message)
    localRefreshToken = refreshToken
    console.log('Stored refresh token in local cache')
  }
}

async function clearCache(): Promise<void> {
  try {
    await redis.del(TOKEN_CACHE_KEY)
  } catch (error) {
    // Ignore Redis errors
  }
  localTokenCache = null
  console.log('Cleared token cache')
}

async function getAccessToken() {
  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET

  if (!client_id || !client_secret) {
    throw new Error('Missing Spotify environment variables')
  }

  // Check if we have a valid cached token (with 5 minute buffer)
  const cachedToken = await getFromCache()
  if (cachedToken && Date.now() < (cachedToken.expires_at - 300000)) {
    console.log('Using cached access token')
    return { access_token: cachedToken.access_token }
  }

  // Get the current refresh token
  const refresh_token = await getRefreshToken()

  console.log('Refreshing access token...')
  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh_token,
    }),
  })

  const data = await response.json()
  console.log('Token refresh response:', response.status, data)

  if (!response.ok) {
    await clearCache()
    throw new Error(`Token refresh failed: ${JSON.stringify(data)}`)
  }

  // If Spotify returned a new refresh token, store it
  if (data.refresh_token && data.refresh_token !== refresh_token) {
    console.log('🔄 New refresh token received, storing it')
    await setRefreshToken(data.refresh_token)
  }

  // Cache the new access token
  const tokenToCache: TokenCache = {
    access_token: data.access_token,
    expires_at: Date.now() + (data.expires_in * 1000)
  }

  await setToCache(tokenToCache)
  console.log('Token cached until:', new Date(tokenToCache.expires_at).toISOString())

  return data
}

async function getNowPlaying() {
  const tokenData = await getAccessToken()
  const { access_token } = tokenData

  console.log('Using access token:', access_token.substring(0, 20) + '...')

  const response = await fetch(SPOTIFY_NOW_PLAYING_URL, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store'
  })

  console.log('Spotify API response status:', response.status)

  if (response.status === 204) {
    console.log('No content - nothing is playing')
    return null
  }

  if (response.status === 401) {
    console.log('Token expired or invalid, clearing cache and retrying...')
    await clearCache()

    // Retry once with fresh token
    const newTokenData = await getAccessToken()
    const retryResponse = await fetch(SPOTIFY_NOW_PLAYING_URL, {
      headers: {
        Authorization: `Bearer ${newTokenData.access_token}`,
      },
      cache: 'no-store'
    })

    if (retryResponse.status === 204) {
      return null
    }

    if (!retryResponse.ok) {
      console.log('Retry also failed:', retryResponse.status)
      return null
    }

    return await retryResponse.json()
  }

  if (!response.ok) {
    console.log('Error status:', response.status)
    const errorText = await response.text()
    console.log('Error response:', errorText)
    return null
  }

  const data = await response.json()
  return data
}

export async function GET() {
  try {
    const response = await getNowPlaying()

    if (!response || !response.item) {
      return NextResponse.json({ isPlaying: false })
    }

    const song = {
      isPlaying: response.is_playing,
      title: response.item.name,
      artist: response.item.artists.map((artist: any) => artist.name).join(', '),
      album: response.item.album.name,
      albumImageUrl: response.item.album.images[0]?.url,
      songUrl: response.item.external_urls.spotify,
    }

    return NextResponse.json(song, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    })
  } catch (error) {
    console.error('Error fetching Spotify data:', error)
    return NextResponse.json({ isPlaying: false }, { status: 500 })
  }
}