import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-20 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/20 via-background to-background"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Build websites that help<br className="hidden md:block" /> businesses <span className="text-accent">grow.</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto mb-10">
            We design and develop modern, fast, and conversion-focused websites for companies that want more leads.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact" className="w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] hover:-translate-y-1">
              Get a Quote
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
              View Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section Placeholder */}
      <section className="py-24 bg-background-alt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto text-lg">We offer end-to-end web solutions tailored to your business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-card text-card-foreground p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Web Design</h3>
              <p className="text-card-foreground/70 mb-4">Stunning, modern designs that reflect your brand and engage your visitors from the first click.</p>
              <Link href="/services/web-design" className="text-accent font-semibold flex items-center hover:underline">
                Learn more <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-card text-card-foreground p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Development</h3>
              <p className="text-card-foreground/70 mb-4">Fast, secure, and scalable web applications built with cutting-edge technologies like Next.js.</p>
              <Link href="/services/web-development" className="text-accent font-semibold flex items-center hover:underline">
                Learn more <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>

            {/* Service Card 3 */}
            <div className="bg-card text-card-foreground p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">SEO & Marketing</h3>
              <p className="text-card-foreground/70 mb-4">Optimize your digital presence to rank higher on search engines and attract more qualified leads.</p>
              <Link href="/services/seo" className="text-accent font-semibold flex items-center hover:underline">
                Learn more <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Placeholder */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your digital presence?</h2>
          <p className="text-xl text-foreground/80 mb-10">Let's build a website that not only looks great but drives real business results.</p>
          <Link href="/contact" className="inline-block bg-accent text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)] hover:-translate-y-1">
            Let's Talk About Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
