const skills = ['Python', 'FastAPI', 'MultiAgent', 'LangChain', 'Docker']

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">About</h2>
      <p className="text-gray-400 text-center leading-relaxed mb-10">
        I am a Senior Gen AI Developer with deep expertise in building
        intelligent, scalable systems powered by large language models and
        multi-agent architectures. I love turning complex AI research into
        production-ready products that deliver real business value.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="px-4 py-2 bg-gray-800 text-purple-300 rounded-full text-sm border border-gray-700"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}
