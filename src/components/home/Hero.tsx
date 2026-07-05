import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left flex flex-col items-start pt-8 lg:pt-0">
            {/* Headline */}
            <h1 className="text-[#157da5] font-serif text-[2.5rem] sm:text-5xl md:text-[3.5rem] leading-[1.2] mb-1 font-bold">
              Welcome To
            </h1>
            <h2 className="text-[#10b1e4] font-serif text-[2.5rem] sm:text-5xl md:text-[3.5rem] font-bold leading-[1.2] mb-4">
              SoftCrowd Technologies
            </h2>
            
            {/* Subheadline */}
            <p className="text-[#157da5] font-semibold text-[1.1rem] sm:text-xl md:text-2xl mb-10 tracking-wide">
              Instant Solutions for your Business!
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="bg-[#126585] text-white px-8 py-3 rounded-[6px] text-base font-medium hover:bg-[#0f5470] transition-colors shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up">
            <div className="relative w-full max-w-[500px] aspect-[4/3]">
              <Image 
                src="/hero_illustration.png" 
                alt="Web Development Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave/Slanted Shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-[#5d8f9e]" style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0% 100%)' }}></div>
      <div className="absolute bottom-0 left-0 right-0 h-14 sm:h-20 md:h-28 bg-[#116b8b]" style={{ clipPath: 'polygon(0 30%, 100% 0, 100% 100%, 0% 100%)' }}></div>
    </section>
  );
}
