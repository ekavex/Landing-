'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight, CheckCircle2,
  Code, Cpu, Brain, Layers,
  Smartphone, Shield, Monitor,
  Database, TrendingUp
} from 'lucide-react';

import { servicesData, servicesHeader } from '../../data/servicesData';

const iconMap = { Code, Cpu, Brain, Layers, Smartphone, Shield, Monitor, Database, TrendingUp };

export default function ServicesClient() {
  const router = useRouter();

  const handleNavigate = (view: string) => {
    const targetPath = view === 'home' ? '/' : `/${view}`;
    router.push(targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
  };

  return (
    <motion.div key="services" {...pageTransition}>
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Services Page Editorial Hero */}
        <div className="border-b border-navy/10 pb-8 mb-16">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3">
            {servicesHeader.subtitle}
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-navy leading-[1.05] text-balance">
            {servicesHeader.title}
          </h1>
          <p className="font-sans text-navy/90 text-base md:text-lg mt-4 max-w-2xl text-pretty">
            {servicesHeader.description}
          </p>
        </div>

        {/* Alternating Service Decks */}
        <div className="space-y-24">
          {servicesData.map((svc, index) => {
            const IconComponent = iconMap[svc.iconName as keyof typeof iconMap];
            const isEven = index % 2 === 0;

            return (
              <div 
                key={svc.num} 
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* Text side - Styled as a premium off-white glass card */}
                <div className={`lg:col-span-7 flex flex-col justify-between bg-navy/3 border border-navy/5 rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 overflow-hidden relative glass-panel-heavy hover:border-coral/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-500 ${
                  isEven ? 'order-1' : 'order-1 lg:order-2'
                }`}>
                
                  <Link href={`/services/${svc.slug}`} className="w-full">
                    {/* Warm beige coral gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-tr from-coral/5 to-transparent pointer-events-none" />

                    <div className="relative z-10 space-y-6">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-coral font-extrabold tracking-wider">{svc.num} / SERVICE</span>
                        <div className="p-2 rounded-xl bg-navy/5 text-navy border border-navy/5 shadow-xs">
                          {IconComponent && <IconComponent className="w-5 h-5" />}
                        </div>
                      </div>

                      <h3 className="font-heading text-3xl md:text-4xl font-black text-navy tracking-tight text-balance">{svc.title}</h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-widest text-navy/90 mb-1.5 font-bold">Core Problem</h4>
                          <p className="font-sans text-base text-navy/70 leading-relaxed max-w-[60ch]">{svc.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-mono text-xs uppercase tracking-widest text-navy/90 mb-1.5 font-bold">Our Engineering Approach</h4>
                          <p className="font-sans text-base text-navy/70 leading-relaxed max-w-[60ch]">{svc.benefit}</p>
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-wrap gap-1.5 pt-6 mt-6 border-t border-navy/5">
                      {svc.tech.map((t) => (
                        <span key={t} className="font-mono text-[10px] bg-navy text-alabaster px-3.5 py-1.5 rounded-full font-semibold select-none hover:scale-105 transition-transform duration-300">{t}</span>
                      ))}
                    </div>
                  </Link>
                </div>

                {/* visual box side - Styled as a premium dark card */}
                <div className={`lg:col-span-5 flex lg:self-center w-full ${
                  isEven ? 'order-2' : 'order-2 lg:order-1'
                }`}>
                  <Link href={`/services/${svc.slug}`} className="w-full">                      
                    <div className="w-full bg-navy border border-white/10 rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative shadow-xl hover:shadow-2xl hover:border-coral/30 hover:scale-[1.01] active:scale-[0.99] transition-all duration-500 group min-h-80">
                      {/* Deep-tech ambient lighting */}
                      <div className="absolute inset-0 bg-linear-to-tr from-coral/10 via-transparent to-white/5 pointer-events-none" />
                      <div className="absolute -right-16 -top-16 w-36 h-36 bg-coral/5 rounded-full blur-3xl group-hover:bg-coral/10 transition-colors duration-500" />
                      
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-coral font-bold">SYSTEM RUNTIME OK</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
                      </div>

                      {/* Dynamic Service Features */}
                      <div className="relative z-10 space-y-4 my-auto">
                        {svc.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-coral shrink-0" />
                            <span className="font-heading text-sm font-semibold text-alabaster/90">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="relative z-10 flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-1.5 font-heading text-sm font-black uppercase tracking-wider text-coral hover:text-coral/80 hover:scale-105 active:scale-95 transition-all duration-300 group/btn">
                          Learn More</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigate('contact');
                          }}
                          className="flex items-center gap-1.5 font-heading text-[11px] font-bold uppercase tracking-wider text-alabaster/50 hover:text-alabaster transition-colors duration-300 cursor-pointer"
                        >
                          Get a Quote
                        </button>
                      </div>
                    </div>
                  </Link> 
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 border-t border-navy/10 pt-16 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="font-sans text-navy/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Book a free 30-minute strategy call. We'll understand your business, recommend the right solution, and give you a clear quote - no commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-navy hover:bg-coral text-alabaster px-8 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-tight transition-all duration-300 hover:-translate-y-0.5"
          >
            Book a Free Strategy Call
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
