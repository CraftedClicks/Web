import Link from 'next/link';
import { projects } from '@/data/portfolio';

export default function PortfolioHighlights() {
  // Highlight the first 4 projects on the homepage
  const highlights = projects.slice(0, 4);

  return (
    <section className="py-24 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Real live demonstrations of our web design and development work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((project) => (
            <div
              key={project.slug}
              className="portfolio-card relative min-h-[300px] flex flex-col justify-end group"
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-15`} />
              <div className="absolute inset-0 grid-pattern opacity-30" />

              {/* Overlay on hover */}
              <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

              <div className="relative z-10 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="tag text-xs">{project.category}</span>
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="text-xs text-[#64748b] font-mono">{tag}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-[#94a3b8] text-sm mb-3">{project.clientName}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-cyan-400 text-sm font-semibold">{project.result}</span>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="text-xs text-[#94a3b8] hover:text-white bg-white/5 border border-white/10 px-4 py-2.5 rounded-full transition-all flex items-center justify-center min-h-[44px]"
                    >
                      Case Study
                    </Link>
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 px-4 py-2.5 rounded-full font-semibold transition-all shadow-[0_0_10px_rgba(6,182,212,0.3)] flex items-center justify-center min-h-[44px]"
                      >
                        Live Demo &rarr;
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 border border-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 hover:border-cyan-500/40 transition-all"
          >
            View All Projects
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
