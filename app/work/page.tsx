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


      </div>
    </div>
  )
}
