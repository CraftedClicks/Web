'use client';

import React from 'react';
import { Shield, Sparkles, Zap, Award, Globe } from 'lucide-react';

const mockClients = [
  { name: 'Tredmart', icon: Zap },
  { name: 'PropVault', icon: Shield },
  { name: 'Yogalax', icon: Sparkles },
  { name: 'Terapia', icon: Award },
  { name: 'Apex Corp', icon: Globe },
];

export default function TrustedBy() {
  return (
    <section className="py-20 px-5 bg-white border-b border-slate-100 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-bold text-[#333333] uppercase tracking-widest text-center md:text-left shrink-0">
            Trusted by growing businesses:
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {mockClients.map((client) => (
              <div 
                key={client.name} 
                className="flex items-center gap-2 text-[#333333] hover:text-primary transition-colors duration-300"
              >
                <client.icon className="w-5 h-5 text-[#333333]" />
                <span className="text-sm sm:text-base font-bold tracking-tight text-[#333333]">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
