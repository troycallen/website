"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
]

export function Navbar({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    setActiveSection(sectionId)
    setIsMenuOpen(false)

    // Update URL hash without scrolling
    window.history.pushState(null, "", sectionId)
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-mono font-bold text-primary">
            <Link href="#home" onClick={(e) => handleNavClick(e, "#home")}>
              troy_allen
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-mono transition-colors duration-200 ${
                    activeSection === link.href ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name.toLowerCase()}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-mono block px-3 py-2 transition-colors duration-200 ${
                  activeSection === link.href ? "text-primary" : "text-foreground hover:text-primary"
                }`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name.toLowerCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

