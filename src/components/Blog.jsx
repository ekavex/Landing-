"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Mail, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { blogPosts, blogHeader, blogNewsletter, blogCategories, blogLeadMagnet } from '../data/blogData';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const router = useRouter();

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const featured = blogPosts.find(p => p.isFeatured);
  const allGridPosts = blogPosts.filter(p => !p.isFeatured);
  const gridPosts = activeCategory === 'All'
    ? allGridPosts
    : allGridPosts.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="border-b border-navy/10 pb-8 mb-12">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3">
          {blogHeader.subtitle}
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-navy leading-[1.05]">
          {blogHeader.title}
        </h1>
        <p className="font-sans text-navy/60 text-base md:text-lg mt-4 max-w-2xl">
          {blogHeader.description}
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-12">
        {blogCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`relative px-4 py-2 rounded-full font-heading text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
              activeCategory === cat
                ? 'bg-coral text-alabaster shadow-md shadow-coral/20'
                : 'bg-navy/5 text-navy/60 hover:text-navy hover:bg-navy/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {featured && activeCategory === 'All' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-[2.5rem] p-8 md:p-12 mb-12 bg-alabaster/40 bento-card-hover grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer group"
        >
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold bg-coral/10 px-3 py-1 rounded-full">
                Featured / {featured.category}
              </span>
              <span className="font-mono text-[10px] text-navy/40">{featured.readTime}</span>
            </div>

            <h2 className="font-heading text-2xl md:text-4xl font-black text-navy group-hover:text-coral transition-colors leading-tight mb-4">
              {featured.title}
            </h2>

            <p className="font-sans text-sm md:text-base text-navy/70 leading-relaxed mb-6">
              {featured.summary}
            </p>

            <div className="flex flex-wrap items-center gap-6 font-mono text-[10px] text-navy/50 border-t border-navy/5 pt-6">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>By {featured.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{featured.date}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 h-[280px] bg-navy rounded-3xl overflow-hidden flex flex-col justify-between p-8 text-alabaster shadow-xl relative group-hover:scale-[1.01] transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-coral/10 to-transparent pointer-events-none" />
            <div className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold">Latest Insight</div>
            <div className="font-heading text-lg font-bold leading-normal text-alabaster/90">
              "How AI automation is helping businesses save hours of manual work every week."
            </div>
            <div className="flex items-center gap-2 text-coral font-mono text-[10px] font-bold tracking-widest">
              <span>READ ARTICLE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid Posts */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <AnimatePresence mode="popLayout">
          {gridPosts.map((post) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              key={post.id}
              className="glass-panel rounded-[2rem] p-8 bg-alabaster/40 bento-card-hover flex flex-col justify-between min-h-[340px] cursor-pointer group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold bg-coral/10 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="font-mono text-[10px] text-navy/40">{post.readTime}</span>
                </div>

                <h3 className="font-heading text-lg font-black text-navy group-hover:text-coral transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>
                <p className="font-sans text-xs text-navy/60 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-navy/5 pt-6 mt-6">
                <span className="font-mono text-[10px] text-navy/40">By {post.author}</span>
                <div className="flex items-center gap-1 font-heading text-xs font-bold text-navy/40 group-hover:text-coral transition-all">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lead Magnet CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel rounded-[2.5rem] p-8 md:p-12 mb-16 bg-alabaster/60 border border-coral/15 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="flex items-start gap-4 max-w-xl">
          <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center text-coral shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-black text-navy mb-2">{blogLeadMagnet.title}</h3>
            <p className="font-sans text-sm text-navy/60 leading-relaxed">{blogLeadMagnet.description}</p>
          </div>
        </div>
        <button
          onClick={() => router.push('/contact')}
          className="shrink-0 flex items-center gap-2 bg-coral text-alabaster font-heading text-sm font-bold px-7 py-4 rounded-full transition-all duration-300 hover:bg-coral/90 hover:-translate-y-0.5 shadow-lg shadow-coral/20 whitespace-nowrap"
        >
          <span>{blogLeadMagnet.ctaText}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </motion.div>

      {/* Newsletter Opt-in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-panel-heavy rounded-[2.5rem] p-8 md:p-12 text-center max-w-3xl mx-auto border-navy/10 relative overflow-hidden bg-alabaster shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl pointer-events-none" />

        <h3 className="font-heading text-2xl md:text-3xl font-black text-navy mb-3">
          {blogNewsletter.title}
        </h3>
        <p className="font-sans text-sm text-navy/60 max-w-md mx-auto mb-8 leading-relaxed">
          {blogNewsletter.description}
        </p>

        {subscribed ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-heading text-sm font-bold text-coral flex items-center justify-center gap-2"
          >
            <span>{blogNewsletter.successMessage}</span>
          </motion.div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="grow px-5 py-3 rounded-2xl border border-navy/8 bg-alabaster/60 text-navy font-sans text-sm outline-none focus:border-coral"
            />
            <button
              type="submit"
              className="bg-navy hover:bg-coral text-alabaster font-heading text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-2xl transition-colors duration-300"
            >
              {blogNewsletter.buttonText}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Blog;
