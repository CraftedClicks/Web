import Link from 'next/link';
import LaptopPhoneMockup from './LaptopPhoneMockup';
import HeroLeadForm from './HeroLeadForm';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-40">
      {/* Container with generous padding on sides for breathing room */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            {/* Headline */}
            <h1 className="text-[#126585] text-[2.75rem] sm:text-5xl md:text-[3.75rem] leading-[1.1] mb-4 font-black tracking-tight">
              Websites That <br />
              <span className="text-[#10b1e4]">Get You Clients</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-[#157da5] font-semibold text-lg sm:text-xl md:text-[22px] mb-8 leading-relaxed max-w-2xl">
              Custom Web & App Development for Startups and SMEs in India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#126585] text-white px-8 py-3.5 rounded-full text-base font-bold hover:bg-[#0f5470] hover:shadow-lg transition-all shadow-md min-w-[170px]"
              >
                Get Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center bg-white text-[#126585] border-2 border-[#126585] px-8 py-3.5 rounded-full text-base font-bold hover:bg-slate-50 transition-all min-w-[170px]"
              >
                View Our Work
              </Link>
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

      {/* Bottom Wave/Slanted Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-[#5d8f9e]" style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0% 100%)' }}></div>
      <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 md:h-28 bg-[#116b8b]" style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0% 100%)' }}></div>
    </section>
  );
}
