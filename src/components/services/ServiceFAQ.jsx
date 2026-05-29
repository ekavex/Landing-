'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function ServiceFAQ({ faqs }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-coral font-bold mb-3">
          FAQ
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-navy text-balance">
          Questions we always get
        </h2>
      </motion.div>

      <div className="max-w-3xl space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="glass-panel rounded-2xl overflow-hidden border border-navy/6 hover:border-coral/20 transition-colors duration-300"
          >
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
            >
              <span className="font-heading text-sm font-black text-navy group-hover:text-coral transition-colors">
                {faq.q}
              </span>
              <span className="shrink-0 w-7 h-7 rounded-full bg-navy/5 flex items-center justify-center text-navy group-hover:bg-coral/10 group-hover:text-coral transition-colors">
                {open === i ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 border-t border-navy/5">
                    <p className="font-sans text-sm text-navy/65 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
