const reasons = [
  {
    title: 'AFFORDABILITY IS ONE OF OUR PRIORITIES',
    description: 'When all things are taken into account, we undoubtedly provide greater value, ROI, and premium quality than any other close competitor.',
    icon: '💡',
  },
  {
    title: 'WE ARE ALWAYS OPEN',
    description: 'We are never away, and the lights are never off. Contact us at any hour of the day or night. We will be here to respond immediately.',
    icon: '⚡',
  },
  {
    title: 'PRICE OPENING POLICY',
    description: 'We maintain a highly transparent price structure with no hidden fees, ensuring customers always receive the same excellent value.',
    icon: '🏷️',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#020817]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4">Core Commitments</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-4 text-white">
            Why Choose Our <span className="gradient-text">Top Website Developers</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            We hold ourselves to the highest standards of execution, speed, and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div key={reason.title} className="why-card p-8 bg-slate-900/50 border border-white/5 rounded-2xl hover:border-cyan-500/20 transition-all flex flex-col items-center text-center">
              <div className="text-4xl mb-5">{reason.icon}</div>
              <h3 className="text-base font-bold text-white mb-4 tracking-wide">{reason.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
