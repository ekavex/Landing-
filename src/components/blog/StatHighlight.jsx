'use client';

import { motion } from 'framer-motion';

export default function StatHighlight({ value, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-panel rounded-[2.5rem] p-8 my-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
    >
      <span className="font-heading text-5xl md:text-6xl font-black text-coral shrink-0 leading-none">
        {value}
      </span>
      <span className="font-sans text-base text-navy/70 leading-relaxed max-w-sm">
        {label}
      </span>
    </motion.div>
  );
}
