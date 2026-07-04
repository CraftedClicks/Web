import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020817] flex items-center justify-center pt-20">
      <div className="text-center max-w-xl mx-auto px-4">
        <div className="text-8xl font-black gradient-text mb-6">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-[#94a3b8] mb-8">The page you are looking for does not exist or has been moved.</p>
        <Link
          href="/"
          className="btn-glow bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:from-cyan-400 hover:to-blue-400 transition-all inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
