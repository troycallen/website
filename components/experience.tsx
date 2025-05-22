export function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Trideum Corporation",
      location: "Atlanta, GA",
      period: "Dec 2024 - Present",
      description:
        "Optimizing backend search performance, improving embedding models using CUDA, and coordinating Docker deployments.",
    },
    {
      title: "Software Engineer Intern",
      company: "Shepherd Center",
      location: "Atlanta, GA",
      period: "May 2024 - Sep 2024",
      description:
        "Building predictive models for pressure ulcer detection, researching causes, and building a dashboard with containerized APIs and caching.",
    },
    {
      title: "Research Assistant",
      company: "Florida State University",
      location: "Tallahassee, FL",
      period: "Jan 2019 - May 2022",
      description:
        "Researching mass shootings, NLP techniques, and graph algorithms.",
    },
    {
      title: "Head Teaching Assistant",
      company: "Florida State University",
      location: "Tallahassee, FL",
      period: "Jul 2020 - Dec 2020",
      description: "Sole TA for Dr. George Pesta during the COVID-19 pandemic.",
    },
  ]

  return (
    <section id="experience" className="terminal-section">
      <h2 className="terminal-header text-2xl mb-6">work_experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-primary pl-4">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{exp.title}</h3>
              <span className="font-mono text-muted-foreground text-sm">{exp.period}</span>
            </div>
            <div className="mb-2">
              <span className="terminal-accent">{exp.company}</span>
              <span className="text-muted-foreground"> | {exp.location}</span>
            </div>
            <p className="text-sm text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

