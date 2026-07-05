'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroLeadForm() {
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url && email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="w-full max-w-lg mt-6 bg-[#f8fafc]/90 backdrop-blur-sm border border-slate-200/50 rounded-xl p-5 shadow-lg relative z-20">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="text-sm font-semibold text-slate-800 tracking-wide mb-1 uppercase text-left">
            🎯 Get Free Website Audit
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="url"
              required
              placeholder="Your Website Link (e.g. www.example.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 bg-white border border-slate-200 text-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 shadow-inner"
            />
            <input
              type="email"
              required
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border border-slate-200 text-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 shadow-inner"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto self-start bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg px-6 py-2.5 text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-md mt-1 shrink-0"
          >
            <span>Run Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      ) : (
        <div className="text-center py-4">
          <div className="text-emerald-600 font-bold text-base mb-1">🎉 Request Received!</div>
          <p className="text-slate-600 text-sm">We are analyzing your page. A detailed audit report will be sent to <span className="font-semibold text-slate-800">{email}</span> within 24 hours.</p>
        </div>
      )}
    </div>
  );
}
