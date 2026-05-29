'use client';

import { motion } from 'framer-motion';
import { User, FileText } from 'lucide-react';
import Link from 'next/link';

export default function AuthorBio({ author }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel rounded-[2.5rem] p-8 md:p-10 my-16 flex flex-col sm:flex-row gap-6 items-start"
    >
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center shrink-0">
        <User className="w-7 h-7 text-alabaster/80" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="font-mono text-[9px] uppercase tracking-widest text-navy/40 mb-1">Author</div>
        <Link href={`/blog/author/${author.slug}`}>
          <h3 className="font-heading text-xl font-black text-navy hover:text-coral transition-colors mb-0.5">
            {author.name}
          </h3>
        </Link>
        <div className="font-mono text-[10px] text-coral font-bold mb-4">{author.role}</div>
        <p className="font-sans text-sm text-navy/70 leading-relaxed max-w-xl">{author.bio}</p>
      </div>

      {/* Post count */}
      <Link
        href={`/blog/author/${author.slug}`}
        className="flex items-center gap-2 shrink-0 font-mono text-[10px] uppercase tracking-widest text-navy/40 hover:text-coral transition-colors"
      >
        <FileText className="w-3.5 h-3.5" />
        <span>{author.postCount} Posts</span>
      </Link>
    </motion.div>
  );
}
