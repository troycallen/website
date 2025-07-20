"use client"

import { useEffect } from "react"

export default function Resume() {
  useEffect(() => {
    window.location.href = "/resume.pdf"
  }, [])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-400 mb-4">Redirecting to resume...</p>
        <a 
          href="/resume.pdf" 
          className="text-gray-300 hover:text-white transition-colors underline"
        >
          Click here if not redirected automatically
        </a>
      </div>
    </div>
  )
}
