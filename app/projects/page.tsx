"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }
  const projects = [
    {
      name: "Goaldle",
      description: "A Wordle-inspired game for soccer using computer vision",
      logo: "/goaldle.jpg",
      size: "w-16 h-16",
      details: "Goaldle challenges users to guess soccer events or players by analyzing video clips. Utilizes TensorFlow for computer vision and TypeScript for the game logic and frontend, tracking player movements and actions in real time.",
      skills: ["TypeScript", "TensorFlow", "Computer Vision"],
      link: "#"
    },
    {
      name: "Memory Allocator",
      description: "Dynamic memory allocator in C++",
      logo: "/mem_alloc.jpg",
      size: "w-16 h-16",
      details: "High-performance memory allocator with advanced cache optimization techniques",
      skills: ["C++", "Assembly", "Cache Optimization", "Memory Management", "Performance Optimization"],
      link: "#"
    },
    {
      name: "AI Basketball Coach",
      description: "Real-time basketball shot analysis and coaching",
      logo: "/basketball.png",
      size: "w-16 h-16",
      details: "Computer vision system for basketball analysis with AI-powered feedback",
      skills: ["Python", "OpenCV", "MediaPipe", "Gemini API", "Computer Vision"],
      link: "#"
    },
    {
      name: "Rafty",
      description: "Fault-tolerant distributed database",
      logo: "/rafty.png",
      size: "w-16 h-16",
      details: "Fault-tolerant distributed database with high availability architecture",
      skills: ["Rust", "Raft Consensus", "gRPC", "Docker", "Distributed Systems"],
      link: "#"
    },
    {
      name: "Speecher",
      description: "Automated pipeline for hate speech on Discord",
      logo: "/speecher.png",
      size: "w-16 h-16",  
      details: "Created an automated hate speech detection system for Discord communities using fine-tuned BERT models. The pipeline processes messages in real-time, classifies content, and provides moderation tools. Includes a web dashboard for community managers to monitor and configure detection parameters.",
      skills: ["Python", "BERT", "NLP", "Discord API", "Machine Learning"],
      link: "#"
    },
    {
      name: "MSExtractor",
      description: "Data extraction pipeline in C++ for mass shootings analysis research",
      logo: "/msextractor.png",
      size: "w-16 h-16",
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

          <div className="space-y-5">
            {projects.map((project, index) => {
              const isExpanded = expandedIndex === index
              return (
                <div 
                  key={index} 
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex items-start gap-4 py-2">
                    <div className={`${project.size} rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 relative`}>
                      {project.logo.startsWith('/') ? (
                        <Image
                          src={project.logo}
                          alt={`${project.name} logo`}
                          fill
                          className="object-contain p-1"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xl">
                          {project.logo}
                        </div>
                      )}
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
                          <div className="text-gray-300 leading-relaxed">
                            • {project.details}
                          </div>
                          
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
