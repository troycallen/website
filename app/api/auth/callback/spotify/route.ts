import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')

  if (error) {
    return NextResponse.json({ error: `Spotify auth error: ${error}` }, { status: 400 })
  }

  if (!code) {
    return NextResponse.json({ error: 'No authorization code received' }, { status: 400 })
  }

  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET
  const redirect_uri = `${process.env.NEXT_PUBLIC_BASE_URL || request.nextUrl.origin}/api/auth/callback/spotify`

  if (!client_id || !client_secret) {
    return NextResponse.json({ error: 'Missing Spotify credentials' }, { status: 500 })
  }

  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirect_uri,
      }),
    })

    const data = await response.json()

    if (data.error) {
      return NextResponse.json({ error: data.error }, { status: 400 })
    }

    // Return the tokens (you'll copy the refresh_token to your .env)
    return NextResponse.json({
      message: 'Success! Copy this NEW refresh_token to your .env.local file:',
      refresh_token: data.refresh_token,
      access_token: data.access_token,
      expires_in: data.expires_in,
    })

  } catch (error) {
    return NextResponse.json({ error: 'Failed to exchange code for token' }, { status: 500 })
  }
}