'use client';

import React from 'react';
import { 
  Folder, 
  Search, 
  Settings, 
  FileCode, 
  Laptop, 
  Monitor, 
  User, 
  Compass, 
  Play, 
  HelpCircle,
  Hash
} from 'lucide-react';

export default function HeroGraphic() {
  return (
    <div className="relative w-full max-w-[620px] aspect-[4/3.5] mx-auto select-none mt-6 lg:mt-0">
      
      {/* 1. Backdrop Glow */}
      <div className="absolute w-[70%] h-[70%] top-[15%] left-[15%] rounded-full bg-gradient-to-tr from-[#10b1e4]/10 to-[#126585]/10 blur-3xl animate-pulse"></div>

      {/* 2. Yellow Folder (Back left, floats slowly) */}
      <div 
        className="absolute top-[15%] left-[10%] w-[120px] sm:w-[150px] aspect-[4/3] bg-amber-400 rounded-xl shadow-lg border border-amber-300 flex flex-col justify-end p-2 sm:p-3 animate-float z-0"
        style={{ animationDuration: '6s', animationDelay: '0.2s' }}
      >
        <Folder className="w-8 h-8 sm:w-10 sm:h-10 text-white opacity-90" />
        <div className="w-12 sm:w-16 h-2 bg-white/40 rounded-full mt-2"></div>
        <div className="w-8 sm:w-10 h-1.5 bg-white/30 rounded-full mt-1.5"></div>
      </div>

      {/* 3. HTML5 & Code Floating Badges (Upper mid, float) */}
      <div 
        className="absolute top-[10%] left-[40%] bg-blue-50 text-[#1eb9eb] rounded-lg shadow-md px-3 py-2 border border-blue-100 flex items-center gap-1.5 z-10 animate-float"
        style={{ animationDuration: '4.5s', animationDelay: '0.8s' }}
      >
        <FileCode className="w-4 h-4" />
        <span className="text-[10px] sm:text-xs font-mono font-bold">HTML5</span>
      </div>

      <div 
        className="absolute top-[5%] left-[62%] bg-violet-50 text-violet-500 rounded-lg shadow-md px-2.5 py-1.5 border border-violet-100 flex items-center gap-1 z-10 animate-float"
        style={{ animationDuration: '5.2s', animationDelay: '1.5s' }}
      >
        <span className="text-[10px] sm:text-xs font-mono font-bold">&lt;/&gt;</span>
      </div>

      {/* 4. Orange Floating Settings / Gears (Left / middle) */}
      <div 
        className="absolute top-[35%] left-[28%] bg-white rounded-full p-2 sm:p-3 shadow-lg border border-slate-100 text-amber-500 animate-float z-10"
        style={{ animationDuration: '4s', animationDelay: '0.5s' }}
      >
        <Settings className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" style={{ animationDuration: '10s' }} />
      </div>

      {/* 5. Laptop (Center-left foreground, open screen, floats) */}
      <div 
        className="absolute top-[38%] left-[5%] w-[200px] sm:w-[260px] bg-slate-800 rounded-xl shadow-2xl p-2.5 border border-slate-700 flex flex-col z-20 animate-float"
        style={{ animationDuration: '5.5s', animationDelay: '0.1s' }}
      >
        {/* Laptop Screen Area */}
        <div className="w-full aspect-[16/10] bg-[#116b8b] rounded-lg flex flex-col overflow-hidden relative group">
          <div className="w-full h-4 bg-slate-900/40 px-2 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
          </div>
          <div className="flex-1 p-3 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="w-2/3 h-2 bg-white/40 rounded"></div>
              <div className="w-1/2 h-1.5 bg-white/20 rounded"></div>
              <div className="w-3/4 h-1.5 bg-white/20 rounded"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-10 h-3 rounded bg-white/30"></div>
              <Laptop className="w-5 h-5 text-white/50" />
            </div>
          </div>
        </div>
        {/* Keyboard / base strip */}
        <div className="w-full h-2 bg-slate-900 rounded-full mt-2"></div>
      </div>

      {/* 6. Main Desktop Monitor Dashboard (Right side, floats) */}
      <div 
        className="absolute top-[22%] right-[5%] w-[240px] sm:w-[310px] bg-slate-100 rounded-xl shadow-2xl p-2 sm:p-3 border border-slate-200 flex flex-col z-10 animate-float"
        style={{ animationDuration: '6.5s', animationDelay: '0.7s' }}
      >
        <div className="w-full aspect-[4/3] bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center justify-between">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-slate-300"></div>
              <div className="w-2 h-2 rounded-full bg-slate-300"></div>
              <div className="w-2 h-2 rounded-full bg-slate-300"></div>
            </div>
            <div className="w-20 h-2 bg-slate-200 rounded-full"></div>
          </div>
          {/* Dashboard contents */}
          <div className="flex-grow p-3 space-y-3">
            <div className="w-full h-12 bg-amber-400/10 border border-amber-200 rounded-lg flex items-center justify-between px-3">
              <div className="space-y-1">
                <div className="w-12 h-2 bg-amber-500 rounded"></div>
                <div className="w-8 h-1.5 bg-amber-400 rounded"></div>
              </div>
              <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Monitor className="w-3.5 h-3.5 text-amber-600" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="h-10 rounded border border-slate-100 p-2 space-y-1">
                <div className="w-8 h-1.5 bg-slate-200 rounded"></div>
                <div className="w-12 h-2 bg-slate-300 rounded"></div>
              </div>
              <div className="h-10 rounded border border-slate-100 p-2 space-y-1">
                <div className="w-8 h-1.5 bg-slate-200 rounded"></div>
                <div className="w-12 h-2 bg-slate-300 rounded"></div>
              </div>
            </div>
            <div className="h-6 bg-slate-50 rounded flex items-center px-2">
              <div className="w-full h-1 bg-slate-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Ruler (Floating above monitor) */}
      <div 
        className="absolute top-[12%] right-[15%] w-[160px] sm:w-[200px] h-6 bg-[#1eb9eb] rounded shadow-md flex items-center justify-between px-3 border border-[#129fca] text-white/90 z-20 animate-float"
        style={{ animationDuration: '4.8s', animationDelay: '1.2s' }}
      >
        <span className="text-[10px] font-mono tracking-widest font-bold">RULER MODE</span>
        <div className="flex gap-1 h-3 items-end">
          <div className="w-[1px] h-3 bg-white/60"></div>
          <div className="w-[1px] h-1.5 bg-white/40"></div>
          <div className="w-[1px] h-1.5 bg-white/40"></div>
          <div className="w-[1px] h-2 bg-white/50"></div>
          <div className="w-[1px] h-1.5 bg-white/40"></div>
          <div className="w-[1px] h-1.5 bg-white/40"></div>
          <div className="w-[1px] h-3 bg-white/60"></div>
        </div>
      </div>

      {/* 8. Magnifying Glass (Floating center foreground) */}
      <div 
        className="absolute bottom-[22%] left-[45%] bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-slate-100 text-[#126585] z-30 animate-float flex items-center justify-center gap-2"
        style={{ animationDuration: '3.5s', animationDelay: '0.4s' }}
      >
        <Search className="w-6 h-6 text-amber-500 animate-pulse" />
        <span className="hidden sm:inline text-xs font-semibold text-slate-600">SEO Audit</span>
      </div>

      {/* 9. Floating Indicator Icons (Map pin, compass, play button) */}
      <div 
        className="absolute top-[8%] right-[8%] bg-rose-500 text-white rounded-full p-2 shadow-lg z-20 animate-bounce"
        style={{ animationDuration: '4s' }}
      >
        <Play className="w-3.5 h-3.5 fill-white" />
      </div>

      <div 
        className="absolute bottom-[15%] left-[28%] bg-emerald-500 text-white rounded-full p-2.5 shadow-lg z-20 animate-float"
        style={{ animationDuration: '5.8s', animationDelay: '0.9s' }}
      >
        <Compass className="w-4 h-4" />
      </div>

      {/* 10. Abstract Developer Avatars (Floating nodes showing collaboration) */}
      <div 
        className="absolute bottom-[28%] left-[2%] bg-white rounded-full p-2 shadow-lg border border-slate-100 flex items-center justify-center z-30 animate-float"
        style={{ animationDuration: '4.2s', animationDelay: '1.8s' }}
      >
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
          <User className="w-4 h-4" />
        </div>
      </div>

      <div 
        className="absolute bottom-[10%] right-[32%] bg-white rounded-full p-2 shadow-lg border border-slate-100 flex items-center justify-center z-30 animate-float"
        style={{ animationDuration: '5s', animationDelay: '2.2s' }}
      >
        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
          <User className="w-4 h-4" />
        </div>
      </div>

      <div 
        className="absolute top-[35%] right-[2%] bg-white rounded-full p-2 shadow-lg border border-slate-100 flex items-center justify-center z-30 animate-float"
        style={{ animationDuration: '4.7s', animationDelay: '1.1s' }}
      >
        <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
          <User className="w-4 h-4" />
        </div>
      </div>

    </div>
  );
}
