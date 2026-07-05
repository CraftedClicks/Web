export default function StatsCounter() {
  const stats = [
    { label: 'Projects Done', count: '50+' },
    { label: 'Happy Clients', count: '25+' },
    { label: 'Years Experience', count: '5+' },
    { label: 'Success Rate', count: '99%' },
  ];

  return (
    <section className="py-28 bg-[#020817] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Text Info */}
          <div className="lg:col-span-6 text-left">
            <span className="tag mb-4">Stats & Metrics</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
              Our Professional IT Services <br />
              Can <span className="gradient-text">Help You Grow</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed">
              We are a team of dynamic software engineers and digital strategists who believe in providing high-quality services to our clients. We work across domains such as custom UX/UI design, websites, mobile applications, and secure dashboard apps, providing dedicated developer resources to ensure long-term stability.
            </p>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-slate-900/40 border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:border-cyan-500/20 transition-all"
              >
                <div className="text-4xl sm:text-5xl font-black stat-number mb-2">{stat.count}</div>
                <div className="text-xs sm:text-sm text-[#cbd5e1] font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
