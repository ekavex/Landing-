"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { ctaSectionData } from '../data/homeData';

const CTASection = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-screen bg-navy flex items-center justify-center px-6 md:px-12 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-100 bg-coral/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-125 h-125 bg-coral/5 rounded-full blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-alabaster leading-[0.95] tracking-[-0.04em] mb-8"
        >
          {ctaSectionData.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-lg md:text-xl text-alabaster/60 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {ctaSectionData.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={() => router.push('/contact')}
            className="group flex items-center gap-3 bg-coral text-alabaster font-heading font-bold px-10 py-5 rounded-full hover:scale-105 transition-all duration-300 shadow-xl shadow-coral/20"
          >
            <span>{ctaSectionData.primaryCta}</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => router.push('/services')}
            className="border border-alabaster/15 hover:border-coral/60 text-alabaster hover:text-coral px-10 py-5 rounded-full font-heading font-bold transition-all duration-300"
          >
            {ctaSectionData.secondaryCta}
          </button>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default CTASection;
