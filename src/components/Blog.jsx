"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight, Mail } from 'lucide-react';

import { blogPosts, blogHeader, blogNewsletter } from '../data/blogData';

const Blog = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  const featured = blogPosts.find(p => p.isFeatured);
  const gridPosts = blogPosts.filter(p => !p.isFeatured);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="border-b border-navy/10 pb-8 mb-16">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3">
          {blogHeader.subtitle}
        </div>
        <h2 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-navy leading-[1.05]">
          {blogHeader.title}
        </h2>
        <p className="font-sans text-navy/60 text-base md:text-lg mt-4 max-w-2xl">
          {blogHeader.description}
        </p>
      </div>

      {/* Featured Post Spotlight */}
      {featured && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-[2.5rem] p-8 md:p-12 mb-16 bg-alabaster/40 bento-card-hover grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-pointer group"
        >
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold bg-coral/10 px-3 py-1 rounded-full">
                Spotlight / {featured.category}
              </span>
              <span className="font-mono text-[10px] text-navy/40">{featured.readTime}</span>
            </div>

            <h3 className="font-heading text-2xl md:text-4xl font-black text-navy group-hover:text-coral transition-colors leading-tight mb-4">
              {featured.title}
            </h3>

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
            <div className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold">SYSTEM ACTIVE</div>
            <div className="font-heading text-lg font-bold leading-normal text-alabaster/90">
              "We synthesize AI frameworks to elevate core operational throughput."
            </div>
            <div className="flex items-center gap-2 text-coral font-mono text-[10px] font-bold tracking-widest">
              <span>DECONSTRUCT INSIGHT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {gridPosts.map((post) => (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            key={post.id}
            className="glass-panel rounded-[2rem] p-8 bg-alabaster/40 bento-card-hover flex flex-col justify-between min-h-[340px] cursor-pointer group"
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="font-mono text-[9px] uppercase tracking-widest text-navy/40 font-bold bg-navy/5 px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>
                <span className="font-mono text-[10px] text-navy/40">{post.readTime}</span>
              </div>

              <h4 className="font-heading text-lg font-black text-navy group-hover:text-coral transition-colors mb-3 leading-snug">
                {post.title}
              </h4>
              <p className="font-sans text-xs text-navy/60 leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-navy/5 pt-6 mt-6">
              <span className="font-mono text-[10px] text-navy/40">By {post.author}</span>
              <ArrowRight className="w-4 h-4 text-navy/40 group-hover:text-coral group-hover:translate-x-1 transition-all" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Opt-in Box */}
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
              className="grow px-5 py-3 rounded-2xl border border-navy/8 bg-alabaster/60 text-navy font-sans text-xs outline-none focus:border-coral"
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
