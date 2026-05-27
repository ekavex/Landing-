"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { preloaderData } from "../data/commonData";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const videoRef = useRef(null);
  const ANIMATION_DURATION = 3500;

  useEffect(() => {
    const startTime = performance.now();

    const video = videoRef.current;
    if (video) {
      video.playbackRate = 2.5; // ⚡ speed up video (adjust if needed)
      video.play().catch(() => {});
    }

    const tick = () => {
      const elapsed = performance.now() - startTime;
      const rawProgress = (elapsed / ANIMATION_DURATION) * 100;

      const currentProgress = Math.min(100, Math.floor(rawProgress));
      setProgress(currentProgress);

      if (currentProgress < 100) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 700);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -80,
            transition: { duration: 0.6 },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFDF6]"
        >
          {/* Background */}
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-20">
            <div className="border-r border-navy/5 h-full" />
            <div className="border-r border-navy/5 h-full" />
            <div className="h-full" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center px-6">
            
            {/* VIDEO ONLY (no fallback animation) */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-navy/10 shadow-lg">
              <video
                ref={videoRef}
                src="/logo_animation.mp4"
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover scale-110"
              />
            </div>

            {/* Tagline */}
            <div className="mt-8 font-mono text-[9px] uppercase tracking-[0.25em] text-coral font-bold">
              {preloaderData.tagline}
            </div>

            {/* Brand */}
            <div className="font-heading text-lg font-black text-navy mt-1">
              {preloaderData.brandName}
            </div>

            {/* Percentage */}
            <div className="mt-6 font-mono text-3xl text-navy/80 tabular-nums">
              {progress}<span className="text-coral text-base ml-1">%</span>
            </div>

            {/* Progress bar */}
            <div className="w-40 h-[2px] bg-navy/5 mt-4 rounded-full overflow-hidden">
              <div
                className="h-full bg-coral transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Skip */}
            <button
              onClick={() => {
                setIsExiting(true);
                setTimeout(onComplete, 700);
              }}
              className="mt-8 text-[10px] uppercase tracking-widest text-navy/40 hover:text-coral"
            >
              {preloaderData.skipText}
            </button>
          </div>

          {/* Footer */}
          <div className="absolute bottom-10 w-full text-center font-mono text-[9px] text-navy/40 tracking-[0.2em] uppercase">
            {preloaderData.footerText}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;