'use client';

import Link from 'next/link';
import { Crown, Smartphone, Megaphone, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Custom Web App Development',
    benefit: 'Build a high-performance web presence that turns casual browsers into buyers.',
    subtitle: 'Scalable, fast websites built with React, Next.js',
    description: 'We design and build high-performance web applications tailored to streamline your workflow and turn visitors into active clients.',
    icon: Crown,
    slug: 'web-development',
  },
  {
    title: 'Custom Mobile App Development',
    benefit: 'Engage your customers on the go and build loyalty with seamless mobile experiences.',
    subtitle: 'iOS & Android apps that users love',
    description: 'Engage with customers globally on mobile. We build robust, responsive native and hybrid apps with smooth user experiences.',
    icon: Smartphone,
    slug: 'mobile-apps',
  },
  {
    title: 'SEO & Digital Marketing',
    benefit: 'Dominate search rankings and drive consistent, organic leads straight to your business.',
    subtitle: 'Rank higher on Google and get more leads',
    description: 'Without a doubt, your business needs visibility. We optimize rankings and run targeted campaigns to put your services in front of buyers.',
    icon: Megaphone,
    slug: 'seo',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-5 relative overflow-hidden bg-grey border-b border-slate-100">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-[2.5rem] leading-[1.3] text-dark font-black">
            Our Professional IT Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title} 
              className="mx-4 md:mx-0 bg-white rounded-xl p-8 flex flex-col justify-between shadow-lg transform transition duration-500 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up service-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Clean, highlighted icon bubble */}
                <div className="w-16 h-16 rounded-full border-2 border-primary bg-blue-50 flex items-center justify-center mb-6 service-icon">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Title and Subtitle */}
                <h3 className="text-xl font-bold text-dark mb-2 leading-tight">
                  {service.title}
                </h3>
                <p className="text-primary text-sm font-bold mb-3 leading-snug">
                  {service.benefit}
                </p>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold tracking-wide mb-4">
                  {service.subtitle}
                </p>
                
                {/* Description */}
                <p className="text-slate-500 text-[0.95rem] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Learn More link */}
              <div className="border-t border-slate-100 pt-4 flex justify-center w-full">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-black text-primary hover:text-blue-700 hover:gap-2.5 transition-all btn-active"
                >
                  <span>Learn More &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
