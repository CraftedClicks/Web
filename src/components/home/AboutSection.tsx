import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Mockup Graphic */}
          <div className="lg:col-span-6">
            <div className="relative p-4 bg-white/5 border border-white/10 rounded-2xl shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 opacity-30" />
              <div className="absolute inset-0 grid-pattern opacity-10" />
              {/* Laptop Style Frame */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-950/80 p-1">
                <div className="bg-slate-900 px-3 py-2 flex items-center gap-1.5 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="aspect-video bg-slate-950 p-6 flex flex-col justify-center items-center text-center">
                  <span className="text-cyan-400 font-mono text-xs mb-2">&#60;Responsive Web Design /&#62;</span>
                  <h3 className="text-xl font-bold text-white mb-3">Modern Templates</h3>
                  <div className="w-24 h-1 bg-cyan-400 rounded mb-4" />
                  <p className="text-[#64748b] text-xs max-w-sm">Premium designs built to adapt perfectly to mobile, tablet, and desktop viewports.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Info */}
          <div className="lg:col-span-6 text-left">
            <span className="tag mb-4">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
              About Our <span className="gradient-text">Website Building Company</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-6">
              CraftedClicks is a highly experienced and professional web design and development agency. We offer professional, full-cycle services including custom CRM/ERP Solutions, premium business website designing, mobile application development, and search engine optimization.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
              We focus on delivering products that combine stunning visual aesthetics with blazing-fast speeds and clear user interfaces, helping businesses capture leads and improve visitor retention.
            </p>
            <Link
              href="/about"
              className="btn-glow bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3.5 rounded-full text-sm font-bold hover:from-cyan-400 hover:to-blue-400 transition-all inline-block"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
