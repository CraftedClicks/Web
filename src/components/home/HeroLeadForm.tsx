'use client';

import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    if (submitted) {
      const canvas = document.getElementById('confetti-canvas') as HTMLCanvasElement;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = canvas.parentElement?.clientWidth || 400;
      canvas.height = canvas.parentElement?.clientHeight || 200;

      const colors = ['#0052FF', '#3b82f6', '#0A192F', '#FFD700', '#FF4500'];
      const particles: any[] = [];

      for (let i = 0; i < 70; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * -50,
          r: Math.random() * 4 + 3,
          d: Math.random() * canvas.height,
          color: colors[Math.floor(Math.random() * colors.length)],
          tilt: Math.random() * 10 - 5,
          tiltAngleIncremental: Math.random() * 0.07 + 0.02,
          tiltAngle: 0
        });
      }

      let animationFrameId: number;

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;

        particles.forEach((p) => {
          p.tiltAngle += p.tiltAngleIncremental;
          p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2.5;
          p.x += Math.sin(p.tiltAngle) * 0.5;
          p.tilt = Math.sin(p.tiltAngle - p.r / 2) * 5;

          if (p.y < canvas.height) {
            active = true;
          }

          ctx.beginPath();
          ctx.lineWidth = p.r;
          ctx.strokeStyle = p.color;
          ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
          ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
          ctx.stroke();
        });

        if (active) {
          animationFrameId = requestAnimationFrame(draw);
        }
      };

      draw();

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [submitted]);

  return (
    <div className="w-full max-w-lg mt-6 bg-[#f8fafc]/90 backdrop-blur-sm border border-slate-200/50 rounded-xl p-5 shadow-lg relative z-20">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="text-sm font-bold text-dark tracking-wide mb-1 uppercase text-left">
            🎯 Get Free Website Audit
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="url"
              required
              placeholder="Website URL (e.g. www.example.com)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 bg-white border border-slate-200 text-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 shadow-inner"
            />
            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white border border-slate-200 text-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 shadow-inner"
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto self-start bg-primary hover:bg-blue-600 text-white rounded-lg px-6 py-2.5 text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-md mt-1 shrink-0 btn-active"
          >
            <span>Run Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          {/* Trust Badges below audit form */}
          <div className="flex flex-wrap items-center justify-start gap-3 mt-3 text-[10px] text-slate-500 font-semibold border-t border-slate-100 pt-3">
            <span className="flex items-center gap-1">🔒 SSL Secured</span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1">🛡️ No Spam</span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1">💼 100% Confidential</span>
          </div>
        </form>
      ) : (
        <div className="text-center py-6 relative min-h-[120px] flex flex-col justify-center items-center">
          <canvas id="confetti-canvas" className="absolute inset-0 w-full h-full pointer-events-none z-0" />
          <div className="relative z-10 px-4">
            <div className="text-emerald-600 font-bold text-lg mb-2">✅ Report sent! Check your email.</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              We are analyzing your page. A detailed audit report will be sent to <span className="font-semibold text-slate-800">{email}</span> within 24 hours.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
