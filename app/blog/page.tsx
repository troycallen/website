import Link from "next/link"

export default function Blog() {
  const post = {
    title: "With Regard to the Pursuit of Perfection",
    excerpt: "why the little motor in our heads never seems to stop running",
    date: "2025-08-15",
    readTime: "3 min read",
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-8 py-16">
        {/* Top grey bar */}
        <div className="w-full h-1 bg-muted mb-16"></div>
        {/* Navigation breadcrumb */}
        <nav className="text-muted-foreground mb-16 font-mono text-sm">
          <Link href="/" className="hover:text-primary transition-colors">
            troy
          </Link>
          <span className="mx-2">/</span>
          <span className="text-primary">blog</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-primary sand-glow">blog</h1>
          <p className="text-muted-foreground text-lg">
            Mostly have this to type into the void and look back on later.
          </p>
        </div>

        {/* Single blog post */}
        <article className="border-b border-border pb-8 ocean-depth rounded-lg p-6 hover:bg-muted/10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4 text-sm text-secondary">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <h2 className="text-2xl font-semibold text-foreground">
              {post.title}
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </article>

        {/* Bottom grey bar */}
        <div className="w-full h-1 bg-muted mt-16"></div>
      </div>
    </div>
  )
}