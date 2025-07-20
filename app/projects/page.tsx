"use client"

import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      name: "Memory Allocator",
      description: "Dynamic memory allocator in C++ using bitwise intrinsics and prefetching",
      logo: "⚡",
      color: "bg-yellow-600",
      details: "Implemented a high-performance dynamic memory allocator in C++ with advanced optimizations including bitwise intrinsics for faster bit manipulation and prefetching techniques to improve cache performance. The allocator supports multiple allocation strategies and provides detailed memory usage analytics.",
      skills: ["C++", "Memory Management", "Bitwise Operations", "Performance Optimization", "Cache Optimization"],
      link: "#"
    },
    {
      name: "AI Basketball Coach",
      description: "Real-time basketball shot analysis using pose estimation and computer vision",
      logo: "🏀",
      color: "bg-orange-600",
      details: "Developed an AI-powered basketball coaching system that uses real-time pose estimation and computer vision to analyze shooting form, provide feedback, and track performance metrics. The system processes video streams to detect key body positions and provides personalized coaching recommendations.",
      skills: ["Python", "OpenCV", "MediaPipe", "Computer Vision", "Real-time Processing"],
      link: "#"
    },
    {
      name: "Raft-Based Database",
      description: "Fault-tolerant distributed database supporting ACID transactions",
      logo: "🗄️",
      color: "bg-blue-600",
      details: "Built a distributed database system implementing the Raft consensus algorithm for fault tolerance and high availability. The system supports ACID transactions, automatic leader election, and seamless failover capabilities. Includes comprehensive testing and monitoring tools.",
      skills: ["Go", "Distributed Systems", "Raft Algorithm", "ACID Transactions", "Network Programming"],
      link: "#"
    },
    {
      name: "Hate Speech Detection",
      description: "Automated pipeline for Discord communities using fine-tuned BERT models",
      logo: "🛡️",
      color: "bg-red-600",
      details: "Created an automated hate speech detection system for Discord communities using fine-tuned BERT models. The pipeline processes messages in real-time, classifies content, and provides moderation tools. Includes a web dashboard for community managers to monitor and configure detection parameters.",
      skills: ["Python", "BERT", "NLP", "Discord API", "Machine Learning"],
      link: "#"
    },
    {
      name: "OCR/NLP Pipeline",
      description: "Data extraction pipeline in C++ for mass shootings analysis research",
      logo: "📄",
      color: "bg-indigo-600",
      details: "Developed a comprehensive OCR and NLP pipeline in C++ for academic research on mass shootings analysis. The system extracts and processes text from various document formats, applies natural language processing techniques, and generates structured data for research analysis.",
      skills: ["C++", "OCR", "NLP", "Data Processing", "Research Tools"],
      link: "#"
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-8">
        {/* Navigation breadcrumb */}
        <nav className="text-gray-400 mb-8 font-mono text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            ta
          </Link>
          <span className="mx-2">/</span>
          <span>...</span>
          <span className="mx-2">/</span>
          <span>projects</span>
        </nav>

        {/* Projects section */}
        <div className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-gray-700 hover:bg-gray-900/70 transition-all duration-300">
          <h1 className="text-4xl font-bold mb-8 text-white">projects</h1>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-gray-600 hover:bg-gray-800/70 transition-all duration-300"
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
                    <p className="text-gray-300 leading-relaxed text-sm mb-3">
                      {project.description}
                    </p>
                    
                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-700 border border-gray-600 rounded-md text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Details */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {project.details}
                      </p>
                      <a 
                        href={project.link}
                        className="inline-flex items-center px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:border-gray-500 hover:bg-gray-600 transition-all duration-200 text-sm font-medium"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
