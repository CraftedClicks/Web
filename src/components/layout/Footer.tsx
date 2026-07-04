import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-alt border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-foreground mb-4 block">
              Crafted<span className="text-accent">Clicks</span>
            </Link>
            <p className="text-foreground/70 max-w-sm mb-6">
              We design and develop modern, fast, and conversion-focused websites for companies that want more leads.
            </p>
            <div className="flex space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-foreground/70 hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/industries" className="text-foreground/70 hover:text-accent transition-colors">Industries</Link></li>
              <li><Link href="/portfolio" className="text-foreground/70 hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link href="/about" className="text-foreground/70 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="text-foreground/70 hover:text-accent transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-foreground/70">
              <li>hello@craftedclicks.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Digital Ave, Tech District</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} CraftedClicks. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
