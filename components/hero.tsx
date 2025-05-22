"use client"

import { useEffect, useState, useRef } from "react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

// Define file system types
type FileContent = {
  type: "file";
  content: string;
}

type DirContent = {
  type: "dir";
  contents: string[];
}

type FileSystemItem = FileContent | DirContent;

type FileSystem = {
  [path: string]: FileSystemItem;
}

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])
  const [currentDir, setCurrentDir] = useState("~")
  const [commandOutput, setCommandOutput] = useState<JSX.Element[]>([
    <p key="welcome">Welcome to Troy Allen&apos;s terminal. Type &apos;help&apos; for available commands.</p>,
    <p key="whoami-cmd"><span className="text-secondary">troy@portfolio:~$</span> whoami</p>,
    <p key="whoami-output">Troy Allen</p>,
  ])
  
  // Reference to terminal output div for auto-scrolling
  const terminalOutputRef = useRef<HTMLDivElement>(null);

  // Define file system structure
  const fileSystem: FileSystem = {
    "~": {
      type: "dir",
      contents: ["about", "skills.txt", "status.txt", "projects", "education", "contact.txt"]
    },
    "~/about": {
      type: "dir",
      contents: ["readme.md"]
    },
    "~/projects": {
      type: "dir",
      contents: ["meetcode.md", "marvel_meta.md", "sebderm_safe.md", "hitsplat_custom.md"]
    },
    "~/education": {
      type: "dir",
      contents: ["georgia_tech.md", "florida_state.md"]
    },
    "~/skills.txt": {
      type: "file",
      content: "Python, C++, Java, JavaScript, React, FastAPI, Docker, AWS"
    },
    "~/status.txt": {
      type: "file",
      content: "Currently: Software Engineer Intern @ Trideum Corporation"
    },
    "~/contact.txt": {
      type: "file",
      content: "Email: troycallen22@gmail.com\nPhone: 407-456-0344\nLinkedIn: linkedin.com/in/troycallen\nGitHub: github.com/troycallen"
    },
    "~/about/readme.md": {
      type: "file",
      content: "Graduate student @ GT. Computer programmer and eternal student.\nI love algorithms, machine learning, and programming languages.\nSpent a lot of time doing research, but now I'm just building things that can help people directly.\nFeel free to reach out! I'm always looking for new opportunities."
    },
    "~/projects/meetcode.md": {
      type: "file",
      content: "# MeetCode (WIP)\nGoogle Chrome extension that allows users to add friends on LeetCode, code together in real-time, and track each other's progress.\n\nTechnologies: JavaScript, Chrome Extension API, WebSockets, React, Firebase\n\nGitHub: https://github.com/troycallen/meetcode"
    },
    "~/projects/marvel_meta.md": {
      type: "file",
      content: "# Marvel Meta\nAnalytics platform that processes 100,000+ daily matches and improves player win rates using Nash equilibrium concepts and GPU-accelerated game tree analysis.\n\nTechnologies: Python, FastAPI, PostgreSQL, Redis, React, Game Theory\n\nGitHub: https://github.com/troycallen/marvel-ML"
    },
    "~/projects/sebderm_safe.md": {
      type: "file",
      content: "# SebDerm Safe\nWeb application that helps people with seborrheic dermatitis find safe skincare products by analyzing ingredients and flagging potential irritants.\n\nTechnologies: React, Node.js, Express, MongoDB, AWS\n\nGitHub: https://github.com/troycallen/sebderm-safe"
    },
    "~/projects/hitsplat_custom.md": {
      type: "file",
      content: "# Hitsplat Custom\nPopular Java plugin for Old School RuneScape with 2,000+ active users that dynamically changes hitsplat colors based on attack styles.\n\nTechnologies: Java, RuneLite API, Gradle, Git"
    },
    "~/education/georgia_tech.md": {
      type: "file",
      content: "# Georgia Tech\nMS Computer Science & MS Analytics\nGraduation: Expected 2025\nRelevant Coursework: Advanced Algorithms, Machine Learning, Distributed Systems"
    },
    "~/education/florida_state.md": {
      type: "file",
      content: "# Florida State University\nBS Computer Science\nGraduation: 2021\nRelevant Coursework: Data Structures, Algorithms, Operating Systems, Computer Architecture"
    }
  };

  // Define available commands and their outputs
  const commands: Record<string, (args: string[]) => JSX.Element | JSX.Element[]> = {
    help: () => (
      <div>
        <p>Available commands:</p>
        <p>- ls: List directory contents</p>
        <p>- cd [dir]: Change directory</p>
        <p>- cat [file]: Display file contents</p>
        <p>- pwd: Print working directory</p>
        <p>- whoami: Display name</p>
        <p>- clear: Clear terminal</p>
        <p>- open [section]: Navigate to website section</p>
        <p>- history: Show command history</p>
      </div>
    ),
    whoami: () => <p>Troy Allen</p>,
    pwd: () => <p>{currentDir}</p>,
    ls: (args) => {
      const path = args.length > 0 ? resolvePath(args[0]) : currentDir;
      
      if (!fileSystem[path] || fileSystem[path].type !== "dir") {
        return <p>ls: cannot access &apos;{args[0]}&apos;: No such directory</p>;
      }
      
      const dirContent = fileSystem[path] as DirContent;
      const contents = dirContent.contents;
      return (
        <div className="grid grid-cols-3 gap-2">
          {contents.map((item: string, index: number) => {
            const fullPath = path === "~" ? `~/${item}` : `${path}/${item}`;
            const isDir = fileSystem[fullPath] && fileSystem[fullPath].type === "dir";
            return (
              <p key={index} className={isDir ? "text-blue-400" : ""}>
                {item}{isDir ? "/" : ""}
              </p>
            );
          })}
        </div>
      );
    },
    cd: (args) => {
      if (args.length === 0 || args[0] === "~") {
        setCurrentDir("~");
        return <></>;
      }
      
      const path = resolvePath(args[0]);
      
      if (!fileSystem[path]) {
        return <p>cd: no such directory: {args[0]}</p>;
      }
      
      if (fileSystem[path].type !== "dir") {
        return <p>cd: not a directory: {args[0]}</p>;
      }
      
      setCurrentDir(path);
      return <></>;
    },
    cat: (args) => {
      if (args.length === 0) {
        return <p>cat: missing file operand</p>;
      }
      
      const path = resolvePath(args[0]);
      
      if (!fileSystem[path]) {
        return <p>cat: {args[0]}: No such file or directory</p>;
      }
      
      if (fileSystem[path].type === "dir") {
        return <p>cat: {args[0]}: Is a directory</p>;
      }
      
      // Split content by newlines and render each line
      const fileContent = fileSystem[path] as FileContent;
      const content = fileContent.content;
      return (
        <div>
          {content.split('\n').map((line: string, index: number) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      );
    },
    clear: (args) => {
      // Clear the terminal immediately
      setTimeout(() => {
        setCommandOutput([]);
      }, 0);
      return <></>;
    },
    open: (args) => {
      if (args.length === 0) {
        return <p>open: missing section name</p>;
      }
      
      const section = args[0].toLowerCase();
      
      // Simple mapping of section names to ensure we have the right IDs
      const sectionMap: Record<string, string> = {
        "home": "home",
        "about": "home",
        "experience": "experience",
        "projects": "projects",
        "education": "education",
        "skills": "skills",
        "contact": "home"
      };
      
      // Check if the section name is valid
      if (!sectionMap[section]) {
        return <p>open: &apos;{section}&apos; is not a valid section. Try one of: home, about, experience, projects, education, skills, contact</p>;
      }
      
      // Get the correct section ID
      const sectionId = sectionMap[section];
      
      // Use the simplest possible approach - change the URL hash
      // This will trigger the browser's built-in scroll to anchor behavior
      setTimeout(() => {
        window.location.hash = sectionId;
      }, 100);
      
      return <p>Navigating to {section} section...</p>;
    },
    history: () => {
      if (history.length === 0) {
        return <p>No commands in history</p>;
      }
      
      return (
        <div>
          {history.map((cmd, index) => (
            <p key={index}>{index + 1}: {cmd}</p>
          ))}
        </div>
      );
    }
  };

  // Helper function to resolve paths
  const resolvePath = (path: string): string => {
    if (path.startsWith("~")) {
      return path;
    }
    
    if (path.startsWith("/")) {
      return "~" + path;
    }
    
    if (path === "..") {
      if (currentDir === "~") return "~";
      return currentDir.split("/").slice(0, -1).join("/") || "~";
    }
    
    return currentDir === "~" ? `~/${path}` : `${currentDir}/${path}`;
  };

  // Handle command execution
  const executeCommand = (cmdLine: string) => {
    const parts = cmdLine.trim().split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    if (cmd === "clear") {
      setCommandOutput([]);
      return <></>;
    }
    
    if (commands[cmd]) {
      return commands[cmd](args);
    }
    
    // Command not found
    return <p>Command not found: {cmd}. Type &apos;help&apos; for available commands.</p>;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add to history
    setHistory([...history, input]);
    
    // Special handling for clear command
    if (input.trim().toLowerCase() === "clear") {
      setCommandOutput([]);
      setInput("");
      return;
    }
    
    const newOutput = [
      ...commandOutput,
      <p key={`cmd-${commandOutput.length}`}>
        <span className="text-secondary">troy@portfolio:{currentDir}$</span> {input}
      </p>,
      <div key={`output-${commandOutput.length}`}>{executeCommand(input)}</div>
    ];
    
    setCommandOutput(newOutput);
    setInput("");
  };

  // Auto-scroll terminal to bottom when output changes
  useEffect(() => {
    if (terminalOutputRef.current) {
      terminalOutputRef.current.scrollTop = terminalOutputRef.current.scrollHeight;
    }
  }, [commandOutput]);

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
              <span className="text-secondary">$</span> Graduate CS student @ GT specializing in AI.
            </p>
            <p className="text-muted-foreground">
              <span className="text-secondary">$</span> Interested in machine learning, NLP, and programming languages.
            </p>
            <p className="text-muted-foreground">
              <span className="text-secondary">$</span> Spent a lot of time doing research in the past, but now I'm just building things that can help people directly.
            </p>
            <p className="text-muted-foreground">
              <span className="text-secondary">$</span> Feel free to reach out! I'm always looking to meet new people.
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
          <div 
            ref={terminalOutputRef}
            className="font-mono text-sm space-y-2 flex-1 overflow-y-auto mb-2 terminal-output"
          >
            {commandOutput.map((output, index) => (
              <div key={index}>{output}</div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-secondary mr-2">troy@portfolio:{currentDir}$</span>
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

