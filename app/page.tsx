import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Navigation breadcrumb */}
        <nav className="text-gray-400 mb-16 font-mono text-sm">
          <span>ta</span>
        </nav>

        {/* Main content */}
        <div className="flex items-center gap-8">
          <div className="w-32 h-32 rounded-2xl overflow-hidden bg-gray-700 flex-shrink-0 flex items-center justify-center">
            <span className="text-gray-400 text-2xl font-bold">TA</span>
          </div>

          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-2">Troy Allen</h1>
            <p className="text-xl text-gray-400 mb-4">MSCS @ Georgia Tech</p>
            <p className="text-gray-300 mb-6">
              Software Engineer specializing in AI/ML. Building multimodal AI platforms and distributed systems.
            </p>

            <div className="flex items-center gap-8">
              <nav className="flex gap-6">
                <Link href="/work" className="text-gray-300 hover:text-white transition-colors">
                  work
                </Link>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  projects
                </Link>
                <Link href="/resume" className="text-gray-300 hover:text-white transition-colors">
                  resume
                </Link>
              </nav>

              <div className="flex gap-4">
                <a href="https://github.com/troycallen" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/troycallen"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:troycallen.dev@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
