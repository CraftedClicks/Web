const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We deep-dive into your business, goals, competitors, and target audience to build a winning strategy.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Our designers craft stunning UI mockups and interactive prototypes before a single line of code is written.',
    icon: '🎨',
  },
  {
    number: '03',
    title: 'Development & Build',
    description: 'We develop your project using best-in-class technologies, with clean code and thorough testing.',
    icon: '⚙️',
  },
  {
    number: '04',
    title: 'Launch & Grow',
    description: 'After a meticulous QA process, we launch your product and provide ongoing support for long-term growth.',
    icon: '🚀',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 section-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            A proven 4-step process that takes you from idea to a live, high-performing product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="process-step">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-1px)] w-6 h-px bg-gradient-to-r from-cyan-500/50 to-transparent z-10" />
              )}
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="text-sm font-mono text-cyan-400 mb-2">{step.number}</div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
