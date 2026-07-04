import { projects } from '@/data/portfolio';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Browse CraftedClicks portfolio of high-performing websites, apps, and digital products.',
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#020817] pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="tag mb-4">Our Portfolio</span>
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Real results for <span className="gradient-text">real businesses</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            From fitness clubs to wellness clinics, here are some of our most impactful live demonstrations.
          </p>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="portfolio-card relative min-h-[320px] flex flex-col justify-end group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-15`} />
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="portfolio-overlay absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/60 to-transparent" />
              
              <div className="relative z-10 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="tag text-xs">{project.category}</span>
                  {project.tags.slice(0, 2).map((t) => (
                    <span key={t} className="text-xs text-[#64748b] font-mono bg-white/5 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-[#94a3b8] text-sm mb-4">{project.clientName}</p>
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
      </section>
    </div>
  );
}
