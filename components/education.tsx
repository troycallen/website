export function Education() {
  const education = [
    {
      school: "Georgia Institute of Technology",
      location: "Atlanta, GA",
      degrees: [
        {
          name: "Master of Science in Computer Science",
          gpa: "4.00/4.00 GPA",
          period: "Aug 2024 - Dec 2025",
        },
        {
          name: "Master of Science in Analytics",
          gpa: "3.78/4.00 GPA",
          period: "Aug 2022 - Aug 2024",
        },
      ],
    },
    {
      school: "Florida State University",
      location: "Tallahassee, FL",
      degrees: [
        {
          name: "Bachelor of Science in Computer Science",
          gpa: "3.81/4.00 GPA",
          period: "Jun 2017 - May 2021",
        },
      ],
    },
  ]

  return (
    <section id="education" className="terminal-section">
      <h2 className="terminal-header text-2xl mb-6">education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-accent pl-4">
            <h3 className="font-bold text-lg mb-1">{edu.school}</h3>
            <p className="text-muted-foreground mb-3">{edu.location}</p>
            <div className="space-y-3">
              {edu.degrees.map((degree, i) => (
                <div key={i}>
                  <div className="flex flex-wrap justify-between items-start">
                    <p className="font-medium">{degree.name}</p>
                    <span className="font-mono text-muted-foreground text-sm">{degree.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{degree.gpa}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

