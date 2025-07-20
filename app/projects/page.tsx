import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      name: "Memory Allocator",
      description: "Dynamic memory allocator in C++ that runs 2x faster than glibc on specific tasks",
      logo: "⚡",
      color: "bg-yellow-600",
    },
    {
      name: "AI Basketball Coach",
      description: "Real-time basketball shot analysis using MediaPipe pose estimation and computer vision",
      logo: "🏀",
      color: "bg-orange-600",
    },
    {
      name: "Raft-Based Distributed Database",
      description: "Fault-tolerant distributed database supporting ACID transactions across 5+ nodes",
      logo: "🗄️",
      color: "bg-blue-600",
    },
    {
      name: "Multimodal AI Platform",
      description: "AI platform processing 290,000+ files using computer vision, NLP, and CUDA",
      logo: "🤖",
      color: "bg-purple-600",
    },
    {
      name: "Neural Network Architecture",
      description: "Pressure ulcer prediction in spinal cord injury patients achieving 93% accuracy",
      logo: "🧠",
      color: "bg-green-600",
    },
    {
      name: "Hate Speech Detection",
      description: "Automated pipeline for Discord communities using fine-tuned BERT models",
      logo: "🛡️",
      color: "bg-red-600",
    },
    {
      name: "Clinical Dashboard",
      description: "Real-time dashboard processing 400+ patient datasets using ML pipelines",
      logo: "📊",
      color: "bg-teal-600",
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
            tr
          </Link>
          <span className="mx-2">/</span>
          <span>...</span>
          <span className="mx-2">/</span>
          <span>projects</span>
        </nav>

        {/* Projects section */}
        <section>
          <h1 className="text-4xl font-bold mb-12">projects</h1>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="py-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center text-xl flex-shrink-0`}
                  >
                    {project.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
                    <p className="text-gray-400 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
