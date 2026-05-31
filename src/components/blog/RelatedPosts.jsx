'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="mt-4 mb-16">
      <div className="border-t border-navy/8 pt-12 mb-10">
        <div className="font-mono text-[10px] uppercase tracking-widest text-navy/40 font-bold mb-2">
          Continue Reading
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-black text-navy">
          Related Articles
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="glass-panel bg-alabaster rounded-4xl p-8 bento-card-hover flex-col justify-between min-h-56 cursor-pointer group block"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-navy/60 font-bold bg-navy/5 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-navy/40">{post.readTime}</span>
                </div>
                <h3 className="font-heading text-base font-black text-navy group-hover:text-coral transition-colors leading-snug">
                  {post.title}
                </h3>
              </div>
              <div className="flex items-center justify-between border-t border-navy/5 pt-5 mt-5">
                <span className="font-mono text-[10px] font-bold text-navy/50">{post.date}</span>
                <ArrowRight className="w-4 h-4 text-navy/40 group-hover:text-coral group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
