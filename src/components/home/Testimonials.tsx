'use client';

import { useState } from 'react';

const testimonials = [
  {
    name: 'Akshay Sharma',
    company: 'Tredmart',
    quote: 'I am really impressed by the quality of services I received from CraftedClicks. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products and I will definitely use your services again.',
    avatar: 'AS',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Sarah Johnson',
    company: 'PropVault',
    quote: 'Within 30 days of launching our new real estate search portal, we experienced a massive surge in conversion rates and active inquiries. The interface is clean and extremely easy to use.',
    avatar: 'SJ',
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="tag mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-4 text-white">
            What Our Client Says About <span className="gradient-text">Our Website Development Firm</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Quote Box */}
          <div className="lg:col-span-7">
            <div className="testimonial-card bg-slate-950/80 border border-white/10 rounded-3xl p-8 relative shadow-2xl">
              <svg className="w-12 h-12 text-cyan-400/20 absolute -top-4 -left-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white text-base sm:text-lg leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonials[active].color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{testimonials[active].name}</div>
                  <div className="text-cyan-400 text-xs font-semibold">{testimonials[active].company}</div>
                </div>
              </div>
            </div>
            
            {/* Dots */}
            <div className="flex gap-2 mt-6 justify-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Mockup Graphic */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative p-2 bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-blue-500/10 opacity-30" />
              <div className="text-center p-6">
                <div className="text-6xl mb-4">👥</div>
                <h4 className="text-lg font-bold text-white mb-2">Collaboration</h4>
                <p className="text-[#64748b] text-xs max-w-xs mx-auto">We work alongside our clients to define target metrics and implement solutions that scale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
