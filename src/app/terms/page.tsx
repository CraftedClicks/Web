import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'CraftedClicks Terms of Service.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#020817] pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-black text-white mb-4">Terms of Service</h1>
        <p className="text-[#64748b] text-sm mb-12">Last updated: June 2025</p>
        <div className="space-y-10 text-[#94a3b8] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p>By using our services, you agree to these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Services</h2>
            <p>CraftedClicks provides web design, web development, mobile app development, SEO, and related digital services. The scope of any specific project will be defined in a separate project agreement or statement of work.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Intellectual Property</h2>
            <p>Upon full payment, all work product created specifically for you becomes your intellectual property. We retain the right to display the work in our portfolio unless agreed otherwise.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Limitation of Liability</h2>
            <p>CraftedClicks is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Contact</h2>
            <p>For questions about these terms, email <a href="mailto:legal@craftedclicks.com" className="text-cyan-400 hover:underline">legal@craftedclicks.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
