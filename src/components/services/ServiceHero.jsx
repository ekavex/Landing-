'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function ServiceHero({ svc }) {
  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-navy/40 mb-10"
      >
        <Link href="/" className="hover:text-coral transition-colors">Home</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/services" className="hover:text-coral transition-colors">Services</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-navy/60">{svc.title}</span>
      </motion.div>

      {/* Hero grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left: headline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-coral font-bold bg-coral/10 px-3 py-1 rounded-full">
              {svc.num} / Service
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-navy leading-[1.05] tracking-tight text-balance mb-5">
            {svc.heroHeadline}
          </h1>

          <p className="font-sans text-base md:text-lg text-navy/70 leading-relaxed max-w-[52ch] mb-8">
            {svc.heroSubtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-navy hover:bg-coral text-alabaster font-heading text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-2xl transition-colors duration-300 group"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-navy/15 text-navy font-heading text-xs font-bold uppercase tracking-widest px-7 py-4 rounded-2xl hover:border-coral hover:text-coral transition-colors duration-300"
            >
              See How It Works ↓
            </a>
          </div>
        </motion.div>

        {/* Right: dark accent card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="lg:col-span-5"
        >
          <div className="bg-navy rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-linear-to-tr from-coral/10 via-transparent to-white/5 pointer-events-none" />
            <div className="absolute -right-12 -top-12 w-40 h-40 bg-coral/8 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold">
                  SYSTEM ACTIVE
                </span>
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400" />
              </div>

              <div className="space-y-3.5 mb-8">
                {svc.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                    <span className="font-heading text-sm font-semibold text-alabaster/90">{f}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/8 pt-6">
                <div className="font-mono text-[9px] uppercase tracking-widest text-white/30 mb-1">Tech Stack</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {svc.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] bg-white/8 text-alabaster/70 px-3 py-1 rounded-full border border-white/8">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
