"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Replace the ASCII art with a simple styled heading for better alignment */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-primary">Troy Allen</h1>
          <div className="mb-6 font-mono">
            <p className="text-xl mb-2">Software Engineer</p>
            <p className="text-muted-foreground">
              <span className="text-secondary">$</span> Graduate student @ Georgia Tech. Computer programmer and eternal student.
            </p>
            <p className="text-muted-foreground">
              <span className="text-secondary">$</span> I love algorithms, machine learning, programming languages, and scalable systems.
            </p>
            <p className="text-muted-foreground">
              <span className="text-secondary">$</span> I spent a lot of time doing research in the past, but now I'm more interested in building things that can help people directly.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:troycallen22@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Mail size={18} />
              <span className="font-mono">Email</span>
            </Link>
            <Link
              href="tel:4074560344"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Phone size={18} />
              <span className="font-mono">407-456-0344</span>
            </Link>
            <Link
              href="https://linkedin.com/in/troycallen"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Linkedin size={18} />
              <span className="font-mono">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/troycallen"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Github size={18} />
              <span className="font-mono">GitHub</span>
            </Link>
          </div>
        </div>

        <div className="terminal-section overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="font-mono text-muted-foreground">terminal</div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="font-mono text-sm space-y-2">
            <p>
              <span className="text-secondary">$</span> whoami
            </p>
            <p>Troy Allen</p>
            <p>
              <span className="text-secondary">$</span> cat skills.txt
            </p>
            <p>Python, C++, Java, JavaScript, React, FastAPI, Docker, AWS</p>
            <p>
              <span className="text-secondary">$</span> cat status.txt
            </p>
            <p>Currently: Software Engineer Intern @ Trideum Corporation</p>
            <p>
              <span className="text-secondary">$</span> education
            </p>
            <p>Georgia Tech - MS Computer Science & MS Analytics</p>
            <p>Florida State - BS Computer Science</p>
            <p>
              <span className="text-secondary">$</span> _<span className="animate-terminal-blink">|</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

