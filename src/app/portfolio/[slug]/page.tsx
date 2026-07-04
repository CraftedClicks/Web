import { projects } from '@/data/portfolio';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<'/portfolio/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.title || 'Project',
    description: project?.solution,
  };
}

export default async function ProjectDetailPage(props: PageProps<'/portfolio/[slug]'>) {
  const { slug } = await props.params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#020817] pt-32 text-center">
        <h1 className="text-3xl font-bold text-white">Project not found</h1>
        <Link href="/portfolio" className="mt-6 inline-block text-cyan-400 hover:underline">Back to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] pt-20">
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/portfolio" className="inline-flex items-center gap-2 text-[#64748b] hover:text-cyan-400 transition-colors text-sm mb-8">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Portfolio
        </Link>
        <span className="tag mb-4">{project.category}</span>
        <h1 className="text-4xl md:text-5xl font-black mt-4 mb-2 text-white">{project.title}</h1>
        <p className="text-[#94a3b8] text-lg mb-10">{project.clientName}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="service-card rounded-xl p-6">
            <h3 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">Challenge</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">{project.challenge}</p>
          </div>
          <div className="service-card rounded-xl p-6">
            <h3 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Solution</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">{project.solution}</p>
          </div>
          <div className="service-card rounded-xl p-6">
            <h3 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Result</h3>
            <p className="text-[#94a3b8] text-sm leading-relaxed">{project.result}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="btn-glow bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:from-cyan-400 hover:to-blue-400 transition-all text-center"
          >
            Start a Similar Project
          </Link>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/20 transition-all text-center"
            >
              View Live Demo &rarr;
            </a>
          )}
        </div>
      </section>
    </div>
  );
}
