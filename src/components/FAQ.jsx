import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: 'What core services does Ecavex specialize in?',
      a: 'We specialize in five premium departments: Next.js/React web development, custom AI agent workflow automation, intelligent AI model integration (LLMs, vector stores), high-end editorial UI/UX design, mobile applications (React Native), and enterprise cybersecurity auditing.',
    },
    {
      q: 'How long does a standard web or AI system build take?',
      a: 'Timeline depends on structural complexity. A standard premium website takes 4-6 weeks, a detailed SaaS platform takes 8-12 weeks, and a complex custom Agentic AI automated pipeline takes 10-14 weeks.',
    },
    {
      q: 'What is your operational pricing structure?',
      a: 'We operate on a transparent tier system or custom scope. Our starter web solutions launch from ₹25,000+, growth SaaS/AI systems from ₹75,000+, and complex multi-agent enterprise infrastructures via dedicated scope quotes.',
    },
    {
      q: 'Do you offer post-deployment technical support?',
      a: 'Absolutely. Every single project we deliver includes one full month of free technical coverage, active server monitoring, performance audits, and database scaling assistance.',
    },
    {
      q: 'How do you ensure data security in your LLM/AI integrations?',
      a: 'We implement bank-grade OAuth authentication protocols, strict input validation models to completely prevent SQL and LLM injection threats, SSL enforcement, and custom rate limits.',
    },
    {
      q: 'Can you integrate custom AI models into our existing legacy codebase?',
      a: 'Yes. We specialize in non-destructive systems engineering. We can construct custom API pipelines or localized microservices that plug directly into your current databases or platforms.',
    },
    {
      q: 'What is your weekly client communication cadence like?',
      a: 'We enforce 100% workflow transparency. You receive a dedicated Slack channel, a live ClickUp task dashboard, and weekly live demo rollouts on staging links (e.g., Vercel) to provide feedback.',
    },
    {
      q: 'Who owns the final codebase and intellectual property?',
      a: 'You do. Upon project completion and final milestone clearance, full code repository ownership and intellectual property rights are officially transferred to your entity.',
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-navy/5">
      <div className="text-center mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3">
          Support & Intelligence
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight text-navy leading-[1.1]">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div 
              key={idx} 
              className={`rounded-[1.5rem] border transition-all duration-300 ${
                isOpen 
                  ? 'border-coral/25 bg-alabaster/60 shadow-lg shadow-navy/2' 
                  : 'border-navy/5 bg-alabaster/20 hover:border-navy/15'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-heading text-sm md:text-base font-bold text-navy pr-4">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-4 h-4 text-coral shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-navy/3 font-sans text-xs md:text-sm text-navy/70 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
