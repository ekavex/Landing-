"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';

import { faqData, faqHeader } from '../data/homeData';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto border-t border-navy/5">
      <div className="text-center mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3">
          {faqHeader.subtitle}
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight text-navy leading-[1.1]">
          {faqHeader.title}
        </h2>
      </div>

      <div className="space-y-4">
        {faqData.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div 
              key={idx} 
              className={`rounded-3xl border transition-all duration-300 ${
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
