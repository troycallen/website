import Link from "next/link"

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Navigation breadcrumb */}
        <nav className="text-gray-400 mb-16 font-mono text-sm">
          <Link href="/" className="hover:text-white">
            tr
          </Link>
          <span className="mx-2">/</span>
          <span>...</span>
          <span className="mx-2">/</span>
          <span>resume</span>
        </nav>

        {/* Resume content */}
        <section>
          <h1 className="text-4xl font-bold mb-12">resume</h1>

          {/* PDF Embed */}
          <div className="w-full h-screen bg-white rounded-lg overflow-hidden">
            <iframe
              src="/resume.pdf"
              className="w-full h-full"
              title="Troy Allen Resume"
            />
          </div>

          {/* Download link */}
          <div className="mt-8 text-center">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Download PDF
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
