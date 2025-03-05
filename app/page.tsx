"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("#home")

  // Handle initial hash in URL and hash changes
  useEffect(() => {
    const hash = window.location.hash || "#home"
    setActiveSection(hash)

    const handleHashChange = () => {
      setActiveSection(window.location.hash || "#home")
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="container mx-auto px-4 py-8 flex-1">
        {activeSection === "#home" && (
          <>
            <Hero />
          </>
        )}

        {activeSection === "#experience" && (
          <div className="mt-12">
            <Experience />
          </div>
        )}

        {activeSection === "#projects" && (
          <div className="mt-12">
            <Projects />
          </div>
        )}

        {activeSection === "#education" && (
          <div className="mt-12">
            <Education />
          </div>
        )}

        {activeSection === "#skills" && (
          <div className="mt-12">
            <Skills />
          </div>
        )}
      </div>
      <Footer />
    </main>
  )
}

