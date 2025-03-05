import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-mono text-muted-foreground">© {new Date().getFullYear()} Troy Allen</p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="mailto:troycallen22@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/troycallen"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com/troycallen"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

