"use client"

export default function SpotifyAuth() {
  const handleAuth = () => {
    const client_id = 'e92325f6b43b488c974878cb204b8f42' 
    const redirect_uri = encodeURIComponent(`${window.location.origin}/api/auth/callback/spotify`)
    const scope = encodeURIComponent('user-read-currently-playing user-read-playback-state')

    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${client_id}&scope=${scope}&redirect_uri=${redirect_uri}`

    window.location.href = authUrl
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-8 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8">Spotify Authentication</h1>
        <p className="text-muted-foreground mb-8">
          Click the button below to authenticate with Spotify and get your refresh token.
          You'll only need to do this once.
        </p>

        <button
          onClick={handleAuth}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Authenticate with Spotify
        </button>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>After clicking, you'll:</p>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Be redirected to Spotify to authorize</li>
            <li>Get redirected back with your refresh token</li>
            <li>Copy the refresh token to your .env.local file</li>
            <li>Delete this auth page</li>
          </ol>
        </div>
      </div>
    </div>
  )
}