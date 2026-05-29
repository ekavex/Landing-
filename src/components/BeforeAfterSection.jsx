"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

import { beforeAfterData } from '../data/homeData';

const BeforeAfterSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-navy/5">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight text-navy leading-[1.1]">
          {beforeAfterData.heading}
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Before Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-3xl p-8 bg-alabaster/40 border border-navy/8"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest text-navy/90 font-bold mb-6">
            {beforeAfterData.before.label}
          </div>
          <ul className="space-y-4">
            {beforeAfterData.before.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-navy/8 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3 h-3 text-navy/90" />
                </div>
                <span className="font-sans text-sm text-navy/90 leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* After Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel rounded-3xl p-8 bg-alabaster/40 border-2 border-coral/25 shadow-lg shadow-coral/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-coral/5 rounded-full blur-3xl pointer-events-none" />
          <div className="font-mono text-[10px] uppercase tracking-widest text-coral font-bold mb-6">
            {beforeAfterData.after.label}
          </div>
          <ul className="space-y-4">
            {beforeAfterData.after.points.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-coral shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-navy/80 leading-relaxed font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
