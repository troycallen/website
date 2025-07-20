import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      name: "Memory Allocator",
      description: "Dynamic memory allocator in C++ using bitwise intrinsics and prefetching",
      logo: "⚡",
      color: "bg-yellow-600",
    },
    {
      name: "AI Basketball Coach",
      description: "Real-time basketball shot analysis using pose estimation and computer vision",
      logo: "🏀",
      color: "bg-orange-600",
    },
    {
      name: "Raft-Based Database",
      description: "Fault-tolerant distributed database supporting ACID transactions",
      logo: "🗄️",
      color: "bg-blue-600",
    },
    {
      name: "Hate Speech Detection",
      description: "Automated pipeline for Discord communities using fine-tuned BERT models",
      logo: "🛡️",
      color: "bg-red-600",
    },
    {
      name: "OCR/NLP Pipeline",
      description: "Data extraction pipeline in C++ for mass shootings analysis research",
      logo: "📄",
      color: "bg-indigo-600",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Navigation breadcrumb */}
        <nav className="text-gray-400 mb-16 font-mono text-sm">
          <Link href="/" className="hover:text-white">
            ta
          </Link>
          <span className="mx-2">/</span>
          <span>...</span>
          <span className="mx-2">/</span>
          <span>projects</span>
        </nav>

        {/* Projects section */}
        <section>
          <h1 className="text-4xl font-bold mb-16">projects</h1>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-700 hover:bg-gray-900/70 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`w-16 h-16 rounded-xl ${project.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    {project.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                {/* Subtle arrow indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
