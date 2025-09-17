"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface SpotifyTrack {
  isPlaying: boolean
  title?: string
  artist?: string
  album?: string
  albumImageUrl?: string
  songUrl?: string
}

export default function SpotifyNowPlaying() {
  const [track, setTrack] = useState<SpotifyTrack>({ isPlaying: false })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch('/api/spotify')
        const data = await response.json()
        setTrack(data)
      } catch (error) {
        console.error('Error fetching Spotify data:', error)
        setTrack({ isPlaying: false })
      } finally {
        setLoading(false)
      }
    }

    fetchNowPlaying()

    const interval = setInterval(fetchNowPlaying, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center gap-3 text-muted-foreground">
        <div className="w-4 h-4 rounded-full bg-muted animate-pulse"></div>
        <span className="text-sm">Loading...</span>
      </div>
    )
  }

  if (!track.isPlaying || !track.title) {
    return (
      <div className="flex items-center gap-3 text-muted-foreground">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
        <span className="text-sm">Not playing</span>
      </div>
    )
  }

  return (
    <a
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
    >
      <div className="relative flex items-center">
        <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
        </svg>
        <div className="ml-1 w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
      </div>

      <div className="min-w-0">
        <div className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
          {track.title} <span className="text-muted-foreground font-normal">by {track.artist}</span>
        </div>
      </div>
    </a>
  )
}