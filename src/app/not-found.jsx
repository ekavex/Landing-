"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F5F0] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(rgba(30,42,68,.03) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Decorative coral blob */}
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-125
          h-125
          bg-[#FF6F61]/8
          blur-3xl
          rounded-full
          -z-10
        "
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={60}
            priority
            className="object-contain"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Large ghosted 404 */}
          <h1 className="text-[140px] md:text-[200px] font-bold tracking-tight text-[#1E2A44]/10 leading-none">
            404
          </h1>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E2A44] -mt-10 md:-mt-15 mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="max-w-lg mx-auto mt-4 text-[#6B7280] leading-relaxed text-lg">
            The page you're looking for may have been moved,
            deleted, or never existed. Let's get you back to
            something useful.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Link href="/">
              <motion.button
                whileHover={{ y: -2 }}
                className="
                  bg-[#FF6F61]
                  text-white
                  px-8 py-4
                  rounded-xl
                  font-medium
                  hover:shadow-lg
                  hover:-translate-y-1
                  transition-all
                  w-full sm:w-auto
                "
              >
                Back to Home
              </motion.button>
            </Link>
            
            <Link href="/contact">
              <motion.button
                whileHover={{ y: -2 }}
                className="
                  border
                  border-[#1E2A44]/15
                  text-[#1E2A44]
                  px-8 py-4
                  rounded-xl
                  font-medium
                  hover:bg-white
                  transition-all
                  w-full sm:w-auto
                "
              >
                Contact Us
              </motion.button>
            </Link>
          </div>

          {/* Footer help text */}
          <p className="text-sm text-gray-500 mt-16">
            Need help? Reach out through our contact page and
            we'll assist you.
          </p>
        </motion.div>
      </div>
    </div>
  );
}