'use client';

import { useState } from 'react';
import { Quote, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Akshay Sharma',
    company: 'Tredmart India',
    quote: 'I am really impressed by the quality of services I received from CraftedClicks. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products and I will definitely use your services again.',
    avatar: 'AS',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Sarah Johnson',
    company: 'PropVault Real Estate',
    quote: 'Within 30 days of launching our new real estate search portal, we experienced a massive surge in conversion rates and active inquiries. The interface is clean and extremely easy to use.',
    avatar: 'SJ',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Rajesh Patel',
    company: 'Yogalax Wellness',
    quote: 'We hired CraftedClicks to build our wellness booking app. The feedback from our clients has been overwhelmingly positive. The app loads in under a second and is incredibly smooth. Highly recommend them!',
    avatar: 'RP',
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Elena Rostova',
    company: 'Terapia Global',
    quote: 'CraftedClicks transformed our landing pages and optimized our marketing campaigns. Our ad spend efficiency has improved by 40% and our customer acquisition cost dropped significantly. Fantastic work!',
    avatar: 'ER',
    color: 'from-purple-500 to-indigo-500',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 bg-[#0f172a] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="text-center mb-16">
          <span className="tag mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-4 text-white">
            What Our Clients Say About <span className="gradient-text">CraftedClicks</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Quote Box */}
          <div className="lg:col-span-7">
            <div className="testimonial-card bg-slate-950/80 border border-white/10 rounded-3xl p-8 relative shadow-2xl">
              <Quote className="w-12 h-12 text-cyan-400/20 absolute -top-4 -left-2" />
              
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
            
            {/* Carousel dots indicators */}
            <div className="flex gap-1 mt-4 justify-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-11 h-11 flex items-center justify-center transition-all duration-300 group"
                  aria-label={`View testimonial ${i + 1}`}
                >
                  <span
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 bg-cyan-400' : 'w-2 bg-white/20 group-hover:bg-white/40'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Mockup Graphic */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative p-2 bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/10 to-blue-500/10 opacity-30" />
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-3xl">
                  <User className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Collaboration</h4>
                <p className="text-[#64748b] text-xs max-w-xs mx-auto leading-relaxed">
                  We work closely with startup founders and Indian SMEs to build scalable products that drive target lead conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
