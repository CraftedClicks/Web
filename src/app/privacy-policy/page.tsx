import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'CraftedClicks Privacy Policy — how we collect, use, and protect your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#020817] pt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-black text-white mb-4">Privacy Policy</h1>
        <p className="text-[#64748b] text-sm mb-12">Last updated: June 2025</p>
        <div className="space-y-10 text-[#94a3b8] leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you fill out our contact form (name, email, phone, company, message). We also collect usage data automatically when you visit our website.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to respond to your inquiries, provide our services, improve our website, and communicate with you about our services and updates.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Data Storage</h2>
            <p>Your contact form submissions are stored securely in Firebase Firestore. We do not sell, trade, or transfer your personal information to outside parties.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Contact Us</h2>
            <p>For privacy-related inquiries, please email us at <a href="mailto:privacy@craftedclicks.com" className="text-cyan-400 hover:underline">privacy@craftedclicks.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
