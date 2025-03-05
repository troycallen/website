"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [commandOutput, setCommandOutput] = useState<JSX.Element[]>([
    <p key="welcome">Welcome to Troy Allen's terminal. Type 'help' for available commands.</p>,
    <p key="whoami-cmd"><span className="text-secondary">$</span> whoami</p>,
    <p key="whoami-output">Troy Allen</p>,
  ])

  // Define available commands and their outputs
  const commands: Record<string, () => JSX.Element | JSX.Element[]> = {
    help: () => (
      <div>
        <p>Available commands:</p>
        <p>- whoami: Display name</p>
        <p>- skills: List technical skills</p>
        <p>- status: Show current status</p>
        <p>- education: Show education history</p>
        <p>- contact: Display contact information</p>
        <p>- projects: List notable projects</p>
        <p>- clear: Clear terminal</p>
      </div>
    ),
    whoami: () => <p>Troy Allen</p>,
    skills: () => <p>Python, C++, Java, JavaScript, React, FastAPI, Docker, AWS</p>,
    status: () => <p>Currently: Software Engineer Intern @ Trideum Corporation</p>,
    education: () => (
      <div>
        <p>Georgia Tech - MS Computer Science & MS Analytics</p>
        <p>Florida State - BS Computer Science</p>
      </div>
    ),
    contact: () => (
      <div>
        <p>Email: troycallen22@gmail.com</p>
        <p>Phone: 407-456-0344</p>
        <p>LinkedIn: linkedin.com/in/troycallen</p>
        <p>GitHub: github.com/troycallen</p>
      </div>
    ),
    projects: () => (
      <div>
        <p>Visit the projects section for more details.</p>
        <p>Type 'open projects' to navigate there.</p>
      </div>
    ),
    clear: () => {
      setCommandOutput([]);
      return <></>;
    },
  };

  // Handle special commands
  const handleSpecialCommands = (cmd: string) => {
    if (cmd.startsWith('open ')) {
      const section = cmd.split(' ')[1];
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return <p>Navigating to {section}...</p>;
      } else {
        return <p>Section '{section}' not found.</p>;
      }
    }
    return null;
  };

  // Handle command execution
  const executeCommand = (cmd: string) => {
    setHistory([...history, cmd]);
    
    // Check for special commands first
    const specialOutput = handleSpecialCommands(cmd);
    if (specialOutput) {
      return specialOutput;
    }
    
    // Check for regular commands
    if (commands[cmd]) {
      return commands[cmd]();
    }
    
    // Command not found
    return <p>Command not found: {cmd}. Type 'help' for available commands.</p>;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    const newOutput = [
      ...commandOutput,
      <p key={`cmd-${commandOutput.length}`}><span className="text-secondary">$</span> {input}</p>,
      <div key={`output-${commandOutput.length}`}>{executeCommand(input.toLowerCase())}</div>
    ];
    
    setCommandOutput(newOutput);
    setInput("");
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Replace the ASCII art with a simple styled heading for better alignment */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono text-primary">Troy Allen</h1>
          <div className="mb-6 font-mono">
            <p className="text-xl mb-2">Software Engineer</p>
            <p className="text-muted-foreground">
              <span className="text-secondary">$</span> Graduate student @ GT. Computer programmer and eternal student.
            </p>
            <p className="text-muted-foreground">
              <span className="text-secondary">$</span> I love algorithms, machine learning, and programming languages.
            </p>
            <p className="text-muted-foreground">
              <span className="text-secondary">$</span> Spent a lot of time doing research, but now I'm just building things that can help people directly.
            </p>
            <p className="text-muted-foreground">
              <span className="text-secondary">$</span> Feel free to reach out! I'm always looking for new opportunities.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:troycallen22@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Mail size={18} />
              <span className="font-mono">Email</span>
            </Link>
            <Link
              href="tel:4074560344"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Phone size={18} />
              <span className="font-mono">407-456-0344</span>
            </Link>
            <Link
              href="https://linkedin.com/in/troycallen"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Linkedin size={18} />
              <span className="font-mono">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/troycallen"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
            >
              <Github size={18} />
              <span className="font-mono">GitHub</span>
            </Link>
          </div>
        </div>

        <div className="terminal-section overflow-hidden bg-black/80 rounded-lg border border-muted p-4 h-[400px] flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="font-mono text-muted-foreground">terminal</div>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="font-mono text-sm space-y-2 flex-1 overflow-y-auto mb-2">
            {commandOutput.map((output, index) => (
              <div key={index}>{output}</div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-secondary mr-2">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none font-mono text-sm"
              autoFocus
              aria-label="Terminal input"
            />
          </form>
        </div>
      </div>
    </section>
  )
}

