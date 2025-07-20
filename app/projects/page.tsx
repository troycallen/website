"use client"

import Link from "next/link"
import { useState } from "react"

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }
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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Navigation breadcrumb */}
        <nav className="text-gray-400 mb-16 font-mono text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            ta
          </Link>
          <span className="mx-2">/</span>
          <span>...</span>
          <span className="mx-2">/</span>
          <span>projects</span>
        </nav>

        {/* Projects section */}
        <section>
          <h1 className="text-4xl font-bold mb-12">projects</h1>

          <div className="space-y-8">
            {projects.map((project, index) => {
              const isExpanded = expandedIndex === index
              return (
                <div 
                  key={index} 
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex items-start gap-4 py-2">
                    <div className={`w-12 h-12 rounded-lg ${project.color} flex items-center justify-center text-xl flex-shrink-0`}>
                      {project.logo}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-medium text-white mb-1">
                        {project.name}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {isExpanded && (
                        <div className="mt-6 space-y-4">
                          <p className="text-gray-300 leading-relaxed">
                            {project.details}
                          </p>
                          
                          {/* Skills tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                          
                          <a 
                            href={project.link}
                            className="inline-block text-gray-400 hover:text-white transition-colors text-sm underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Project →
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
