import Link from "next/link"

export default function Work() {
  const experiences = [
    {
      role: "AI/ML Software Engineer",
      company: "Trideum Corporation",
      period: "Dec 2024 - Present",
      logo: "🏢",
      color: "bg-blue-600",
    },
    {
      role: "Software Engineer Intern",
      company: "Shepherd Center",
      period: "May 2024 - Dec 2024",
      logo: "🏥",
      color: "bg-green-600",
    },
    {
      role: "Research Assistant",
      company: "Florida State University",
      period: "May 2021 - May 2022",
      logo: "🎓",
      color: "bg-red-600",
    },
    {
      role: "Undergraduate Researcher",
      company: "Florida State University",
      period: "Jan 2019 - May 2021",
      logo: "🎓",
      color: "bg-red-600",
    },
    {
      role: "Lead Teaching Assistant",
      company: "Florida State University",
      period: "Jul 2020 - Dec 2020",
      logo: "📚",
      color: "bg-yellow-600",
    },
  ]

  const education = [
    {
      degree: "MS Computer Science",
      school: "Georgia Institute of Technology",
      period: "Aug 2024 - Dec 2025",
      gpa: "4.00/4.00",
    },
    {
      degree: "MS Analytics",
      school: "Georgia Institute of Technology",
      period: "Aug 2022 - Aug 2024",
      gpa: "3.78/4.00",
    },
    {
      degree: "BS Computer Science",
      school: "Florida State University",
      period: "Jun 2017 - Dec 2021",
      gpa: "3.81/4.00",
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
          <span>work</span>
        </nav>

        {/* Work section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-12">work</h1>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg ${exp.color} flex items-center justify-center text-xl`}>
                    {exp.logo}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-gray-400">{exp.company}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education section */}
        <section>
          <h2 className="text-4xl font-bold mb-12">education</h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="flex items-center justify-between py-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-700 flex items-center justify-center text-xl">🎓</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                    <p className="text-gray-400">{edu.school}</p>
                    <p className="text-gray-500 text-sm">GPA: {edu.gpa}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
