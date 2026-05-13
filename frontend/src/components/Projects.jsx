const projects = [
  {
    title: 'Multi-Agent Orchestrator',
    description:
      'A framework for orchestrating multiple AI agents that collaborate to solve complex tasks using LangChain and custom routing logic.',
    tags: ['Python', 'LangChain', 'FastAPI'],
    github: 'https://github.com/AravindGarapati',
  },
  {
    title: 'RAG Knowledge Base',
    description:
      'Retrieval-augmented generation system with vector search, document ingestion pipelines, and real-time question answering.',
    tags: ['Python', 'Docker', 'OpenAI'],
    github: 'https://github.com/AravindGarapati',
  },
  {
    title: 'AI Code Reviewer',
    description:
      'Automated code review tool that uses LLMs to analyze pull requests, detect issues, and suggest improvements inline.',
    tags: ['Python', 'FastAPI', 'LangChain'],
    github: 'https://github.com/AravindGarapati',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-gray-800 text-purple-300 rounded text-xs"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm transition-colors self-start"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
