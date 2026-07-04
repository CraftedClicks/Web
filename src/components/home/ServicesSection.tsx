import Link from 'next/link';

const services = [
  {
    title: 'Custom Web App Development',
    description: 'We specialize in designing and engineering high-performance web applications and custom systems (CRM, ERP) tailored to streamline your business workflow.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    slug: 'web-development',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Custom Mobile App Development',
    description: 'Connect with customers globally on iOS and Android. We build responsive, robust, and highly engaging mobile apps leveraging cutting-edge tools.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    slug: 'mobile-apps',
    gradient: 'from-blue-500 to-violet-500',
  },
  {
    title: 'Digital Marketing & SEO Services',
    description: 'Generate visibility and drive conversion. We optimize your search engine rankings and launch strategic digital campaigns to put your products in front of buyers.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    slug: 'seo',
    gradient: 'from-violet-500 to-purple-500',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4">Core Expertise</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mt-4 mb-4">
            Our Leading Web Development Company <br />
            Offers <span className="gradient-text">Professional IT Services</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.slug} className="service-card rounded-2xl p-8 group flex flex-col justify-between">
              <div>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} p-3.5 text-white mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 leading-snug">{service.title}</h3>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">{service.description}</p>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent hover:gap-3 transition-all`}
              >
                Learn more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke={`url(#grad-${service.slug})`}>
                  <defs>
                    <linearGradient id={`grad-${service.slug}`} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
