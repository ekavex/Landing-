'use client';

import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

function AnimatedStat({ value, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [displayed, setDisplayed] = useState('—');

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setDisplayed(value), 200);
      return () => clearTimeout(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading text-4xl md:text-5xl font-black text-coral mb-1"
      >
        {displayed}
      </motion.div>
      <div className="font-sans text-xs text-alabaster/60">{label}</div>
    </div>
  );
}

export default function Deliverables({ deliverables, stat, caseStudy }) {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Deliverables — dark card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 bg-navy rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden shadow-xl"
        >
          <div className="absolute inset-0 bg-linear-to-tr from-coral/8 via-transparent to-white/3 pointer-events-none" />
          <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-coral/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <div className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold mb-6">
              What You Get
            </div>

            <div className="space-y-4 mb-8">
              {deliverables.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-alabaster/85 leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Stat */}
            <div className="border-t border-white/8 pt-6">
              <AnimatedStat value={stat.value} label={stat.label} />
            </div>
          </div>
        </motion.div>

        {/* Case study */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-5 flex flex-col gap-5"
        >
          <div className="glass-panel rounded-3xl p-7 border-l-4 border-coral flex-1 flex flex-col justify-between">
            <div>
              <div className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold mb-4">
                Real-World Result / {caseStudy.industry}
              </div>
              <p className="font-sans text-sm text-navy/70 leading-relaxed mb-4">
                {caseStudy.problem}
              </p>
              <div className="bg-coral/5 rounded-2xl p-4">
                <div className="font-mono text-[9px] uppercase tracking-widest text-navy/40 font-bold mb-1">
                  Outcome
                </div>
                <p className="font-heading text-sm font-bold text-navy leading-snug">
                  {caseStudy.result}
                </p>
              </div>
            </div>

            {caseStudy.metrics && caseStudy.metrics.length > 0 && (
              <div className="mt-6 pt-5 border-t border-navy/6 grid grid-cols-3 gap-2">
                {caseStudy.metrics.map((m, idx) => (
                  <div key={idx} className="bg-navy/3 rounded-xl p-2.5 text-center border border-navy/5 shadow-xs">
                    <div className="font-heading text-[13px] sm:text-sm font-extrabold text-coral leading-none mb-1 select-none">
                      {m.value}
                    </div>
                    <div className="font-sans text-[7.5px] uppercase tracking-wider text-navy/50 font-bold leading-tight select-none">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Trust strip */}
          <div className="glass-panel rounded-3xl p-6 text-center">
            <div className="font-mono text-[9px] uppercase tracking-widest text-navy/40 font-bold mb-2">
              Our Commitment
            </div>
            <p className="font-sans text-xs text-navy/60 leading-relaxed">
              You own 100% of the code, data, and accounts. No lock-in, ever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
