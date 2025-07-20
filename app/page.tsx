import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8">
        {/* Navigation breadcrumb */}
        <nav className="text-gray-400 mb-8 font-mono text-sm">
          <span>ta</span>
        </nav>

        {/* Main content */}
        <div className="flex items-center gap-8">
          <div className="w-56 h-56 rounded-2xl overflow-hidden bg-gray-700 flex-shrink-0">
            <Image
              src="/surf.png"
              alt="Troy Allen"
              width={224}
              height={224}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-6xl font-bold mb-2">Troy Allen</h1>
            <p className="text-2xl text-gray-500 mb-4">CS & ML @ Georgia Tech</p>
            <p className="text-lg text-gray-400 mb-6">
              Experienced with and interested in AI, ML, NLP, and scaling systems. Hoping to have an impact on the world using technology.
            </p>

            <div className="flex items-end justify-between">
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
