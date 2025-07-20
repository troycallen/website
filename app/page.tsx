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
        <div className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-gray-700 hover:bg-gray-900/70 transition-all duration-300">
          <div className="flex items-center gap-8">
            <div className="w-72 h-72 rounded-2xl overflow-hidden bg-gray-700 flex-shrink-0 ring-2 ring-gray-800 shadow-2xl">
              <Image
                src="/surf.png"
                alt="Troy Allen"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h1 className="text-6xl font-bold mb-2 text-white">
                Troy Allen
              </h1>
              <p className="text-2xl text-blue-400 mb-4 font-medium">CS & ML @ Georgia Tech</p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Experienced with and interested in AI, ML, NLP, and scaling systems. Hoping to have an impact on the world using technology.
              </p>

              <div className="flex items-end justify-between">
                <nav className="flex gap-3">
                  <Link 
                    href="/work" 
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-600 hover:bg-gray-700 transition-all duration-200 text-sm font-medium"
                  >
                    work
                  </Link>
                  <Link 
                    href="/projects" 
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-600 hover:bg-gray-700 transition-all duration-200 text-sm font-medium"
                  >
                    projects
                  </Link>
                  <Link 
                    href="/resume" 
                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-600 hover:bg-gray-700 transition-all duration-200 text-sm font-medium"
                  >
                    resume
                  </Link>
                </nav>

                <div className="flex gap-3">
                  <a 
                    href="https://github.com/troycallen" 
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-700 transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/troycallen"
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-700 transition-all duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:troycallen.dev@gmail.com" 
                    className="p-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-700 transition-all duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
