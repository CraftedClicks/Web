import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="py-20 px-5 bg-dark relative overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-primary/5" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(ellipse, #0052FF 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <span className="tag mb-4">Take Action</span>
        <h3 className="text-slate-400 text-sm uppercase tracking-widest font-bold mb-3 mt-4">We Take Care Of Your Technology</h3>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 text-white">
          Focus On Your <span className="gradient-text">Business</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            id="cta-contact-us"
            className="btn-glow bg-primary text-white px-10 py-4 rounded-full text-base font-bold hover:bg-blue-600 transition-all inline-flex items-center justify-center whitespace-nowrap btn-active"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
