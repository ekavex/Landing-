'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Portfolio from '../../components/Portfolio';

export default function PortfolioPage() {
  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <motion.div key="portfolio" {...pageTransition}>
      <Portfolio />

      {/* Bottom CTA */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto border-t border-navy/10 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-black text-navy tracking-tight mb-4">
          Want Results Like These?
        </h2>
        <p className="font-sans text-navy/70 text-base md:text-lg max-w-2xl mx-auto mb-8">
          Every project starts with a free strategy call. Tell us your challenge and we'll tell you exactly how we'd solve it.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-navy hover:bg-coral text-alabaster px-8 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-tight transition-all duration-300 hover:-translate-y-0.5"
        >
          Start Your Project
          <ChevronRight className="w-4 h-4" />
        </Link>
      </section>
    </motion.div>
  );
}
