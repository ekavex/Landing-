"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { ctaSectionData } from '../data/homeData';

const CTASection = () => {
  const router = useRouter();

  return (
    <section className="py-16 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto bg-navy rounded-[2.5rem] px-8 md:px-16 py-16 text-center relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-coral/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-black text-alabaster leading-[1.1] mb-6 max-w-3xl mx-auto"
          >
            {ctaSectionData.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-alabaster/60 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {ctaSectionData.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => router.push('/contact')}
              className="group relative overflow-hidden flex items-center gap-2 bg-coral text-alabaster font-heading text-sm font-bold px-8 py-4 rounded-full transition-all duration-300 hover:bg-coral/90 hover:-translate-y-0.5 shadow-lg shadow-coral/25"
            >
              <span>{ctaSectionData.primaryCta}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => router.push('/services')}
              className="flex items-center gap-2 bg-transparent border border-alabaster/20 hover:border-coral/50 text-alabaster font-heading text-sm font-bold px-8 py-4 rounded-full transition-all duration-300 hover:text-coral"
            >
              {ctaSectionData.secondaryCta}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
