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
      company: "Conduent",
      period: "Aug 2025 - Present",
      logo: "/conduent.jpg",
      size: "w-16 h-16",
      skills: ["Python", "PyTorch", "TensorFlow", "Docker", "Machine Learning"],
      details: "Working with the cybersecurity team to build defensive AI/ML models for threat detection",
    },
    {
      role: "AI Research Assistant",
      company: "Georgia Institute of Technology",
      period: "Aug 2025 - Present",
      logo: "/gt.jpg",
      size: "w-16 h-16",
      skills: ["Python", "NLP", "LLMs", "AI Agents"],
      details: "Researching optimization and sustainability of local LLM and AI deployments under Dr. Nicholas Lytle",
    },
    {
      role: "Software Engineer Intern",
      company: "Trideum Corporation",
      period: "Dec 2024 - Aug 2025",
      logo: "/trideum.jpg",
      size: "w-16 h-16",
      skills: ["Python", "Docker", "CUDA", "PyTorch", "NLP"],
      details: "Built multimodal AI labeling platform using NLP, computer vision, and CUDA and optimized backend search",
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Shepherd Center",
      period: "May 2024 - Dec 2024",
      logo: "/shepherd_center.jpg",
      size: "w-16 h-16",
      skills: ["Python", "PyTorch", "Flask", "Redis", "Machine Learning"],
      details: "Built neural networks and APIs to aid clinicians in pressure ulcer prediction in spinal cord injury patients"
    },
    {
      role: "Graduate Research Assistant",
      company: "Florida State University",
      period: "Jun 2021 - May 2022",
      logo: "/fsu.jpg",
      size: "w-16 h-16",
      skills: ["Python", "BERT", "NLP", "Discord API", "TSP"],
      details: "Optimized patrol routes using TSP and researched hate speech using NLP"
    },
    {
      role: "Undergraduate Researcher",
      company: "Florida State University",
      period: "Jan 2019 - May 2021",
      logo: "/fsu.jpg",
      size: "w-16 h-16",
      skills: ["C++", "OpenCV", "Python", "NLP", "Database Design"],
      details: "Conducted research on mass shootings, developed OCR and NLP pipeline, and built novel database of public mass shootings under Dr. Jillian Turanovic"
    },
    {
      role: "Lead Teaching Assistant",
      company: "Florida State University",
      period: "Jul 2020 - Dec 2020",
      logo: "/fsu_logo.png",
      size: "w-16 h-16",
      skills: ["C++", "Teaching", "Systems Programming"],
      details: "Systems programming and C++ teaching assistant during COVID-19"
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Navigation breadcrumb */}
        <nav className="text-gray-400 mb-16 font-mono text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            troy
          </Link>
          <span className="mx-2">/</span>
          <span>...</span>
          <span className="mx-2">/</span>
          <span>work</span>
        </nav>

        {/* Work section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-12">work</h1>

          <div className="space-y-5">
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
                      <div className={`${exp.size} rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 relative`}>
                        {exp.logo.startsWith('/') ? (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            fill
                            className="object-contain p-1"
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
                            <div className="text-gray-300 leading-relaxed">
                              • {exp.details}
                            </div>
                            
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
