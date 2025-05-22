export function Skills() {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL"],
    },
    {
      name: "Frameworks",
      skills: ["React", "FastAPI", "Flask", "Node.js", "Express", "Django", "PyTorch", "TensorFlow", "gRPC", "CUDA", "LangChain", "LLMs"],
    },
    {
      name: "Tools",
      skills: ["Git", "GitLab", "Linux/Unix", "Docker", "Google Cloud", "AWS", "MySQL", "MongoDB", "Redis", "ElasticSearch"],
    },
    {
      name: "Concepts",
      skills: ["RAG", "Backend Development", "NLP", "Agile/Scrum", "Distributed Systems", "Data Structures & Algorithms", "OOP", "API Design"],
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

