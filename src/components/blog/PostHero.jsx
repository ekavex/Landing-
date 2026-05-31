'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';

export default function PostHero({ post, author }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto pt-4 pb-12">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-navy/40 mb-8"
      >
        <Link href="/blog" className="hover:text-coral transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-navy/60">{post.category}</span>
      </motion.div>

      {/* Category badge */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className="mb-5"
      >
        <span className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold bg-coral/10 px-3 py-1.5 rounded-full">
          {post.category}
        </span>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-navy leading-[1.05] max-w-4xl mb-8"
      >
        {post.title}
      </motion.h1>

      {/* Meta row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap items-center gap-5 font-mono text-[10px] text-navy/50 mb-10 pb-10 border-b border-navy/8"
      >
        <Link
          href={`/blog/author/${post.authorSlug}`}
          className="flex items-center gap-1.5 hover:text-coral transition-colors group"
        >
          <div className="w-6 h-6 rounded-full bg-navy flex items-center justify-center shrink-0">
            <User className="w-3 h-3 text-alabaster" />
          </div>
          <span className="font-bold text-navy group-hover:text-coral transition-colors">
            {author.name}
          </span>
        </Link>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5" />
          <span>{post.date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5" />
          <span>{post.readTime}</span>
        </div>
      </motion.div>

      {/* Hero image placeholder with parallax */}
    <div
      ref={heroRef}
      className="
        overflow-hidden
        rounded-[1.75rem] md:rounded-[2.5rem]
        relative
        min-h-70
        sm:min-h-85
        md:min-h-105
        lg:aspect-16/7
      "
    >
      <motion.div
        style={{ y: imageY }}
        className={`
          absolute inset-0
          bg-linear-to-tr ${post.heroAccent}
          flex items-center justify-center
          px-5 sm:px-8 md:px-12
          py-8 md:py-12
        `}
      >
        <div className="w-full max-w-4xl text-center">
          <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.25em] text-alabaster/50 mb-3 md:mb-5">
            Featured Post
          </div>

          <p
            className="
              font-heading
              text-lg
              sm:text-2xl
              md:text-4xl
              lg:text-5xl
              font-black
              text-alabaster/90
              leading-tight
              wrap-break-words
              max-w-3xl
              mx-auto
            "
          >
            {post.summary}
          </p>
        </div>

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-navy/40 pointer-events-none" />
      </motion.div>
    </div>

    </section>
  );
}
