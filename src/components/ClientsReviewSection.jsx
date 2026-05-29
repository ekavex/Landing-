"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { clientsReviewHeader, clientReviews } from '../data/reviewsData';

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

const ClientsReviewSection = () => {
  const reviews = clientReviews.map((review) => ({
    ...review,
    initials: review.initials || getInitials(review.name),
    featured: review.featured || false,
  }));
  return (
    <section className="py-24 px-6 md:px-12 bg-navy text-alabaster">

      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-20">
        <div className="font-mono text-xs uppercase tracking-[0.22em] text-coral font-bold mb-3">
          {clientsReviewHeader.subtitle}
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight leading-[1.05] text-alabaster">
          {clientsReviewHeader.title}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto font-sans text-sm md:text-base text-alabaster/70 leading-relaxed">
          {clientsReviewHeader.description}
        </p>
      </div>

      {/* Cards Grid — extra top padding so avatars have room to float above */}
      <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto items-start pt-12">
        {reviews.map((review, idx) => (
          <motion.article
            key={review.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.14, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`relative flex flex-col items-center text-center rounded-3xl pt-14 pb-8 px-6 ${
              review.featured
                ? 'bg-coral text-white shadow-2xl shadow-coral/20'
                : 'bg-white/5 border border-alabaster/10 backdrop-blur-md'
            }`}
          >
            {/* Floating Avatar */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div
                className={`w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold border-4 ${
                  review.featured
                    ? 'border-coral'
                    : 'border-navy'
                }`}
                style={{
                  background: review.featured
                    ? 'rgba(255,255,255,0.18)'
                    : 'rgba(255,255,255,0.07)',
                }}
              >
                <span className="font-heading text-alabaster">{review.initials}</span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${review.featured ? 'text-white' : 'text-coral'}`}
                  fill="currentColor"
                />
              ))}
            </div>

            {/* Name */}
            <p className={`font-heading text-lg font-black mb-0.5 ${review.featured ? 'text-white' : 'text-alabaster'}`}>
              {review.name}
            </p>

            {/* Title */}
            <p className={`font-sans text-xs mb-5 ${review.featured ? 'text-white/70' : 'text-alabaster/50'}`}>
              {review.title}, {review.company}
            </p>

            {/* Quote */}
            <p className={`font-sans text-sm leading-relaxed ${review.featured ? 'text-white/85' : 'text-alabaster/70'}`}>
              “{review.quote}”
            </p>
          </motion.article>
        ))}
      </div>

    </section>
  );
};

export default ClientsReviewSection;