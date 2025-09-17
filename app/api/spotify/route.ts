import { NextResponse } from 'next/server'

const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token'
const SPOTIFY_NOW_PLAYING_URL = 'https://api.spotify.com/v1/me/player/currently-playing'

async function getAccessToken() {
  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

  if (!client_id || !client_secret || !refresh_token) {
    throw new Error('Missing Spotify environment variables')
  }

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

  return response.json()
}

async function getNowPlaying() {
  const { access_token } = await getAccessToken()

  const response = await fetch(SPOTIFY_NOW_PLAYING_URL, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    cache: 'no-store'
  })

  if (response.status === 204 || response.status > 400) {
    return null
  }

  return response.json()
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