'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

export default function RelatedServices({ relatedSlugs, currentSlug }) {
  const related = servicesData.filter(
    (s) => relatedSlugs.includes(s.slug) && s.slug !== currentSlug
  );

  if (!related.length) return null;

  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-coral font-bold mb-3">
          Also Consider
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-black text-navy">
          Clients who use this also need
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {related.map((svc, i) => (
          <motion.div
            key={svc.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/services/${svc.slug}`}
              className="glass-panel rounded-3xl p-7 flex flex-col justify-between min-h-44 bento-card-hover group block border border-navy/6 hover:border-coral/20 transition-colors duration-300"
            >
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold mb-3">
                  {svc.num} / Service
                </div>
                <h3 className="font-heading text-lg font-black text-navy group-hover:text-coral transition-colors mb-2">
                  {svc.title}
                </h3>
                <p className="font-sans text-xs text-navy/60 leading-relaxed line-clamp-2">
                  {svc.heroSubtext}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-navy/5 pt-5 mt-5">
                <span className="font-mono text-[10px] font-bold text-navy/40">
                  {svc.features.slice(0, 2).join(' · ')}
                </span>
                <ArrowRight className="w-4 h-4 text-navy/40 group-hover:text-coral group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
