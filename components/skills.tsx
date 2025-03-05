export function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      name: "Frameworks",
      skills: ["React", "FastAPI", "Flask", "Node.js", "Express", "Django", "PyTorch", "gRPC"],
    },
    {
      name: "Tools",
      skills: ["Git", "GitLab", "Linux/Unix", "Docker", "Google Cloud", "AWS", "MySQL", "MongoDB", "Redis"],
    },
    {
      name: "Concepts",
      skills: ["Agile/Scrum", "Distributed Systems", "Data Structures & Algorithms", "OOP", "API Design"],
    },
    {
      name: "Leadership",
      skills: ["FSU Esports Club Manager (500+ members)", "FSU Overwatch Captain", "GT Esports", "GT Hackathons"],
    },
  ]

  return (
    <section id="skills" className="terminal-section">
      <h2 className="terminal-header text-2xl mb-6">skills</h2>
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="font-mono text-secondary mb-2">{category.name}:</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="text-sm px-3 py-1 rounded-md bg-muted/50 text-foreground border border-border">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

