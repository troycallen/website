import Link from "next/link"

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-8">
        {/* Navigation breadcrumb */}
        <nav className="text-gray-400 mb-8 font-mono text-sm">
          <Link href="/" className="hover:text-white transition-colors">
            ta
          </Link>
          <span className="mx-2">/</span>
          <span>...</span>
          <span className="mx-2">/</span>
          <span>resume</span>
        </nav>

        {/* Resume content */}
        <div className="relative p-8 bg-gray-900/50 border border-gray-800 rounded-2xl hover:border-gray-700 hover:bg-gray-900/70 transition-all duration-300">
          <h1 className="text-4xl font-bold mb-8 text-white">resume</h1>

          {/* PDF Embed */}
          <div className="w-full h-[600px] bg-white rounded-lg overflow-hidden border border-gray-700">
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
              className="inline-flex items-center px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:text-white hover:border-gray-600 hover:bg-gray-700 transition-all duration-200 font-medium"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
