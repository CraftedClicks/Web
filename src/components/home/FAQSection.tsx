'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How much does a typical website or mobile app cost?',
    answer: 'Our pricing is flexible and depends on the complexity of your requirements. Basic custom websites start with transparent flat-rate packages, while bespoke dashboards and mobile apps are quoted based on specific features, user roles, and integrations. We provide detailed line-item quotes with no hidden fees.',
  },
  {
    question: 'How long does it take to deliver a custom project?',
    answer: 'Standard website projects are designed, built, and launched in 14 Days. More complex custom mobile apps, SaaS dashboards, and portal systems typically take between 4 to 8 weeks to complete depending on the project scope and client review timelines.',
  },
  {
    question: 'What does your web and app development process look like?',
    answer: 'We follow a structured 4-step workflow: (1) Discovery & Strategy to align on user requirements, (2) UI/UX Design to create custom visual layouts, (3) Development & Integration in clean code using Next.js/React, and (4) QA Testing & Launch. You will have a dedicated developer staging link to monitor live updates.',
  },
  {
    question: 'Do you offer post-launch support and ongoing maintenance?',
    answer: 'Yes, every project includes 30 days of free post-launch support to resolve any initial bugs or questions. Following this, we offer budget-friendly monthly maintenance retainers that cover security updates, server backups, hosting management, and minor content updates.',
  },
  {
    question: 'What are your payment milestones?',
    answer: 'Our standard payment structure is a 50% milestone advance payment to schedule the project kickoff and draft design mockups, and the remaining 50% upon successful completion, final approval, and launch of the code. We accept bank transfers, UPI, credit cards, and PayPal.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-5 bg-grey border-b border-slate-100">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag mb-4">FAQ</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark mt-4 mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-slate-500 text-base">
            Everything you need to know about our pricing, timelines, process, and support policies.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-dark hover:text-primary transition-colors focus:outline-none min-h-[44px]"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] border-t border-slate-50 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  } overflow-hidden`}
                >
                  <p className="p-6 text-slate-500 text-sm leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
