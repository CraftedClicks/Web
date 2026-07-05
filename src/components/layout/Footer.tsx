'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
];

const serviceLinks = [
  { label: 'Custom Web Apps', href: '/services/web-development' },
  { label: 'Custom Mobile Apps', href: '/services/mobile-apps' },
  { label: 'SEO & Marketing', href: '/services/seo' },
];

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-white/5 relative z-10 text-left">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          
          {/* Brand & Address */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-black text-white text-lg">
                C
              </div>
              <span className="text-xl font-bold text-white">
                Crafted<span className="text-cyan-400">Clicks</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Custom web and mobile application engineering built for startups and SMEs. We build fast, premium websites that turn visitors into active clients.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.051 1.76.24 2.17.4.54.21.933.46 1.336.863.4.4.655.793.862 1.336.162.41.351 1.03.4 2.17.044.927.054 1.282.054 3.71s-.01 2.784-.054 3.71c-.051 1.14-.24 1.76-.4 2.17-.211.54-.46.933-.863 1.336-.4.4-.793.655-1.336.862-.41.162-1.03.351-2.17.4-.927.044-1.282.054-3.71.054s-2.784-.01-3.71-.054c-1.14-.051-1.76-.24-2.17-.4a3.864 3.864 0 01-1.336-.862 3.864 3.864 0 01-.862-1.336c-.162-.41-.351-1.03-.4-2.17C2.01 14.784 2 14.43 2 12s.01-2.784.054-3.71c.051-1.14.24-1.76.4-2.17.211-.54.46-.933.863-1.336.4-.4.793-.655 1.336-.862.41-.162 1.03-.351 2.17-.4.927-.044 1.282-.054 3.71-.054zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-cyan-[#10b1e4] hover:text-cyan-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 space-y-3 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="tel:+919970968101" className="hover:text-white">+91 99709 68101</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:sourabh3527@gmail.com" className="hover:text-white">sourabh3527@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Our Location</h3>
            <div className="rounded-xl overflow-hidden border border-white/10 h-44 w-full shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.2641508215!2d73.72107815330364!3d20.011666993132644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeedab7d2871f%3A0xe54e3d93540c1157!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CraftedClicks Location Map Nashik India"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-24 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} CraftedClicks. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-cyan-400 transition-colors text-xs sm:text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
