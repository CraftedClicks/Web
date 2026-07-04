import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  return {
    title: post?.title || 'Blog Post',
    description: post?.excerpt,
  };
}

export default async function BlogPostPage(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#020817] pt-32 text-center">
        <h1 className="text-3xl font-bold text-white">Post not found</h1>
        <Link href="/blog" className="mt-6 inline-block text-cyan-400 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] pt-20">
      <article className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-[#64748b] hover:text-cyan-400 transition-colors text-sm mb-8">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Blog
        </Link>
        <span className="tag mb-4">{post.category}</span>
        <h1 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6 leading-tight">{post.title}</h1>
        <div className="flex items-center gap-4 mb-10">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${post.color} flex items-center justify-center text-white font-bold text-sm`}>
            {post.author.charAt(0)}
          </div>
          <div>
            <div className="text-white font-semibold text-sm">{post.author}</div>
            <div className="text-[#64748b] text-xs">{post.authorTitle} · {post.date} · {post.readTime}</div>
          </div>
        </div>
        <div className={`h-1 w-full bg-gradient-to-r ${post.color} rounded mb-10`} />
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-[#94a3b8] text-lg leading-relaxed">{post.excerpt}</p>
          <p className="text-[#94a3b8] leading-relaxed mt-6">
            This is a preview of the full article. In a production environment, the full article content would be fetched from your CMS or database and rendered here with rich formatting, code blocks, images, and more.
          </p>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5">
          <Link href="/contact" className="btn-glow bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:from-cyan-400 hover:to-blue-400 transition-all inline-flex items-center justify-center whitespace-nowrap">
            Work With Us
          </Link>
        </div>
      </article>
    </div>
  );
}
