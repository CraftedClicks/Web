import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Insights, tutorials, and industry news from the CraftedClicks team.',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#020817] pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="tag mb-4">Our Blog</span>
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Insights & <span className="gradient-text">Resources</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            Practical guides, industry insights, and expert opinions on web development, design, and digital growth.
          </p>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card block group">
              <div className={`h-2 w-full bg-gradient-to-r ${post.color}`} />
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="tag text-xs">{post.category}</span>
                  <span className="text-[#475569] text-xs">{post.readTime}</span>
                </div>
                <h2 className="text-white font-bold text-xl leading-snug mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-[#64748b] text-sm leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${post.color} flex items-center justify-center text-white font-bold text-xs`}>
                      {post.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white text-xs font-semibold">{post.author}</div>
                      <div className="text-[#475569] text-xs">{post.date}</div>
                    </div>
                  </div>
                  <span className="text-cyan-400 text-sm font-semibold">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
