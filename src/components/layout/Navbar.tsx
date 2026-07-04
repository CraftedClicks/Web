'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-[#020817]/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        {/* Top Info Bar */}
        <div className="hidden lg:block bg-[#0f172a]/80 border-b border-white/5 text-[11px] sm:text-xs text-[#94a3b8] py-2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
              <a href="mailto:hello@craftedclicks.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@craftedclicks.com
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +1 (555) 123-4567
              </a>
            </div>
            <div className="hidden sm:block">
              Instant Solutions for your Business
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-black text-white text-lg shadow-lg shadow-cyan-500/30 shrink-0">
                C
              </div>
              <span className="text-base sm:text-xl font-bold text-white">
                Crafted<span className="gradient-text">Clicks</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link text-[#cbd5e1] hover:text-white transition-colors duration-200 font-semibold text-sm tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="btn-glow bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2 rounded-full text-xs font-bold hover:from-cyan-400 hover:to-blue-400 transition-all"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden text-[#cbd5e1] hover:text-white w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/10 shrink-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`mobile-nav fixed left-0 right-0 z-40 border-b border-white/5 lg:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'top-16 opacity-100 visible translate-y-0' : 'top-12 opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#cbd5e1] hover:text-white transition-colors font-semibold py-3.5 border-b border-white/5 text-[0.95rem] flex items-center min-h-[44px]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 btn-glow bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-center font-bold text-[0.95rem] flex items-center justify-center min-h-[44px]"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
