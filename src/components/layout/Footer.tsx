import Link from 'next/link';

const legal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-white/5 relative z-10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Address */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-black text-white text-lg">
                C
              </div>
              <span className="text-xl font-bold text-white">
                Crafted<span className="gradient-text">Clicks</span>
              </span>
            </Link>
            <p className="text-[#64748b] text-[0.95rem] leading-relaxed mb-6 max-w-sm">
              We design and build modern, fast, and conversion-focused websites and systems for companies that want to grow.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#64748b] text-[0.95rem]">
                <span className="text-cyan-400 text-lg shrink-0">📍</span> 123 Digital Ave, Tech District, CA 94102
              </li>
              <li className="flex items-center gap-3 text-[#64748b] text-[0.95rem]">
                <span className="text-cyan-400 text-lg shrink-0">📞</span> +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-3 text-[#64748b] text-[0.95rem]">
                <span className="text-cyan-400 text-lg shrink-0">✉️</span> hello@craftedclicks.com
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className="flex flex-col items-start md:items-center">
            <div>
              <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Important Links</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-[#64748b] hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
                <li><Link href="/blog" className="text-[#64748b] hover:text-cyan-400 transition-colors text-sm">Blogs</Link></li>
                <li><Link href="/contact" className="text-[#64748b] hover:text-cyan-400 transition-colors text-sm">Contact Us</Link></li>
                <li><Link href="/about#careers" className="text-[#64748b] hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
                <li><Link href="/privacy-policy" className="text-[#64748b] hover:text-cyan-400 transition-colors text-sm">Terms & Privacy</Link></li>
              </ul>
            </div>
          </div>

          {/* Map Embed */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Our Location</h3>
            <div className="rounded-xl overflow-hidden border border-white/10 h-48 w-full shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867905394797!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1620000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CraftedClicks Location Map"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#475569] text-[0.95rem] text-center sm:text-left">
            &copy; {new Date().getFullYear()} CraftedClicks. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-[#475569] hover:text-cyan-400 transition-colors text-[0.95rem]">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
