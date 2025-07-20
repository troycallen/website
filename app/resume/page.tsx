import Link from "next/link"

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Navigation breadcrumb */}
        <nav className="text-gray-400 mb-16 font-mono text-sm">
          <Link href="/" className="hover:text-white">
            ta
          </Link>
          <span className="mx-2">/</span>
          <span>...</span>
          <span className="mx-2">/</span>
          <span>resume</span>
        </nav>

        {/* Resume content */}
        <section>
          <h1 className="text-4xl font-bold mb-12">resume</h1>

          <div className="space-y-12">
            {/* Contact Info */}
            <div className="text-center pb-8 border-b border-gray-800">
              <h2 className="text-2xl font-bold mb-2">Troy Conner Allen</h2>
              <div className="text-gray-400 space-y-1">
                <p>407-456-0344 | troycallen.dev@gmail.com</p>
                <p>github.com/troycallen | linkedin.com/in/troycallen</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-300">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-400">Languages:</span>
                  <span className="ml-2">Python, C++, Rust, Java, JavaScript, SQL</span>
                </div>
                <div>
                  <span className="text-gray-400">Frameworks:</span>
                  <span className="ml-2">PyTorch, TensorFlow, CUDA, FastAPI, Flask, React, Docker</span>
                </div>
                <div>
                  <span className="text-gray-400">Tools:</span>
                  <span className="ml-2">Git, Linux, AWS, PostgreSQL, MongoDB, Redis, Milvus</span>
                </div>
                <div>
                  <span className="text-gray-400">Concepts:</span>
                  <span className="ml-2">Machine Learning, NLP, Distributed Systems, Backend Development</span>
                </div>
              </div>
            </div>

            {/* Download link */}
            <div className="pt-8">
              <a
                href="/resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Download Full Resume
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
