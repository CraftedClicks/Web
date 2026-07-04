import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore CraftedClicks full range of web design, development, mobile app, SEO, and e-commerce services.',
};

const services = [
  {
    title: 'Web Design',
    description: 'Stunning, conversion-focused designs that captivate visitors and reflect your brand identity perfectly.',
    slug: 'web-design',
    gradient: 'from-cyan-500 to-blue-500',
    icon: '🎨',
    features: ['Custom UI/UX Design', 'Brand Identity', 'Responsive Layouts', 'Design Systems', 'Prototype & Wireframing'],
  },
  {
    title: 'Web Development',
    description: 'Fast, secure, and scalable web applications built with Next.js, React, and modern tech stacks.',
    slug: 'web-development',
    gradient: 'from-blue-500 to-violet-500',
    icon: '💻',
    features: ['Next.js / React', 'API Integration', 'Performance Optimization', 'SEO-ready Architecture', 'CMS Integration'],
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android that users love and return to.',
    slug: 'mobile-apps',
    gradient: 'from-violet-500 to-purple-500',
    icon: '📱',
    features: ['React Native', 'iOS & Android', 'App Store Publishing', 'Push Notifications', 'Offline Support'],
  },
  {
    title: 'SEO & Digital Marketing',
    description: 'Rank higher on Google, attract qualified traffic, and grow your business with data-driven SEO.',
    slug: 'seo',
    gradient: 'from-emerald-500 to-cyan-500',
    icon: '📈',
    features: ['Technical SEO Audit', 'Keyword Strategy', 'On-page Optimization', 'Link Building', 'Analytics & Reporting'],
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Powerful online stores built on Shopify, WooCommerce, or custom platforms that convert visitors to buyers.',
    slug: 'ecommerce',
    gradient: 'from-amber-500 to-orange-500',
    icon: '🛒',
    features: ['Shopify Development', 'Payment Gateways', 'Inventory Management', 'Product Optimization', 'Conversion Optimization'],
  },
  {
    title: 'Website Maintenance',
    description: 'Keep your website secure, updated, and running at peak performance with our maintenance plans.',
    slug: 'maintenance',
    gradient: 'from-rose-500 to-pink-500',
    icon: '🛠️',
    features: ['Security Updates', 'Performance Monitoring', 'Content Updates', 'Backup Management', '24/7 Support'],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#020817] pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-transparent" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="tag mb-4">What We Offer</span>
          <h1 className="text-5xl md:text-6xl font-black mt-4 mb-6">
            Services that <span className="gradient-text">drive growth</span>
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl mx-auto">
            End-to-end digital solutions tailored for your business — from initial concept and design to launch, marketing, and ongoing growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="service-card rounded-2xl p-8 flex flex-col">
              <div className="text-4xl mb-5">{service.icon}</div>
              <div className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-3`}>
                {service.title}
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#cbd5e1]">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${service.slug}`}
                className={`mt-auto w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-full text-sm font-semibold text-center hover:opacity-90 transition-opacity`}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-black mb-4">Not sure which service you need?</h2>
          <p className="text-[#94a3b8] mb-8">Let us help. Book a free 30-minute consultation and we will map out exactly what your business needs.</p>
          <Link href="/contact" className="btn-glow bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:from-cyan-400 hover:to-blue-400 transition-all inline-block">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
