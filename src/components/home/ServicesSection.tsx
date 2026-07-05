'use client';

import Link from 'next/link';
import { Crown, Smartphone, Megaphone, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Custom Web App Development',
    subtitle: 'Scalable, fast websites built with React, Next.js',
    description: 'We design and build high-performance web applications tailored to streamline your workflow and turn visitors into active clients.',
    icon: Crown,
    slug: 'web-development',
  },
  {
    title: 'Custom Mobile App Development',
    subtitle: 'iOS & Android apps that users love',
    description: 'Engage with customers globally on mobile. We build robust, responsive native and hybrid apps with smooth user experiences.',
    icon: Smartphone,
    slug: 'mobile-apps',
  },
  {
    title: 'SEO & Digital Marketing',
    subtitle: 'Rank higher on Google and get more leads',
    description: 'Without a doubt, your business needs visibility. We optimize rankings and run targeted campaigns to put your services in front of buyers.',
    icon: Megaphone,
    slug: 'seo',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#3b9cb8]">
      {/* Background overlay to simulate the image background */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] leading-[1.3] text-white font-bold">
            Our Professional IT Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="mx-4 md:mx-0 bg-white rounded-xl p-8 flex flex-col justify-between shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Clean, highlighted icon bubble */}
                <div className="w-16 h-16 rounded-full border-2 border-[#1c6a85] bg-[#eaf5f7] flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-[#1c6a85]" />
                </div>
                
                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold text-[#1f2937] mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#10b1e4] text-xs sm:text-sm font-semibold tracking-wide mb-4">
                  {service.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-[#64748b] text-[0.95rem] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Learn More link */}
              <div className="border-t border-slate-100 pt-4 flex justify-center w-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#126585] hover:text-[#0da0d1] hover:gap-2.5 transition-all"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
