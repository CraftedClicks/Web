import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about CraftedClicks — our team, values, and mission to build world-class digital products.',
};

const team = [
  { name: 'Alex Turner', title: 'CEO & Lead Designer', avatar: 'AT', gradient: 'from-cyan-500 to-blue-500' },
  { name: 'Lisa Chen', title: 'Head of Strategy', avatar: 'LC', gradient: 'from-violet-500 to-purple-500' },
  { name: 'Daniel Park', title: 'Lead Developer', avatar: 'DP', gradient: 'from-emerald-500 to-teal-500' },
  { name: 'Priya Nair', title: 'Mobile Developer', avatar: 'PN', gradient: 'from-rose-500 to-pink-500' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020817] pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="tag mb-4">About CraftedClicks</span>
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            We build digital products
            <br />
            <span className="gradient-text">that matter.</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl leading-relaxed">
            CraftedClicks is a results-driven web and app development agency. We partner with businesses across the globe to design, build, and scale digital products that generate real, measurable growth.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 section-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-white mb-5">Our Mission</h2>
            <p className="text-[#94a3b8] leading-relaxed mb-5">
              We believe every business deserves a world-class online presence. Our mission is to democratize premium web development — delivering agency-level quality at a price that makes sense for growing businesses.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              We are not just service providers; we are your technology partners. Every decision we make is rooted in your business goals.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Retention' },
              { value: '8+', label: 'Years in Business' },
              { value: '40+', label: 'Industries Served' },
            ].map((stat) => (
              <div key={stat.label} className="service-card rounded-xl p-6 text-center">
                <div className="text-3xl font-black stat-number mb-1">{stat.value}</div>
                <div className="text-[#64748b] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-white">Meet the <span className="gradient-text">Team</span></h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="service-card rounded-2xl p-8 text-center">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-black text-2xl mx-auto mb-5`}>
                {member.avatar}
              </div>
              <h3 className="text-white font-bold mb-1">{member.name}</h3>
              <p className="text-[#64748b] text-sm">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-black text-white mb-4">Ready to work together?</h2>
        <Link href="/contact" className="btn-glow bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:from-cyan-400 hover:to-blue-400 transition-all inline-flex items-center justify-center whitespace-nowrap">
          Start a Project
        </Link>
      </section>
    </div>
  );
}
