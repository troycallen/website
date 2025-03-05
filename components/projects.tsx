import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const projects = [
    {
      title: "Marvel Rivals Analytics",
      description:
        "Analytics platform that processes 100,000+ daily matches and improves player win rates by 15% using Nash equilibrium concepts and GPU-accelerated game tree analysis.",
      technologies: ["Python", "FastAPI", "PostgreSQL", "Redis", "React", "Game Theory"],
      links: {
        github: "https://github.com/troycallen/marvel-ML",
      },
    },
    {
      title: "SebDerm Safe",
      description:
        "Web application that helps people with seborrheic dermatitis find safe skincare products by analyzing ingredients and flagging potential irritants.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS"],
      links: {
        github: "https://github.com/troycallen/sebderm-safe",
        demo: "#",
      },
    },
    {
      title: "Hitsplat Custom",
      description:
        "Popular Java plugin for Old School RuneScape with 2,000+ active users that enhances gaming experience through customization options.",
      technologies: ["Java", "RuneLite API", "Gradle", "Git"],
      links: {
        github: "#",
      },
    },
    {
      title: "MeetCode (WIP)",
      description:
        "Collaborative coding platform for technical interview practice that allows users to code together in real-time while solving algorithm problems.",
      technologies: ["React", "Node.js", "Socket.io", "Monaco Editor", "Docker"],
      links: {
        github: "https://github.com/troycallen/meetcode",
      },
    },
  ]

  return (
    <section id="projects" className="terminal-section">
      <h2 className="terminal-header text-2xl mb-6">projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-border rounded-md p-4 bg-muted/20 hover:bg-muted/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg text-secondary">{project.title}</h3>
              <div className="flex gap-2">
                {project.links.github && (
                  <Link
                    href={project.links.github}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                  >
                    <Github size={18} />
                  </Link>
                )}
                {project.links.demo && (
                  <Link
                    href={project.links.demo}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    target="_blank"
                  >
                    <ExternalLink size={18} />
                  </Link>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

