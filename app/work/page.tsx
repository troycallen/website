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
      role: "AI/ML Software Engineer",
      company: "Trideum Corporation",
      period: "Dec 2024 - Present",
      logo: "/trideum.png",
      color: "bg-blue-600",
      description: "Developing AI/ML solutions for defense applications, focusing on computer vision and natural language processing.",
      skills: ["Python", "TensorFlow", "OpenCV", "Docker", "AWS"],
      details: "Working on cutting-edge AI/ML projects for defense applications. Specializing in computer vision algorithms, natural language processing, and machine learning model deployment. Collaborating with cross-functional teams to deliver robust, scalable solutions."
    },
    {
      role: "Software Engineer Intern",
      company: "Shepherd Center",
      period: "May 2024 - Dec 2024",
      logo: "/sc.webp",
      color: "bg-green-600",
      description: "Developed healthcare software solutions for patient care and rehabilitation.",
      skills: ["React", "Node.js", "PostgreSQL", "TypeScript", "Docker"],
      details: "Built and maintained healthcare software systems for patient care and rehabilitation. Developed full-stack applications using React, Node.js, and PostgreSQL. Implemented secure data handling and HIPAA compliance features."
    },
    {
      role: "Research Assistant",
      company: "Florida State University",
      period: "May 2021 - May 2022",
      logo: "/fsu.svg",
      color: "bg-red-600",
      description: "Conducted research in machine learning and data analysis for academic projects.",
      skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      details: "Conducted research in machine learning and data analysis. Developed algorithms for pattern recognition and predictive modeling. Published findings in academic journals and presented at conferences."
    },
    {
      role: "Undergraduate Researcher",
      company: "Florida State University",
      period: "Jan 2019 - May 2021",
      logo: "/fsu.svg",
      color: "bg-red-600",
      description: "Participated in undergraduate research programs focusing on computer science applications.",
      skills: ["Java", "C++", "Python", "Git", "Linux"],
      details: "Participated in undergraduate research programs focusing on computer science applications. Worked on various projects including algorithm optimization, data structures, and software engineering principles."
    },
    {
      role: "Lead Teaching Assistant",
      company: "Florida State University",
      period: "Jul 2020 - Dec 2020",
      logo: "/fsu.svg",
      color: "bg-yellow-600",
      description: "Led programming labs and provided academic support for computer science students.",
      skills: ["Java", "C++", "Teaching", "Mentoring", "Problem Solving"],
      details: "Led programming labs and provided academic support for computer science students. Developed course materials, graded assignments, and conducted office hours. Mentored students in programming fundamentals and problem-solving techniques."
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
          <span>work</span>
        </nav>

        {/* Work section */}
        <div className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-gray-700 hover:bg-gray-900/70 transition-all duration-300">
          <h1 className="text-4xl font-bold mb-8 text-white">work</h1>

          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const isExpanded = expandedIndex === index
              return (
                <div 
                  key={index} 
                  className="group relative p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-gray-600 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
                  onClick={() => toggleExpanded(index)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-xl ${exp.color} flex items-center justify-center text-xl overflow-hidden shadow-lg flex-shrink-0`}>
                        {exp.logo.startsWith('/') ? (
                          <Image
                            src={exp.logo}
                            alt={`${exp.company} logo`}
                            width={56}
                            height={56}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          exp.logo
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
                        
                        {isExpanded && (
                          <>
                            <p className="text-gray-400 text-sm mb-3">{exp.description}</p>
                            
                            {/* Skills tags */}
                            <div className="flex flex-wrap gap-2 mb-3">
                              {exp.skills.map((skill, skillIndex) => (
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
                              <p className="text-gray-300 leading-relaxed">
                                {exp.details}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300 border border-gray-600">
                        {exp.period}
                      </span>
                      <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
