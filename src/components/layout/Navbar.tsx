'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Careers', href: '/careers' },
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
          scrolled || menuOpen ? 'shadow-md shadow-black/10' : ''
        }`}
      >
        <div className="flex w-full h-[76px] bg-[#116b8b]">
          {/* Logo Section (White, Slanted) */}
          <div className="relative flex items-center justify-start bg-white h-full pl-4 sm:pl-8 xl:pl-32 w-[60%] sm:w-[50%] md:w-[45%] xl:w-[35%] z-10"
               style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 40px) 100%, 0% 100%)' }}>
            <Link href="/" className="flex items-center gap-2 group shrink-0">
              <div className="flex items-center justify-center w-8 h-8 md:w-[38px] md:h-[38px] bg-[#677788] text-[#1eb9eb] rounded-[4px] text-2xl font-black italic relative overflow-hidden">
                <span className="z-10 relative left-[1px]">S</span>
                <div className="absolute w-full h-[6px] bg-[#1eb9eb] bottom-0 left-0 opacity-80"></div>
              </div>
              <div className="flex flex-col leading-none mt-1">
                <span className="text-lg md:text-[20px] font-extrabold text-[#0da0d1] tracking-tight mb-[1px]">
                  SOFTCROWD
                </span>
                <span className="text-[9px] md:text-[10px] tracking-[0.25em] text-[#8e99a3] uppercase font-semibold">
                  Technologies
                </span>
              </div>
            </Link>
          </div>

          {/* Navigation Links Section (Teal) */}
          <div className="flex-1 flex items-center justify-end pr-4 sm:pr-8 xl:pr-32 relative">
             {/* Desktop nav */}
             <div className="hidden lg:flex items-center gap-6 xl:gap-8 mt-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 text-white hover:text-cyan-200 transition-colors duration-200 font-medium text-[15px]"
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-[-2px] opacity-80" />}
                </Link>
              ))}
            </div>
            
            {/* Mobile menu toggle */}
            <button
              className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 shrink-0 ml-4"
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
        className={`mobile-nav fixed left-0 right-0 z-40 lg:hidden transition-all duration-300 ease-in-out bg-white border-b border-gray-100 ${
          menuOpen ? 'top-[76px] opacity-100 visible translate-y-0 shadow-xl' : 'top-16 opacity-0 invisible -translate-y-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-[#0da0d1] transition-colors font-medium py-3 border-b border-gray-50 flex items-center justify-between"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
