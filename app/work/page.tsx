"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Work() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Trideum Corporation",
      period: "Dec 2024 - Present",
      logo: "/trideum.png",
      color: "bg-blue-600",
      description: "Engineered multimodal AI platform processing 290,000+ files using computer vision, NLP, and CUDA.",
      skills: ["Python", "Docker", "CUDA", "PyTorch", "Computer Vision", "NLP"],
      details: "Engineered multimodal AI platform processing 290,000+ files using computer vision, NLP, and CUDA with 12+ Docker microservices. Reduced hybrid search latency 80% by optimizing Milvus vector database with dynamic IVF and HNSW indexing. Enhanced BERTopic performance 2x through multi-threaded batch processing and implemented backend LLM streaming reducing query response times 3-4x."
    },
    {
      role: "Software Engineer Intern",
      company: "Shepherd Center",
      period: "May 2024 - Dec 2024",
      logo: "/sc.webp",
      color: "bg-green-600",
      description: "Developed neural network architecture for pressure ulcer prediction achieving 93% accuracy.",
      skills: ["Python", "PyTorch", "Flask", "Redis", "Machine Learning", "scikit-learn"],
      details: "Developed neural network architecture for pressure ulcer prediction in spinal cord injury patients achieving 93% accuracy using Python/PyTorch. Reduced API response time 60% by implementing containerized Flask endpoints with Redis caching. Built real-time clinical dashboard processing 400+ patient datasets using machine learning pipelines."
    },
    {
      role: "Research Assistant",
      company: "Florida State University",
      period: "Jan 2019 - May 2022",
      logo: "/fsu.svg",
      color: "bg-red-600",
      description: "Secured $289k NIJ research grant by designing database schema and framework for mass shootings analysis.",
      skills: ["C++", "OpenCV", "Python", "BERT", "NLP", "Database Design"],
      details: "Secured $289k NIJ research grant by designing database schema and framework for mass shootings analysis. Reduced research time by 20 weeks creating OCR/NLP pipeline in C++ for data extraction with OpenCV. Built automated hate speech detection pipeline for Discord communities using fine-tuned BERT models achieving 89% classification accuracy on 50K+ messages."
    },
    {
      role: "Lead Teaching Assistant",
      company: "Florida State University",
      period: "Jul 2020 - Dec 2020",
      logo: "/fsu.svg",
      color: "bg-yellow-600",
      description: "Achieved 100% rating from 75+ students developing C++ curriculum with system-level programming focus.",
      skills: ["C++", "Teaching", "Curriculum Development", "System Programming"],
      details: "Achieved 100% rating from 75+ students developing C++ curriculum with system-level programming focus. Led programming labs and provided comprehensive academic support for computer science courses with emphasis on low-level programming concepts."
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
          <span>work</span>
        </nav>

        {/* Work section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-12">work</h1>

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index
              return (
                <div 
                  key={index} 
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex items-start justify-between py-2">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-12 h-12 rounded-lg ${exp.color} flex items-center justify-center overflow-hidden flex-shrink-0`}>
                        {exp.logo.startsWith('/') ? (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={48}
                            height={48}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          exp.logo
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-medium text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-gray-400 mb-2">{exp.company}</p>
                        
                        {isExpanded && (
                          <div className="mt-6 space-y-4">
                            <p className="text-gray-300 leading-relaxed">
                              {exp.details}
                            </p>
                            
                            {/* Skills tags */}
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
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
                    <div className="text-right text-sm text-gray-400 ml-4">
                      {exp.period}
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
