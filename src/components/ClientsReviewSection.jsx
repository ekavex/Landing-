"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { clientsReviewHeader, clientReviews } from '../data/reviewsData';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";


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
  const swiperRef = useRef(null);
  return (
    <section className="py-16 px-6 md:px-12 bg-navy text-alabaster">

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
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        spaceBetween={32}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="max-w-6xl mx-auto pt-12 pb-8 px-4"
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={review.name}>
            <motion.article
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              viewport={{ once: true }}

              className={`h-72 group relative flex flex-col items-center text-center rounded-3xl pt-14 pb-8 px-6 cursor-pointer transition-all duration-300 ${review.featured
                ? "bg-coral text-white shadow-2xl shadow-coral/20"
                : "bg-white/5 border border-alabaster/10 backdrop-blur-md"
                }`}
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-white/10 via-transparent to-coral/10 pointer-events-none" />

              {/* Avatar */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold border-4 transition-transform duration-300 group-hover:scale-110 ${review.featured ? "border-coral" : "border-navy"
                    }`}
                  style={{
                    background: review.featured
                      ? "rgba(255,255,255,0.18)"
                      : "rgba(255,255,255,0.07)",
                  }}
                >
                  <span className="font-heading text-alabaster">
                    {review.initials}
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-3 relative z-10">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${review.featured ? "text-white" : "text-coral"
                      }`}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Name */}
              <p
                className={`font-heading text-lg font-black mb-0.5 relative z-10 ${review.featured ? "text-white" : "text-alabaster"
                  }`}
              >
                {review.name}
              </p>

              {/* Title */}
              <p
                className={`font-sans text-xs mb-5 relative z-10 ${review.featured ? "text-white/70" : "text-alabaster/50"
                  }`}
              >
                {review.title}, {review.company}
              </p>

              {/* Quote */}
              <p
                className={`font-sans text-sm leading-relaxed max-h-24 pr-2 relative z-10 ${review.featured ? "text-white/85" : "text-alabaster/70"
                  }`}
              >
                “{review.quote}”
              </p>
            </motion.article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-coral hover:border-coral transition-all flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 text-alabaster" />
        </button>

        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-coral hover:border-coral transition-all flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 text-alabaster" />
        </button>
      </div>

    </section>
  );
};

export default ClientsReviewSection;