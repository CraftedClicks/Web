import Link from 'next/link';
import LaptopPhoneMockup from './LaptopPhoneMockup';
import HeroLeadForm from './HeroLeadForm';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden py-20 px-5">
      {/* Container with generous padding on sides for breathing room */}
      <div className="max-w-6xl mx-auto relative z-10 w-full" id="audit-form">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            {/* Headline */}
            <h1 className="text-dark text-[2.75rem] sm:text-5xl md:text-[3.5rem] leading-[1.15] mb-4 font-black tracking-tight">
              We Build Websites <br />
              That Turn Visitors Into <br />
              <span className="gradient-text">Paying Customers</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-slate-600 font-medium text-lg sm:text-xl md:text-[20px] mb-8 leading-relaxed max-w-2xl">
              Custom Web & App Development for Startups and SMEs. Delivery in 14 Days.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-blue-600 hover:shadow-lg transition-all shadow-md min-w-[170px] btn-active"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:+9190970868101"
                className="inline-flex items-center justify-center bg-white text-primary border-2 border-primary px-8 py-3.5 rounded-full text-base font-bold hover:bg-slate-50 transition-all min-w-[170px] btn-active"
              >
                Call Now
              </a>
            </div>

            {/* Audit Lead Form */}
            <HeroLeadForm />
          </div>

          {/* Right Column - Laptop/Phone CSS Mockup */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <LaptopPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
