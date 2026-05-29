'use client';

import { motion } from 'framer-motion';

export default function HowItWorks({ processSteps }) {
  return (
    <section id="how-it-works" className="py-16 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-coral font-bold mb-3">
          The Process
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-navy text-balance">
          How it works
        </h2>
        <p className="font-sans text-sm text-navy/60 mt-2 max-w-md">
          Three clear steps. You always know what is happening and what comes next.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative">
        {/* Connector line — desktop only */}
        <div className="hidden lg:block absolute top-10 left-[calc(16.67%-1px)] right-[calc(16.67%-1px)] h-px bg-navy/8 z-0" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Step number bubble */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-coral flex items-center justify-center shrink-0 shadow-lg shadow-coral/20">
                  <span className="font-mono text-[11px] font-bold text-white">{step.step}</span>
                </div>
                <div className="h-px flex-1 bg-navy/8 lg:hidden" />
              </div>

              <h3 className="font-heading text-lg font-black text-navy mb-5">{step.title}</h3>

              <div className="space-y-4">
                {/* What we do */}
                <div className="glass-panel rounded-2xl p-4 border border-navy/6">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold mb-1.5">
                    What we do
                  </div>
                  <p className="font-sans text-xs text-navy/70 leading-relaxed">{step.you}</p>
                </div>

                {/* What you do */}
                <div className="bg-navy/3 rounded-2xl p-4 border border-navy/6">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-navy/40 font-bold mb-1.5">
                    What you do
                  </div>
                  <p className="font-sans text-xs text-navy/70 leading-relaxed">{step.client}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
