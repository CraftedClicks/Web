import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center hero-bg overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
      {/* Grid bg overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 text-left">
            {/* Tag */}
            <div className="inline-flex items-center gap-2 mb-5 sm:mb-6">
              <span className="tag text-[0.72rem] sm:text-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                CraftedClicks Technologies
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.1rem] sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] md:leading-[1.05] mb-5 sm:mb-6 text-white">
              Instant Solutions <br />
              for your <span className="gradient-text">Business.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-[0.97rem] sm:text-lg md:text-xl text-[#94a3b8] mb-8 sm:mb-10 leading-relaxed max-w-2xl">
              We design and develop modern, fast, and conversion-focused websites and mobile applications that help businesses expand, attract leads, and scale efficiently.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
              <Link
                href="/contact"
                id="hero-cta-contact"
                className="btn-glow animate-pulse-glow bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold hover:from-cyan-400 hover:to-blue-400 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                id="hero-cta-work"
                className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-semibold hover:bg-white/10 hover:border-white/20 transition-all w-full sm:w-auto text-center"
              >
                <span>Explore Work</span>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column - Premium 3D Style Graphic Mockup */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="relative w-full h-[400px] flex items-center justify-center">
              {/* Outer Glow Circle */}
              <div className="absolute w-72 h-72 rounded-full border border-cyan-500/20 bg-cyan-500/5 animate-pulse-glow" />
              
              {/* Floating Glassmorphism Web Interface Mockup */}
              <div className="absolute glass-card w-[340px] h-[220px] rounded-2xl p-4 shadow-2xl border border-white/10 -rotate-6 animate-float z-20">
                <div className="flex items-center gap-1.5 mb-4 border-b border-white/10 pb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <div className="ml-2 w-32 h-2 rounded bg-white/10" />
                </div>
                <div className="space-y-3">
                  <div className="w-full h-8 rounded bg-gradient-to-r from-cyan-500/35 to-blue-500/35" />
                  <div className="w-3/4 h-3 rounded bg-white/10" />
                  <div className="w-1/2 h-3 rounded bg-white/10" />
                  <div className="flex gap-2 pt-2">
                    <div className="w-16 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30" />
                    <div className="w-16 h-5 rounded-full bg-blue-500/20 border border-blue-500/30" />
                  </div>
                </div>
              </div>

              {/* Behind/Overlaying Graphic Elements */}
              <div className="absolute glass-card w-[240px] h-[180px] rounded-xl p-4 shadow-xl border border-white/10 rotate-12 translate-x-16 translate-y-12 animate-float z-10" style={{ animationDelay: '1.5s' }}>
                <div className="flex justify-between items-center mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">📊</div>
                  <div className="w-12 h-3 rounded bg-white/10" />
                </div>
                <div className="space-y-2">
                  <div className="w-full h-2 rounded bg-white/10" />
                  <div className="w-full h-2.5 rounded bg-gradient-to-r from-blue-500/40 to-violet-500/40" />
                  <div className="w-5/6 h-2 rounded bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
