import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'CraftedClicks delivers specialized web and app development solutions across 40+ industries.',
};

const industries = [
  { name: 'Healthcare', icon: '🏥', description: 'HIPAA-compliant digital solutions for clinics, hospitals, and health startups.' },
  { name: 'Real Estate', icon: '🏠', description: 'Property listing platforms, virtual tours, and lead generation sites.' },
  { name: 'Education', icon: '🎓', description: 'E-learning platforms, school websites, and student portals.' },
  { name: 'Finance & FinTech', icon: '💹', description: 'Secure, compliant web apps for banks, fintech startups, and advisors.' },
  { name: 'Retail & E-Commerce', icon: '🛒', description: 'Online stores, marketplaces, and omnichannel retail platforms.' },
  { name: 'Hospitality & Travel', icon: '✈️', description: 'Booking systems, hotel websites, and travel agency platforms.' },
  { name: 'Legal', icon: '⚖️', description: 'Professional law firm websites with secure client portals.' },
  { name: 'Technology', icon: '💻', description: 'SaaS products, tech startup sites, and developer tools.' },
  { name: 'Food & Restaurant', icon: '🍔', description: 'Restaurant websites, online ordering, and delivery platforms.' },
  { name: 'Sports & Fitness', icon: '💪', description: 'Gym management software, fitness apps, and sports club sites.' },
  { name: 'Non-Profit', icon: '❤️', description: 'Donation platforms, volunteer management, and awareness campaigns.' },
  { name: 'Entertainment', icon: '🎬', description: 'Media platforms, streaming sites, and event management apps.' },
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#020817] pt-20">
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="tag mb-4">Industries</span>
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Built for <span className="gradient-text">every industry</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            No matter your sector, we bring deep domain knowledge and technical expertise to deliver solutions that work.
          </p>
        </div>
      </section>

      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div key={industry.name} className="service-card rounded-2xl p-8">
              <div className="text-5xl mb-5">{industry.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
