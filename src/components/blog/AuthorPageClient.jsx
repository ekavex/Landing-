'use client';

import { motion } from 'framer-motion';
import { ArrowRight, FileText, User } from 'lucide-react';
import Link from 'next/link';

export default function AuthorPageClient({ author, posts }) {
  return (
    <main className="min-h-screen px-6 md:px-12 py-12 max-w-7xl mx-auto">
      {/* Author hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel rounded-[2.5rem] p-8 md:p-12 mb-16 flex flex-col sm:flex-row gap-8 items-start"
      >
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center shrink-0">
          <User className="w-9 h-9 text-alabaster/70" />
        </div>

        <div className="flex-1">
          <div className="font-mono text-[9px] uppercase tracking-widest text-navy/40 mb-1">
            Author
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-black text-navy mb-1">
            {author.name}
          </h1>
          <div className="font-mono text-[10px] text-coral font-bold uppercase tracking-widest mb-5">
            {author.role}
          </div>
          <p className="font-sans text-base text-navy/70 leading-relaxed max-w-xl mb-6">
            {author.bio}
          </p>
          <div className="flex items-center gap-2 font-mono text-[10px] text-navy/40">
            <FileText className="w-3.5 h-3.5" />
            <span>{author.postCount} published articles</span>
          </div>
        </div>
      </motion.div>

      {/* Posts grid */}
      <div className="border-b border-navy/8 pb-6 mb-10">
        <div className="font-mono text-[10px] uppercase tracking-widest text-navy/40 font-bold mb-1">
          Articles
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-black text-navy">
          All Posts by {author.name}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="glass-panel bg-alabaster rounded-4xl p-8 bento-card-hover flex flex-col justify-between min-h-56 cursor-pointer group block"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-navy/60 font-bold bg-navy/5 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-navy/40">{post.readTime}</span>
                </div>
                <h3 className="font-heading text-base font-black text-navy group-hover:text-coral transition-colors leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="font-sans text-xs text-navy/60 leading-relaxed line-clamp-2">
                  {post.summary}
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-navy/5 pt-5 mt-5">
                <span className="font-mono text-[10px] font-bold text-navy/50">{post.date}</span>
                <ArrowRight className="w-4 h-4 text-navy/40 group-hover:text-coral group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
