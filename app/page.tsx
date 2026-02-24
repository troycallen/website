"use client"

import Image from "next/image"
import SpotifyNowPlaying from "@/components/spotify-now-playing"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mono-doc">
        <h1 className="mono-title">TROY ALLEN</h1>
        <p className="mono-subtitle"></p>

        <div className="mono-hero">
          <div className="mono-photo-box">
            <div className="relative w-32 h-32 overflow-hidden grayscale">
              <Image src="/surf.jpg" alt="Troy Allen" fill className="object-cover" />
            </div>
          </div>
          <div className="mono-personal">
            <ul className="mono-list">
              <li>Github: <a href="https://github.com/troycallen" target="_blank" rel="noreferrer noopener">troycallen</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/troycallen" target="_blank" rel="noreferrer noopener">troycallen</a></li>
              <li>Email: <a href="mailto:troycallen.dev@gmail.com">troycallen.dev@gmail.com</a></li>
            </ul>
            <div className="mono-spotify">
              <span className="mono-spotify-label">Now playing:</span>{' '}
              <SpotifyNowPlaying />
            </div>
          </div>
        </div>

        <h2 className="mono-section-title" id="about">ABOUT ME</h2>
        <p className="mono-prose">
          Hi! I&apos;m Troy, a software engineer at Google working on ML systems for YouTube.
        </p>
        <p className="mono-prose">
          I come from a research-heavy background and recently finished my Master&apos;s at Georgia Tech, where I was fortunate enough to work in NLP and ML across a few labs. Most of my engineering experience has been in applied AI/ML, but I&apos;ve also dabbled in cybersecurity and infrastructure development.
        </p>
        <p className="mono-prose">
          I&apos;m broadly interested in machine learning, scalability, and working closely to theory. Outside of work, I enjoy surfing, soccer, reading, and competitive games.
        </p>


        <h2 className="mono-section-title" id="blog">BLOG / MISC</h2>
        <p className="mono-prose mono-muted">
          I will surely fill this out some time in the next decade
        </p>

        <footer className="mono-footer">
          Troy Allen 2026 | Last updated: 2026-02
        </footer>
      </div>
    </main>
  )
}
