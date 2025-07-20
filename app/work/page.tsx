import Link from "next/link"
import Image from "next/image"

export default function Work() {
  const experiences = [
    {
      role: "AI/ML Software Engineer",
      company: "Trideum Corporation",
      period: "Dec 2024 - Present",
      logo: "/trideum.png",
      color: "bg-blue-600",
    },
    {
      role: "Software Engineer Intern",
      company: "Shepherd Center",
      period: "May 2024 - Dec 2024",
      logo: "/sc.webp",
      color: "bg-green-600",
    },
    {
      role: "Research Assistant",
      company: "Florida State University",
      period: "May 2021 - May 2022",
      logo: "/fsu.svg",
      color: "bg-red-600",
    },
    {
      role: "Undergraduate Researcher",
      company: "Florida State University",
      period: "Jan 2019 - May 2021",
      logo: "/fsu.svg",
      color: "bg-red-600",
    },
    {
      role: "Lead Teaching Assistant",
      company: "Florida State University",
      period: "Jul 2020 - Dec 2020",
      logo: "/fsu.svg",
      color: "bg-yellow-600",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Navigation breadcrumb */}
        <nav className="text-gray-400 mb-16 font-mono text-sm">
          <Link href="/" className="hover:text-white">
            ta
          </Link>
          <span className="mx-2">/</span>
          <span>...</span>
          <span className="mx-2">/</span>
          <span>work</span>
        </nav>

        {/* Work section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-16">work</h1>

          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="group relative p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:border-gray-700 hover:bg-gray-900/70 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${exp.color} flex items-center justify-center text-xl overflow-hidden shadow-lg`}>
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
                      <p className="text-gray-300 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">
                      {exp.period}
                    </span>
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
