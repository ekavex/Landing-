import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Elegant counter progress count up
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Organic progress increments
        const increment = Math.floor(Math.random() * 6) + 2;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Exit only when BOTH progress is 100% and video is fully played (with robust fallback)
  useEffect(() => {
    if (progress === 100) {
      if (!videoLoaded || videoEnded) {
        const timer = setTimeout(() => {
          setIsExiting(true);
          setTimeout(onComplete, 800); // Allow exit animations to finish
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [progress, videoLoaded, videoEnded, onComplete]);

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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFDF6]"
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
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex items-center justify-center border border-navy/10 bg-[#FFFDF6] shadow-lg shadow-navy/5"
            >
              {/* Logo Video Player — Plays once to completion */}
              <video
                src="/logo_animation.mp4"
                autoPlay
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-110 select-none pointer-events-none"
                onLoadedData={() => setVideoLoaded(true)}
                onEnded={() => setVideoEnded(true)}
              />

              {/* High-fidelity CSS 3x3 Dot Grid fallback if video hasn't loaded */}
              {!videoLoaded && (
                <div className="grid grid-cols-3 gap-3">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: (i % 3) * 0.15 + Math.floor(i / 3) * 0.15,
                        ease: 'easeInOut',
                      }}
                      className="w-3.5 h-3.5 rounded-full bg-coral"
                    />
                  ))}
                </div>
              )}
            </motion.div>

            {/* Glowing monocapped tags */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 mb-2 font-mono text-[9px] uppercase tracking-[0.25em] text-coral font-bold"
            >
              System Initialization
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-heading text-lg font-black tracking-tight text-navy"
            >
              ECAVEX DIGITAL CORE
            </motion.div>

            {/* Percentage counter */}
            <motion.div 
              className="mt-6 font-mono text-3xl font-light text-navy/80 tabular-nums flex items-baseline justify-center"
            >
              <span className="tracking-tight">{progress}</span>
              <span className="text-coral text-base font-black ml-0.5">%</span>
            </motion.div>

            {/* Progress line */}
            <div className="w-40 h-[2px] bg-navy/5 mt-4 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-coral"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Fixed Footer text relative to the screen, NOT the content block, to avoid overlaps */}
          <div className="absolute bottom-10 left-0 right-0 text-center font-mono text-[9px] text-navy/40 tracking-[0.2em] pointer-events-none uppercase">
            Taste & Digital Craftsmanship
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
