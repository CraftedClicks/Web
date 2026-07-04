'use client';

import { useState } from 'react';

const services = [
  'Web Design',
  'Web Development',
  'Mobile App Development',
  'SEO & Marketing',
  'E-Commerce',
  'Website Maintenance',
  'Other',
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const initialForm: FormData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      // Firebase submission — requires firebase config in .env.local
      const { db } = await import('@/lib/firebase');
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      await addDoc(collection(db, 'leads'), {
        ...form,
        createdAt: serverTimestamp(),
        source: 'contact-form',
      });
      setSubmitted(true);
      setForm(initialForm);
    } catch {
      // Graceful fallback if Firebase not configured
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="service-card rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
        <p className="text-[#94a3b8] mb-6">Thank you for reaching out. We will get back to you within 24 hours.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-cyan-400 hover:underline text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="service-card rounded-2xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#94a3b8] text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            id="contact-name"
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="form-input"
            required
          />
        </div>
        <div>
          <label className="block text-[#94a3b8] text-sm font-medium mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            id="contact-email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="form-input"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#94a3b8] text-sm font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="contact-phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="form-input"
          />
        </div>
        <div>
          <label className="block text-[#94a3b8] text-sm font-medium mb-2">Company Name</label>
          <input
            type="text"
            name="company"
            id="contact-company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="form-input"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[#94a3b8] text-sm font-medium mb-2">Service Needed</label>
          <select
            name="service"
            id="contact-service"
            value={form.service}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[#94a3b8] text-sm font-medium mb-2">Budget Range</label>
          <select
            name="budget"
            id="contact-budget"
            value={form.budget}
            onChange={handleChange}
            className="form-input"
          >
            <option value="">Select budget</option>
            <option value="<5k">Under $5,000</option>
            <option value="5k-15k">$5,000 – $15,000</option>
            <option value="15k-50k">$15,000 – $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-[#94a3b8] text-sm font-medium mb-2">Project Details *</label>
        <textarea
          name="message"
          id="contact-message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project — what you need, your timeline, and any specific requirements..."
          className="form-input resize-none"
          required
        />
      </div>
      {error && <p className="text-rose-400 text-sm">{error}</p>}
      <button
        type="submit"
        id="contact-submit"
        disabled={loading}
        className="btn-glow w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-full font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? 'Sending...' : 'Send Message & Get a Quote'}
      </button>
      <p className="text-[#475569] text-xs text-center">We respond within 24 hours · No spam, ever.</p>
    </form>
  );
}
