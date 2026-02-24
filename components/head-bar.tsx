import Link from "next/link"

export function HeadBar() {
  return (
    <header className="head-bar w-full border-b border-border bg-background">
      <nav className="max-w-[36rem] mx-auto px-6 py-4 text-sm text-muted-foreground" aria-label="Main">
        <Link href="/" className="hover:text-foreground transition-colors">
          troy
        </Link>
        {' · '}
        <a href="/#work" className="hover:text-foreground transition-colors">
          work
        </a>
        {' · '}
        <a href="/#projects" className="hover:text-foreground transition-colors">
          projects
        </a>
        {' · '}
        <a href="/#blog" className="hover:text-foreground transition-colors">
          blog
        </a>
        {' · '}
        <a href="mailto:troycallen.dev@gmail.com" className="hover:text-foreground transition-colors">
          email
        </a>
        {' · '}
        <a href="https://github.com/troycallen" target="_blank" rel="noreferrer noopener" className="hover:text-foreground transition-colors">
          GitHub
        </a>
        {' · '}
        <a href="https://linkedin.com/in/troycallen" target="_blank" rel="noreferrer noopener" className="hover:text-foreground transition-colors">
          LinkedIn
        </a>
      </nav>
    </header>
  )
}
