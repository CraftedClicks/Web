'use client';

import Link from 'next/link';
import { Layout, LineChart, Users, CheckCircle } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-28 bg-[#020817] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Highly Detailed Custom Admin Dashboard Graphic */}
          <div className="lg:col-span-6 order-2 lg:order-1 animate-fade-in-up">
            <div className="relative p-6 bg-slate-900/80 border border-white/10 rounded-2xl shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 opacity-30" />
              <div className="absolute inset-0 grid-pattern opacity-10" />
              
              {/* Laptop Style Frame */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-slate-950 p-1 relative z-10">
                {/* Browser window top controls */}
                <div className="bg-slate-900 px-3.5 py-2.5 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <div className="w-48 h-4 rounded bg-slate-950 border border-white/5 flex items-center justify-center text-[8px] text-slate-500 font-mono">
                    admin.craftedclicks.com/analytics
                  </div>
                  <div className="w-6"></div>
                </div>

                {/* Dashboard Inner content */}
                <div className="aspect-video bg-[#020817] p-5 flex flex-col justify-between">
                  {/* Top Stats Overview */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-slate-900 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between shadow-md">
                      <div className="flex justify-between items-center text-[9px] text-[#cbd5e1]">
                        <span>Conversion</span>
                        <LineChart className="w-3.5 h-3.5 text-cyan-400" />
                      </div>
                      <div className="text-sm font-black text-white mt-1.5">4.82%</div>
                      <div className="text-[7px] text-emerald-400 font-semibold mt-0.5">↑ 12% vs last month</div>
                    </div>
                    
                    <div className="bg-slate-900 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between shadow-md">
                      <div className="flex justify-between items-center text-[9px] text-[#cbd5e1]">
                        <span>Daily Leads</span>
                        <Users className="w-3.5 h-3.5 text-[#10b1e4]" />
                      </div>
                      <div className="text-sm font-black text-white mt-1.5">142</div>
                      <div className="text-[7px] text-emerald-400 font-semibold mt-0.5">↑ 8% vs last month</div>
                    </div>

                    <div className="bg-slate-900 border border-white/5 rounded-lg p-2.5 flex flex-col justify-between shadow-md">
                      <div className="flex justify-between items-center text-[9px] text-[#cbd5e1]">
                        <span>Active Projects</span>
                        <Layout className="w-3.5 h-3.5 text-amber-500" />
                      </div>
                      <div className="text-sm font-black text-white mt-1.5">18</div>
                      <div className="text-[7px] text-[#10b1e4] font-semibold mt-0.5">On Schedule</div>
                    </div>
                  </div>

                  {/* Visual charts display block */}
                  <div className="flex-1 bg-slate-900/60 border border-white/5 rounded-xl p-3 flex flex-col justify-between mt-3">
                    <div className="flex items-center justify-between text-[10px] text-white font-bold mb-1.5">
                      <span>Conversion Metrics Ticker</span>
                      <span className="text-slate-500 text-[8px]">Live</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-16 pt-2">
                      <div className="w-full h-8 bg-cyan-600/30 rounded-t-sm hover:bg-cyan-500/50 transition-colors"></div>
                      <div className="w-full h-12 bg-[#126585] rounded-t-sm hover:bg-[#157da5]/50 transition-colors"></div>
                      <div className="w-full h-10 bg-cyan-600/30 rounded-t-sm hover:bg-cyan-500/50 transition-colors"></div>
                      <div className="w-full h-16 bg-[#10b1e4] rounded-t-sm hover:bg-[#10b1e4]/70 transition-colors"></div>
                      <div className="w-full h-14 bg-cyan-600/30 rounded-t-sm hover:bg-cyan-500/50 transition-colors"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Text Info */}
          <div className="lg:col-span-6 text-left order-1 lg:order-2">
            <span className="tag mb-4">Who We Are</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">
              About Our <span className="gradient-text">Website Building Company</span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-6">
              CraftedClicks is an experienced, professional web design and development agency. We offer full-cycle development services, including custom software, business websites, mobile app development, and search engine optimization.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-8">
              We focus on delivering products that combine premium visual aesthetics with fast speeds and clear user interfaces, helping businesses capture leads and scale.
            </p>
            
            {/* Checked features checklist */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-white/95 text-sm font-semibold">
                <CheckCircle className="w-4.5 h-4.5 text-cyan-400 shrink-0" />
                <span>Next.js Experts</span>
              </div>
              <div className="flex items-center gap-2 text-white/95 text-sm font-semibold">
                <CheckCircle className="w-4.5 h-4.5 text-[#10b1e4] shrink-0" />
                <span>Premium Quality</span>
              </div>
              <div className="flex items-center gap-2 text-white/95 text-sm font-semibold">
                <CheckCircle className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                <span>Fast Page Loading</span>
              </div>
              <div className="flex items-center gap-2 text-white/95 text-sm font-semibold">
                <CheckCircle className="w-4.5 h-4.5 text-emerald-400 shrink-0" />
                <span>Indian SME Focus</span>
              </div>
            </div>

            <Link
              href="/about"
              className="btn-glow ml-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3.5 rounded-full text-sm font-bold hover:from-cyan-400 hover:to-blue-400 transition-all inline-flex items-center justify-center whitespace-nowrap"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
