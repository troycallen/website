export function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Trideum Corporation",
      location: "Atlanta, GA",
      period: "Dec 2024 - Present",
      description:
        "Developing scalable data labeling systems and optimizing vector embedding processes using CUDA and RAPIDS cuML. Implementing hybrid search systems with ElasticSearch and Milvus.",
    },
    {
      title: "Software Engineer Intern",
      company: "Shepherd Center",
      location: "Atlanta, GA",
      period: "May 2024 - Sep 2024",
      description:
        "Built predictive models for pressure ulcer detection with PyTorch. Developed API systems with Docker and Flask for medical predictions.",
    },
    {
      title: "Research Assistant",
      company: "Florida State University",
      location: "Tallahassee, FL",
      period: "Jan 2019 - May 2022",
      description:
        "Designed database schema for shooting incident research. Created OCR/NLP pipeline for document processing and optimized patrol routes using TSP algorithms.",
    },
    {
      title: "Head Teaching Assistant",
      company: "Florida State University",
      location: "Tallahassee, FL",
      period: "Jul 2020 - Dec 2020",
      description: "Developed and executed curriculum as sole teaching assistant for computer science courses.",
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

