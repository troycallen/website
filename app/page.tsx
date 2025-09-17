"use client"

import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "@/lib/theme-context"
import SpotifyNowPlaying from "@/components/spotify-now-playing"

export default function Home() {
  const [imageEffect, setImageEffect] = useState<boolean>(false)
  
  // Safe theme access with fallback
  let theme = 'dark'
  try {
    theme = useTheme().theme
  } catch {
    // Fallback if theme context is not available
    theme = 'dark'
  }

  const links = [
    { text: "work", link: "/work" },
    { text: "projects", link: "/projects" },
    { text: "blog", link: "/blog" },
  ]

  const socials = [
    {
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/troycallen",
      platform: "github",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      link: "https://linkedin.com/in/troycallen",
      platform: "linkedin",
    },
    {
      icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>,
      link: "mailto:troycallen.dev@gmail.com",
      platform: "email",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-4 sm:p-24 bg-background text-foreground">
      {/* Top grey bar */}
      <div className="w-full max-w-4xl h-1 bg-muted mb-16"></div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col rounded-3xl shadow-2xl shadow-muted overflow-clip w-full max-w-[24em]">
        {/* Image container */}
        <div className="relative w-full aspect-4/5">
          {/* Profile pic */}
          <div className="h-full w-full z-0">
            <Image
              src="/surf.png"
              alt="Troy Allen"
              fill
              className="object-cover"
              onClick={() => setImageEffect(true)}
            />
          </div>
          {/* Bottom banner */}
          <div className="z-10 p-6 pt-12 absolute left-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent w-full">
            <div className="flex flex-col">
              <div className="font-semibold text-3xl text-foreground tracking-tight">
                Troy Allen
              </div>
              <div className="font-medium text-lg text-muted-foreground tracking-tight">
                CS & ML @ Georgia Tech
              </div>
            </div>
          </div>

          {/* Top bar */}
          <div className="z-10 p-6 absolute left-0 top-0 right-0">
            <div className="flex flex-row gap-4 justify-between items-start">
              <div className="flex flex-col gap-3 items-center">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="bg-background/50 hover:bg-background/70 text-foreground p-2 rounded-full transition ease-in-out hover:scale-110 hover:-rotate-12"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Web */}
      <div className="hidden md:flex flex-col max-w-4xl">
        <div className="flex flex-row gap-16 lg:gap-20 items-center mb-16">
          {/* Profile pic */}
          <div className="relative w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 flex-shrink-0 ocean-depth">
            <Image
              src="/surf.png"
              alt="Troy Allen"
              fill
              className={`h-full w-full rounded-xl shadow-xl transition ease-in-out hover:scale-110 duration-500 hover:cursor-pointer object-cover ${
                imageEffect ? "animate-pulse" : ""
              }`}
              onClick={() => setImageEffect(true)}
              onAnimationEnd={() => setImageEffect(false)}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between flex-1 max-w-2xl">
            <div className="flex flex-col gap-3 lg:gap-4">
              <div className="flex flex-col gap-3">
                <div className="font-bold text-5xl lg:text-6xl xl:text-7xl text-foreground tracking-tight -ml-2 sand-glow">
                  Troy Allen
                </div>
                <div className="font-semibold text-xl lg:text-2xl xl:text-3xl text-muted-foreground tracking-tight">
                  CS & ML @ Georgia Tech
                </div>
              </div>
              <div className="text-muted-foreground text-lg leading-relaxed">
                Interested in AI, ML, and scalability.
                <br />
                "Wherever you go, go with all your heart."
              </div>

            {/* Spotify Now Playing */}
            <div className="mt-3">
              <SpotifyNowPlaying />
            </div>
            </div>
            
            <div className="flex flex-row justify-between items-center gap-8 mt-6">
              <div className="flex flex-row gap-2 items-center -ml-4">
                {links.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.link}
                    className="text-primary hover:text-accent hover:bg-muted px-4 py-2 rounded-lg transition font-normal hover:scale-105"
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
              <div className="flex flex-row gap-4 items-center">
                {socials.map((social, idx) => (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    key={idx}
                    href={social.link}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted p-3 rounded-lg transition hover:scale-105"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Contribution Graph */}
        <div className="w-full mt-12">
          <Image
            src={theme === 'dark' ? "https://ghchart.rshah.org/2a4b5c/troycallen" : "https://ghchart.rshah.org/4a8fc7/troycallen"}
            alt="Troy's GitHub Contribution Graph"
            width={735}
            height={112}
            className="rounded-lg w-full opacity-90"
            unoptimized
          />
        </div>
      </div>

      {/* Bottom grey bar */}
      <div className="w-full max-w-4xl h-1 bg-muted mt-16"></div>
    </main>
  )
}
