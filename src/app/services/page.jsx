'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  ChevronRight, CheckCircle2,
  Code, Cpu, Brain, Layers,
  Smartphone, Shield, Monitor,
  Database, TrendingUp
} from 'lucide-react';

import { servicesData, servicesHeader } from '../../data/servicesData';

const iconMap = { Code, Cpu, Brain, Layers, Smartphone, Shield, Monitor, Database, TrendingUp };

export default function ServicesPage() {
  const router = useRouter();

  const handleNavigate = (view) => {
    const targetPath = view === 'home' ? '/' : `/${view}`;
    router.push(targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <motion.div key="services" {...pageTransition}>
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Services Page Editorial Hero */}
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

        {/* Alternating Service Decks */}
        <div className="space-y-24">
          {servicesData.map((svc, index) => {
            const IconComponent = iconMap[svc.iconName];
            const isEven = index % 2 === 0;

            return (
              <div 
                key={svc.num} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Text side */}
                <div className={`lg:col-span-7 space-y-6 ${
                  isEven ? 'order-1' : 'order-1 lg:order-2'
                }`}>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-coral font-bold">{svc.num} / SERVICE</span>
                    <div className="p-2 rounded-xl bg-navy/5 text-navy">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-3xl font-black text-navy">{svc.title}</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-mono text-[9px] uppercase tracking-widest text-navy/40 mb-1">Core Problem</h4>
                      <p className="font-sans text-sm text-navy/70 leading-relaxed">{svc.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-mono text-[9px] uppercase tracking-widest text-navy/40 mb-1">Our Engineering Approach</h4>
                      <p className="font-sans text-sm text-navy/70 leading-relaxed">{svc.benefit}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4">
                    {svc.tech.map((t) => (
                      <span key={t} className="font-mono text-[9px] bg-navy text-alabaster px-3 py-1 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>

                {/* visual box side */}
                <div className={`lg:col-span-5 ${
                  isEven ? 'order-2' : 'order-2 lg:order-1'
                }`}>
                  <div className="h-70 bg-navy/3 border border-navy/5 rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden relative glass-panel-heavy">
                    <div className="absolute inset-0 bg-linear-to-tr from-coral/5 to-transparent pointer-events-none" />
                    <div className="font-mono text-[9px] uppercase tracking-wider text-navy/40">SYSTEM RUNTIME OK</div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-coral" />
                        <span className="font-heading text-xs font-bold text-navy">Agile QA Audited</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-coral" />
                        <span className="font-heading text-xs font-bold text-navy">Premium Micro-interactions</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleNavigate('contact')}
                      className="flex items-center gap-1.5 font-heading text-xs font-black uppercase tracking-wider text-coral"
                    >
                      <span>Request Deep Brief</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}
