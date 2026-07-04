import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-foreground">
              Crafted<span className="text-accent">Clicks</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/services" className="text-foreground/80 hover:text-accent transition-colors px-3 py-2 rounded-md font-medium">Services</Link>
              <Link href="/industries" className="text-foreground/80 hover:text-accent transition-colors px-3 py-2 rounded-md font-medium">Industries</Link>
              <Link href="/portfolio" className="text-foreground/80 hover:text-accent transition-colors px-3 py-2 rounded-md font-medium">Portfolio</Link>
              <Link href="/about" className="text-foreground/80 hover:text-accent transition-colors px-3 py-2 rounded-md font-medium">About</Link>
              <Link href="/contact" className="bg-accent text-white px-5 py-2.5 rounded-full font-medium hover:bg-accent/90 transition-all shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
