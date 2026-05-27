'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CheckCircle2, ChevronRight, Code, Cpu, Brain, Layers, Smartphone, TrendingUp, Database, Monitor } from 'lucide-react';

import { servicesData, servicesHeader, industryMappingData } from '../../data/servicesData';

const iconMap = { Code, Cpu, Brain, Layers, Smartphone, TrendingUp, Database, Monitor };

export default function ServicesPage() {
  const router = useRouter();

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <motion.div key="services" {...pageTransition}>
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero */}
        <div className="border-b border-navy/10 pb-8 mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3">
            {servicesHeader.subtitle}
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-navy leading-[1.05]">
            {servicesHeader.title}
          </h1>
          <p className="font-sans text-navy/60 text-base md:text-lg mt-4 max-w-2xl">
            {servicesHeader.description}
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-16 mb-24">
          {servicesData.map((svc, index) => {
            const IconComponent = iconMap[svc.iconName];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center`}
              >
                {/* Text side */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-coral font-bold">{svc.num}</span>
                    {IconComponent && (
                      <div className="p-2 rounded-xl bg-coral/10 text-coral">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  <h2 className="font-heading text-2xl md:text-3xl font-black text-navy">{svc.title}</h2>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-[9px] uppercase tracking-widest text-navy/40 mb-1">The Problem</h4>
                      <p className="font-sans text-sm text-navy/70 leading-relaxed">{svc.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-[9px] uppercase tracking-widest text-navy/40 mb-1">What We Build</h4>
                      <p className="font-sans text-sm text-navy/70 leading-relaxed">{svc.benefit}</p>
                    </div>
                  </div>

                  {svc.features && (
                    <div className="flex flex-wrap gap-2">
                      {svc.features.map((f) => (
                        <span key={f} className="font-sans text-xs bg-alabaster/60 border border-navy/8 text-navy/60 px-3 py-1 rounded-full">
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {svc.tech.map((t) => (
                      <span key={t} className="font-mono text-[9px] bg-navy text-alabaster px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Visual box */}
                <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className="h-[260px] border border-navy/8 rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden relative glass-panel-heavy">
                    <div className="absolute inset-0 bg-gradient-to-tr from-coral/5 to-transparent pointer-events-none" />
                    <div className="font-mono text-[9px] uppercase tracking-wider text-navy/40">Ready to Build</div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-coral" />
                        <span className="font-sans text-xs text-navy/80">Custom to your business needs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-coral" />
                        <span className="font-sans text-xs text-navy/80">Delivered with full transparency</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-coral" />
                        <span className="font-sans text-xs text-navy/80">Post-launch support included</span>
                      </div>
                    </div>
                    <button
                      onClick={() => router.push('/contact')}
                      className="flex items-center gap-1.5 font-heading text-xs font-black uppercase tracking-wider text-coral hover:gap-3 transition-all"
                    >
                      <span>Get a Free Consultation</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industry Solution Mapping */}
        <div className="border-t border-navy/8 pt-16 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3">Solutions by Industry</div>
            <h2 className="font-heading text-3xl md:text-4xl font-black tracking-tight text-navy leading-[1.1]">
              Built for Your Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryMappingData.map((item, i) => (
              <motion.div
                key={item.industry}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-panel rounded-2xl p-6 bg-alabaster/40 bento-card-hover group"
              >
                <h3 className="font-heading text-sm font-black text-navy mb-1 group-hover:text-coral transition-colors">
                  {item.industry}
                </h3>
                <p className="font-sans text-xs text-navy/60 leading-relaxed">{item.solution}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-[2.5rem] p-10 md:p-14 text-center bg-alabaster/60 border border-navy/8"
        >
          <h2 className="font-heading text-2xl md:text-3xl font-black text-navy mb-3">
            Not sure what your business needs?
          </h2>
          <p className="font-sans text-navy/60 text-sm md:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Tell us your workflow and we will suggest the best website, automation, AI, or CRM solution for your business.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="inline-flex items-center gap-2 bg-coral text-alabaster font-heading text-sm font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-coral/90 hover:-translate-y-0.5 shadow-lg shadow-coral/20"
          >
            <span>Get Free Consultation</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
}
