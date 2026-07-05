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
    <section className="py-12 bg-slate-50 border-b border-slate-100 relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center md:text-left shrink-0">
            Trusted by growing businesses:
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {mockClients.map((client) => (
              <div 
                key={client.name} 
                className="flex items-center gap-2 text-slate-400 hover:text-[#126585] transition-colors duration-300"
              >
                <client.icon className="w-5 h-5 opacity-60" />
                <span className="text-sm sm:text-base font-bold tracking-tight">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
