import { services } from '@/data/services';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<'/services/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);
  return {
    title: service?.title || 'Service',
    description: service?.description,
  };
}

export default async function ServiceDetailPage(props: PageProps<'/services/[slug]'>) {
  const { slug } = await props.params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#020817] pt-32 text-center">
        <h1 className="text-3xl font-bold text-white">Service not found</h1>
        <Link href="/services" className="mt-6 inline-block text-cyan-400 hover:underline">Back to Services</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020817] pt-20">
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/services" className="inline-flex items-center gap-2 text-[#64748b] hover:text-cyan-400 transition-colors text-sm mb-8">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back to Services
        </Link>
        <span className="tag mb-6">{service.title}</span>
        <h1 className={`text-5xl font-black mt-4 mb-6 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
          {service.title}
        </h1>
        <p className="text-xl text-[#94a3b8] mb-10">{service.description}</p>
        <div className="service-card rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-white mb-6">What&apos;s included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-3 text-[#cbd5e1]">
                <svg className="w-5 h-5 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {f}
              </div>
            ))}
          </div>
        </div>
        <Link
          href="/contact"
          className="btn-glow bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold hover:from-cyan-400 hover:to-blue-400 transition-all inline-flex items-center justify-center whitespace-nowrap"
        >
          Get a Quote for {service.title}
        </Link>
      </section>
    </div>
  );
}
