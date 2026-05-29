'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServiceCTA({ title }) {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-navy rounded-[2.5rem] p-10 md:p-14 text-center relative overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-linear-to-tr from-coral/10 via-transparent to-white/5 pointer-events-none" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-24 w-80 h-80 bg-coral/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="font-mono text-[10px] uppercase tracking-widest text-coral font-bold mb-4">
            Ready to Start?
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-black text-alabaster leading-tight text-balance mb-3">
            Let&apos;s build your {title} solution
          </h2>
          <p className="font-sans text-sm text-alabaster/60 max-w-md mx-auto mb-8 leading-relaxed">
            Free 30-minute strategy call. We map your problem, propose a solution, and give you a timeline and cost estimate — no commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-coral hover:bg-coral/85 text-white font-heading text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-2xl transition-colors duration-300 group shadow-lg shadow-coral/25"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="font-mono text-[9px] text-alabaster/30 mt-4 uppercase tracking-widest">
            No spam. No pressure. 100% free.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
