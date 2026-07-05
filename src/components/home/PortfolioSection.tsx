'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/portfolio';

export default function PortfolioSection() {
  // Take first 3 projects
  const displayProjects = projects.slice(0, 3);
  
  // Custom screenshots corresponding to FitnessClub, Yogalax, and Terapia
  const screenshots = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&h=400&q=80&fm=webp', // Fitness
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&h=400&q=80&fm=webp', // Yogalax
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&h=400&q=80&fm=webp', // Terapia
  ];

  return (
    <section className="py-20 px-5 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag mb-4">Our Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark mt-4 mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Explore our lately completed applications that drive traffic and conversions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayProjects.map((project, idx) => (
            <div
              key={project.id}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img
                  src={screenshots[idx] || screenshots[0]}
                  alt={project.title}
                  loading="lazy"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-dark/85 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-dark mb-2 leading-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
                    {project.challenge}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4 flex justify-between items-center w-full">
                  <span className="text-xs text-primary font-semibold">
                    {project.result.split(',')[0]}
                  </span>
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-blue-700 hover:gap-2.5 transition-all btn-active"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
