import Link from 'next/link';

const posts = [
  {
    title: 'User-Centric Design: Creating Intuitive and Engaging Software Interfaces',
    excerpt: "In today's fast-paced digital landscape, the success of software products hinges on user experience...",
    slug: 'web-design-trends-2025',
    category: 'Design',
    date: 'Dec 22, 2022',
    comments: '0',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Responsive UI/UX Design for Software Applications',
    excerpt: 'In the ever-evolving landscape of software development, the importance of a responsive user interface...',
    slug: 'why-your-website-loses-leads',
    category: 'UI/UX',
    date: 'Dec 22, 2022',
    comments: '0',
    color: 'from-blue-500 to-violet-500',
  },
  {
    title: 'Protecting Your Data: A Guide to Digital Security',
    excerpt: 'In today\'s digital age, safeguarding your data is of paramount importance. The ever-increasing reliance on technology...',
    slug: 'nextjs-vs-react-2025',
    category: 'Security',
    date: 'Dec 10, 2022',
    comments: '0',
    color: 'from-violet-500 to-purple-500',
  },
];

export default function BlogPreview() {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4">Latest Insights</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-4 text-white">
            Blog <span className="gradient-text">Posts</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card block group">
              {/* Image Preview Mockup */}
              <div className="h-48 bg-slate-950 border-b border-white/5 relative overflow-hidden flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 opacity-30" />
                <div className="text-center">
                  <div className="text-4xl mb-2">📝</div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">{post.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-[#64748b] mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.comments} Comments</span>
                </div>
                <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-[#64748b] text-xs leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                <span className="text-cyan-400 text-xs font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                  Read more &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
