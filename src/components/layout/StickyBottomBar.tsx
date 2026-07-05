'use client';

import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';

export default function StickyBottomBar() {
  const handleScrollToAudit = (e: React.MouseEvent) => {
    e.preventDefault();
    const auditElement = document.getElementById('audit-form');
    if (auditElement) {
      auditElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-slate-200 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] z-50 flex items-center justify-around md:hidden">
      {/* 📞 Call */}
      <a
        href="tel:+9190970868101"
        className="flex flex-col items-center justify-center flex-1 h-full text-dark hover:text-primary transition-colors py-2 active:scale-95"
      >
        <Phone className="w-5 h-5 text-dark" />
        <span className="text-[10px] font-bold tracking-wide uppercase mt-1">Call</span>
      </a>

      {/* Vertical divider */}
      <div className="h-8 w-[1px] bg-slate-200" />

      {/* 💬 WhatsApp */}
      <a
        href="https://wa.me/9190970868101?text=Hi%20I%20want%20a%20free%20audit"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center flex-1 h-full text-[#25D366] hover:opacity-80 transition-opacity py-2 active:scale-95"
      >
        <MessageSquare className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
        <span className="text-[10px] font-bold tracking-wide uppercase mt-1">WhatsApp</span>
      </a>

      {/* Vertical divider */}
      <div className="h-8 w-[1px] bg-slate-200" />

      {/* ✨ Free Audit */}
      <a
        href="#audit-form"
        onClick={handleScrollToAudit}
        className="flex flex-col items-center justify-center flex-1 h-full text-primary hover:text-blue-700 transition-colors py-2 active:scale-95"
      >
        <Sparkles className="w-5 h-5 text-primary fill-primary/10" />
        <span className="text-[10px] font-bold tracking-wide uppercase mt-1">Free Audit</span>
      </a>
    </div>
  );
}
