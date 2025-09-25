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
      name: "EnviroLLM",
      description: "Local LLM resource tracking and optimization",
      logo: "/envirollm.png",
      size: "w-16 h-16",
      details: "Local LLM resource tracking and optimization tool with real-time monitoring and energy analysis",
      skills: ["Python", "PyTorch", "TensorFlow", "Docker", "LLMs", "TypeScript"],
      link: "#"
    },
    {
      name: "Goaldle",
      description: "Wordle but for soccer using computer vision",
      logo: "/goaldle.png",
      size: "w-16 h-16",
      details: "Wordle-inspired game for guessing soccer players by analyzing CV-blurred videos",
      skills: ["Python", "TypeScript", "TensorFlow", "Computer Vision"],
      link: "#"
    },
    {
      name: "LitRA",
      description: "AI Literature Review Assistant",
      logo: "/litra.png",
      size: "w-16 h-16",
      details: "AI-powered literature review assistant with concept mapping and summarization using Python",
      skills: ["Python", "GPT", "Llama", "NLP, Next.js"],
      link: "#"
    },
    {
      name: "Memory Allocator",
      description: "Dynamic memory allocator in C++",
      logo: "/mem_alloc.jpg",
      size: "w-16 h-16",
      details: "High-performance memory allocator with cache optimization techniques and bitwise operations",
      skills: ["C++", "Assembly", "Cache Optimization", "Memory Management", "Performance Optimization"],
      link: "#"
    },
    {
      name: "AI Basketball Coach",
      description: "Real-time basketball shot analysis and coaching",
      logo: "/basketball.png",
      size: "w-16 h-16",
      details: "Computer vision system for basketball analysis with AI-powered feedback and MediaPipe",
      skills: ["Python", "OpenCV", "MediaPipe", "Gemini API", "Computer Vision"],
      link: "#"
    },
    {
      name: "Rafty",
      description: "Fault-tolerant distributed database",
      logo: "/rafty.png",
      size: "w-16 h-16",
      details: "Fault-tolerant distributed database with automated leader election and Raft consensus",
      skills: ["Rust", "Raft Consensus", "gRPC", "Docker", "Distributed Systems"],
      link: "#"
    },
    {
      name: "MeetCode",
      description: "Chrome extension for collaborative leetcoding",
      logo: "/meetcode.png",
      size: "w-16 h-16",
      details: "Chrome extension for leetcoding with friends, comparing progress, and tracking ratings. Discontinued after LeetCode released similar paid functionality.",
      skills: ["JavaScript", "Chrome Extension API", "React", "HTML/CSS"],
      link: "#"
    },
    {
      name: "Speecher",
      description: "Automated pipeline for hate speech on Discord",
      logo: "/speecher.png",
      size: "w-16 h-16",  
      details: "Automated hate speech detection for Discord fine-tuned BERT models and Discord API",
      skills: ["Python", "BERT", "NLP", "Discord API", "Machine Learning"],
      link: "#"
    },
    {
      name: "MSExtractor",
      description: "Data extraction pipeline in C++ for mass shootings analysis research",
      logo: "/MSExtractor.jpg",
      size: "w-16 h-16",
      details: "OCR and NLP pipeline for mass shootings analysis research using Tesseract and OpenCV",
      skills: ["C++", "OCR", "NLP", "Data Processing", "Research Tools"],
      link: "#"
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Top grey bar */}
        <div className="w-full h-1 bg-muted mb-16"></div>
        {/* Navigation breadcrumb */}
        <nav className="text-muted-foreground mb-16 font-mono text-sm">
          <Link href="/" className="hover:text-primary transition-colors">
            troy
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">projects</span>
        </nav>

        {/* Projects section */}
        <section>
          <h1 className="text-4xl font-bold mb-12 text-primary sand-glow">projects</h1>

          <div className="space-y-5">
            {projects.map((project, index) => {
              const isExpanded = expandedIndex === index
              return (
                <div
                  key={index}
                  className="cursor-pointer transition-all duration-200 ocean-depth rounded-lg p-4 hover:bg-muted/20"
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
                      <h3 className="text-xl font-medium text-foreground mb-1">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      {isExpanded && (
                        <div className="mt-6 space-y-4">
                          <div className="text-muted-foreground leading-relaxed">
                            • {project.details}
                          </div>
                          
                          {/* Skills tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
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

        {/* Bottom grey bar */}
        <div className="w-full h-1 bg-muted mt-16"></div>
      </div>
    </div>
  )
}
