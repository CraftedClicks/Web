'use client';

import { useState } from 'react';
import { Quote, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Akshay Sharma',
    company: 'Tredmart India',
    quote: 'I am really impressed by the quality of services I received from CraftedClicks. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products and I will definitely use your services again.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    initials: 'AS',
  },
  {
    name: 'Sarah Johnson',
    company: 'PropVault Real Estate',
    quote: 'Within 30 days of launching our new real estate search portal, we experienced a massive surge in conversion rates and active inquiries. The interface is clean and extremely easy to use.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    initials: 'SJ',
  },
  {
    name: 'Rajesh Patel',
    company: 'Yogalax Wellness',
    quote: 'We hired CraftedClicks to build our wellness booking app. The feedback from our clients has been overwhelmingly positive. The app loads in under a second and is incredibly smooth. Highly recommend them!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    initials: 'RP',
  },
  {
    name: 'Elena Rostova',
    company: 'Terapia Global',
    quote: 'CraftedClicks transformed our landing pages and optimized our marketing campaigns. Our ad spend efficiency has improved by 40% and our customer acquisition cost dropped significantly. Fantastic work!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&h=120&q=80',
    initials: 'ER',
  },
  {
    name: 'Dr. Rajesh Mehta',
    company: 'MediCore Health',
    quote: 'CraftedClicks transformed our entire patient intake process. The portal they built is intuitive, fast, and our staff adopted it immediately. The ROI has been incredible.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80',
    initials: 'RM',
  },
  {
    name: 'Priya Sharma',
    company: 'StreetEats Delivery',
    quote: 'We were hemorrhaging money on third-party platforms. CraftedClicks built us our own app in 8 weeks and we recouped the cost in the first 3 months. Absolute game changer.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    initials: 'PS',
  },
];

const StarIcon = () => (
  <svg className="w-4.5 h-4.5 text-amber-400 fill-current" viewBox="0 0 24 24">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 px-5 bg-dark relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16">
          <span className="tag mb-4">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-4 text-white">
            What Our Clients Say About <span className="gradient-text">CraftedClicks</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Quote Box */}
          <div className="lg:col-span-7">
            <div className="testimonial-card bg-slate-950/80 border border-white/10 rounded-3xl p-8 relative shadow-2xl">
              <Quote className="w-12 h-12 text-primary/10 absolute -top-4 -left-2" />
              
              {/* 5 Stars Rating badge */}
              <div className="flex gap-1 mb-4 relative z-10">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>

              <p className="text-white text-base sm:text-lg leading-relaxed mb-6 relative z-10 min-h-[120px]">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                {testimonials[active].avatar ? (
                  <img
                    src={testimonials[active].avatar}
                    alt={testimonials[active].name}
                    loading="lazy"
                    className="w-12 h-12 rounded-full object-cover border border-white/10 shadow-md"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {testimonials[active].initials}
                  </div>
                )}
                <div>
                  <div className="text-white font-bold text-sm">{testimonials[active].name}</div>
                  <div className="text-primary text-xs font-semibold">{testimonials[active].company}</div>
                </div>
              </div>
            </div>
            
            {/* Carousel dots indicators */}
            <div className="flex gap-1 mt-6 justify-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="w-10 h-10 flex items-center justify-center transition-all duration-300 group"
                  aria-label={`View testimonial ${i + 1}`}
                >
                  <span
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === active ? 'w-8 bg-primary' : 'w-2 bg-white/20 group-hover:bg-white/40'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Mockup Graphic */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative p-8 bg-white/5 border border-white/10 rounded-2xl shadow-xl overflow-hidden aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-blue-500/10 opacity-30" />
              <div className="text-center p-6 relative z-10">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-3xl">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Collaboration</h4>
                <p className="text-slate-400 text-xs max-w-xs mx-auto leading-relaxed">
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
