import Link from "next/link"

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Navigation breadcrumb */}
        <nav className="text-gray-400 mb-16 font-mono text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            ta
          </Link>
          <span className="mx-2">/</span>
          <span>...</span>
          <span className="mx-2">/</span>
          <span>resume</span>
        </nav>

        {/* Resume section */}
        <section>
          <h1 className="text-4xl font-bold mb-12">resume</h1>
          
          <div className="space-y-6">
            <p className="text-gray-400 text-lg">
              Download my resume to learn more about my experience and skills.
            </p>
            
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-gray-300 hover:text-white transition-colors underline"
            >
              View Resume (PDF) →
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
