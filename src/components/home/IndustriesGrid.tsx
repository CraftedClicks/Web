const industries = [
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Real Estate', icon: '🏠' },
  { name: 'Education', icon: '🎓' },
  { name: 'Entertainment', icon: '🎬' },
  { name: 'Finance', icon: '💹' },
  { name: 'Sports & Play', icon: '🏃' },
  { name: 'Social Networking', icon: '🔗' },
  { name: 'Travel & Tourism', icon: '✈️' },
];

export default function IndustriesGrid() {
  return (
    <section className="py-24 bg-[#0f172a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4">Target Sectors</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-4 text-white">
            Industries we <span className="gradient-text">Served</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            We deliver specialized and custom digital products across diverse industries and markets.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {industries.map((industry) => (
            <div key={industry.name} className="industry-card flex flex-col items-center justify-center p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:border-cyan-500/30 transition-all">
              <div className="industry-icon text-5xl mb-4">{industry.icon}</div>
              <div className="text-sm font-bold text-[#cbd5e1]">{industry.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
