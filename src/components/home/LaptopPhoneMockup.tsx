'use client';

import React from 'react';
import { Monitor, Smartphone, Globe, Shield, RefreshCw } from 'lucide-react';

export default function LaptopPhoneMockup() {
  return (
    <div className="relative w-full max-w-[550px] aspect-[4/3] mx-auto flex items-center justify-center select-none scale-90 sm:scale-100 mt-8 lg:mt-0">
      
      {/* Subtle glow background */}
      <div className="absolute w-[80%] h-[80%] rounded-full bg-cyan-100/30 blur-3xl animate-pulse"></div>

      {/* 1. CSS Laptop Mockup (Slow float) */}
      <div className="relative w-[340px] sm:w-[420px] aspect-[16/10] bg-slate-900 rounded-xl p-2.5 shadow-2xl border border-slate-700/80 animate-float z-10 flex flex-col">
        {/* Laptop Screen Content */}
        <div className="flex-1 bg-white rounded-lg overflow-hidden flex flex-col relative group border border-slate-950/20">
          
          {/* Mock Browser Topbar */}
          <div className="bg-slate-100 border-b border-slate-200 px-3 py-1.5 flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-rose-400"></div>
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
            </div>
            <div className="w-40 sm:w-52 h-4 rounded bg-white border border-slate-200 flex items-center gap-1.5 px-2 text-slate-400 select-none">
              <Globe className="w-2.5 h-2.5 shrink-0 text-slate-300" />
              <span className="truncate text-[8px] sm:text-[9px]">craftedclicks.com</span>
            </div>
            <div className="w-6"></div>
          </div>

          {/* Mock Website Layout */}
          <div className="flex-grow flex flex-col overflow-y-auto">
            {/* Header */}
            <div className="bg-dark text-white px-3 py-2 flex justify-between items-center">
              <div className="text-[10px] font-bold tracking-tight">CRAFTEDCLICKS</div>
              <div className="flex gap-2 text-[8px] opacity-80">
                <span>Home</span>
                <span>Services</span>
                <span>Work</span>
              </div>
            </div>
            {/* Hero area */}
            <div className="bg-slate-50 p-4 border-b border-slate-100 text-center">
              <div className="w-3/4 h-3 bg-slate-800 rounded mx-auto mb-2"></div>
              <div className="w-1/2 h-2 bg-slate-400 rounded mx-auto mb-3"></div>
              <div className="w-16 h-4 bg-primary rounded mx-auto"></div>
            </div>
            {/* Content Cards */}
            <div className="p-3 grid grid-cols-3 gap-2">
              <div className="p-2 border border-slate-100 rounded bg-white space-y-1.5 shadow-sm">
                <div className="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
                  <Shield className="w-3 h-3 text-primary" />
                </div>
                <div className="w-full h-2 bg-slate-200 rounded"></div>
                <div className="w-2/3 h-1.5 bg-slate-100 rounded"></div>
              </div>
              <div className="p-2 border border-slate-100 rounded bg-white space-y-1.5 shadow-sm">
                <div className="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
                  <RefreshCw className="w-3 h-3 text-primary" />
                </div>
                <div className="w-full h-2 bg-slate-200 rounded"></div>
                <div className="w-2/3 h-1.5 bg-slate-100 rounded"></div>
              </div>
              <div className="p-2 border border-slate-100 rounded bg-white space-y-1.5 shadow-sm">
                <div className="w-5 h-5 rounded bg-blue-50 flex items-center justify-center">
                  <Monitor className="w-3 h-3 text-primary" />
                </div>
                <div className="w-full h-2 bg-slate-200 rounded"></div>
                <div className="w-2/3 h-1.5 bg-slate-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Laptop Bottom Lip/Keyboard Base */}
        <div className="w-full h-2.5 bg-slate-900 rounded-b-lg mt-2 relative flex justify-center">
          {/* Keyboard keys mockup (engraved look) */}
          <div className="w-11/12 h-[2px] bg-slate-950 rounded-full mt-[1px]"></div>
          {/* Laptop Trackpad */}
          <div className="absolute top-[3px] w-12 h-1.5 bg-slate-800 rounded-[2px] border border-slate-700/50"></div>
        </div>
      </div>

      {/* 2. CSS Phone Mockup (Floats offset, overlaps bottom-right of laptop) */}
      <div 
        className="absolute bottom-[5%] right-[2%] sm:right-[5%] w-[100px] sm:w-[124px] aspect-[9/18] bg-slate-950 rounded-[24px] p-1.5 shadow-2xl border border-slate-800 z-20 animate-float"
        style={{ animationDelay: '1.5s', animationDuration: '4.8s' }}
      >
        <div className="w-full h-full border border-slate-800 bg-white rounded-[20px] overflow-hidden flex flex-col relative">
          
          {/* Phone notch */}
          <div className="absolute top-0 inset-x-0 h-4 bg-white z-30 flex justify-center">
            <div className="w-14 h-3 bg-slate-950 rounded-b-xl"></div>
          </div>

          {/* Mobile Screen Mock content */}
          <div className="flex-grow flex flex-col pt-4 overflow-y-auto">
            {/* Header */}
            <div className="bg-dark text-white px-2 py-1.5 flex justify-between items-center text-[7px]">
              <span className="font-bold">CRAFTEDCLICKS</span>
              <div className="w-3.5 h-2.5 bg-white/20 rounded flex items-center justify-center">☰</div>
            </div>
            {/* Hero */}
            <div className="bg-slate-50 p-2.5 border-b border-slate-100 text-center flex-grow flex flex-col justify-center">
              <div className="w-full h-2 bg-slate-800 rounded mb-1 mx-auto"></div>
              <div className="w-3/4 h-2 bg-slate-800 rounded mb-2.5 mx-auto"></div>
              <div className="w-5/6 h-1.5 bg-slate-400 rounded mb-3 mx-auto"></div>
              <div className="w-12 h-3.5 bg-primary rounded-full mx-auto flex items-center justify-center text-white text-[5px] font-bold">
                AUDIT
              </div>
            </div>
            {/* Mobile Cards */}
            <div className="p-2 space-y-1.5 bg-white">
              <div className="p-1.5 border border-slate-100 rounded shadow-sm flex items-center gap-1.5">
                <Smartphone className="w-2.5 h-2.5 text-primary shrink-0" />
                <div className="flex-1 space-y-1">
                  <div className="w-12 h-1 bg-slate-300 rounded"></div>
                  <div className="w-8 h-1 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
