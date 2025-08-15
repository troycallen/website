"use client"

import { useEffect } from "react"

export default function Resume() {
  useEffect(() => {
    window.location.href = "/resume.pdf"
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <p className="text-muted-foreground mb-4">Redirecting to resume...</p>
        <a 
          href="/resume.pdf" 
          className="text-muted-foreground hover:text-foreground transition-colors underline"
        >
          Click here if not redirected automatically
        </a>
      </div>
    </div>
  )
}
