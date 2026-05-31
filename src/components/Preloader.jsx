"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { preloaderData } from '../data/commonData';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduceMotion ? 700 : 1500;
    const start = performance.now();
    let frameId = 0;

    const tick = () => {
      const elapsed = performance.now() - start;
      const next = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(next);

      if (next < 100) frameId = requestAnimationFrame(tick);
      else setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 300);
      }, 120);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-alabaster"
        >
          {/* Subtle editorial line layout grids in background */}
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-20">
            <div className="border-r border-navy/5 h-full"></div>
            <div className="border-r border-navy/5 h-full"></div>
            <div className="h-full"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            {/* Logo Mask Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex items-center justify-center border border-navy/10 bg-alabaster shadow-lg shadow-navy/5"
            >
              <Image
                src="/logo.png"
                alt="Ekavex logo"
                fill
                priority
                className="object-contain p-5"
              />
            </motion.div>

            {/* Glowing monocapped tags */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 mb-2 font-mono text-[9px] uppercase tracking-[0.25em] text-coral font-bold"
            >
              {preloaderData.tagline}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-heading text-lg font-black tracking-tight text-navy"
            >
              {preloaderData.brandName}
            </motion.div>

            {/* Percentage counter */}
            <motion.div 
              className="mt-6 font-mono text-3xl font-light text-navy/80 tabular-nums flex items-baseline justify-center"
            >
              <span className="tracking-tight">{progress}</span>
              <span className="text-coral text-base font-black ml-0.5">%</span>
            </motion.div>

            {/* Progress line */}
            <div className="w-40 h-0.5 bg-navy/5 mt-4 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-coral"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            
            {/* Skip Button */}
            <button
              onClick={() => {
                setIsExiting(true);
                setTimeout(onComplete, 800);
              }}
              className="mt-8 px-4 py-2 text-[10px] font-mono tracking-widest uppercase text-navy/90 hover:text-coral transition-colors duration-300"
            >
              {preloaderData.skipText}
            </button>
          </div>

          {/* Fixed Footer text relative to the screen, NOT the content block, to avoid overlaps */}
          <div className="absolute bottom-10 left-0 right-0 text-center font-mono text-[9px] text-navy/90 tracking-[0.2em] pointer-events-none uppercase">
            {preloaderData.footerText}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
