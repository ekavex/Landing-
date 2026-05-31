"use client";

import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Cpu, ShieldCheck, Activity } from 'lucide-react';

import { heroData } from '../data/homeData';

// ── SplitReveal helper ──────────────────────────────────────────────
// Breaks a string into individual character nodes that rotate-in on a 3D axis.
// Centered layout friendly.
const SplitReveal = ({ children, className = '', delay = 0 }) => {
  const words = String(children).split(' ');

  return (
    <span
      className={`inline-flex flex-wrap justify-center ${className}`}
      style={{ perspective: '600px' }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-flex whitespace-nowrap"
        >
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, rotateX: 90, y: 20 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{
                delay: delay + (wordIndex * 0.08) + (charIndex * 0.025),
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block origin-bottom"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {char}
            </motion.span>
          ))}

          {/* space between words */}
          <span className="w-[0.3em]" />
        </span>
      ))}
    </span>
  );
};

export default function Hero({ onNavigate }) {
  // Mouse motion values normalised to -0.5 … +0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Elastic spring response matching premium editorial metrics
  const springConfig = { stiffness: 100, damping: 15, mass: 0.8 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    x.set((e.clientX / innerWidth) - 0.5);
    y.set((e.clientY / innerHeight) - 0.5);
  };

  // ── Parallax depth layers ─────────────────────────────────────────
  // Text shifts very gently in cursor direction
  const textParallaxX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const textParallaxY = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);

  // Layer 1 - Left Card (Pulse Monitor): tilts toward cursor + drifts
  const cardLeftX = useTransform(mouseX, [-0.5, 0.5], [45, -45]);
  const cardLeftY = useTransform(mouseY, [-0.5, 0.5], [40, -40]);
  const rotateLeftX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateLeftY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  // Layer 2 - Right Card (Latency Dashboard): drifts inversely + tilts
  const cardRightX = useTransform(mouseX, [-0.5, 0.5], [-40, 40]);
  const cardRightY = useTransform(mouseY, [-0.5, 0.5], [-45, 45]);
  const rotateRightX = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);
  const rotateRightY = useTransform(mouseX, [-0.5, 0.5], [10, -10]);

  // Layer 3 - Badges on Left
  const badgeLeftTopX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
  const badgeLeftTopY = useTransform(mouseY, [-0.5, 0.5], [25, -25]);
  const badgeLeftBottomX = useTransform(mouseX, [-0.5, 0.5], [50, -50]);
  const badgeLeftBottomY = useTransform(mouseY, [-0.5, 0.5], [50, -50]);

  // Layer 4 - Badges on Right
  const badgeRightTopX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const badgeRightTopY = useTransform(mouseY, [-0.5, 0.5], [-25, 25]);
  const badgeRightBottomX = useTransform(mouseX, [-0.5, 0.5], [-50, 50]);
  const badgeRightBottomY = useTransform(mouseY, [-0.5, 0.5], [-50, 50]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative lg:min-h-[calc(100vh-12.5rem)] lg:h-auto min-h-screen w-full overflow-x-hidden px-6 md:px-16 pt-3 pb-12 flex flex-col justify-between items-center select-none z-20"
      style={{ perspective: '1200px' }}
    >
      {/* Decorative ambient spots of light */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-coral/5 rounded-full blur-[110px] pointer-events-none z-10" />
      <div className="absolute bottom-1/3 right-1/10 w-112.5 h-112.5 bg-coral/5 rounded-full blur-[140px] pointer-events-none z-10" />

      {/* ── 3D PARALLAX ENVIRONMENT: FLOATING ELEMENTS (Desktop Only) ── */}
      {/* Positioned strictly in the upper & middle regions to prevent overlaps with value props at the bottom */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">

        {/* 1. Top-Left Badge (AI Workflow Active) */}
        <motion.div
          style={{ x: badgeLeftTopX, y: badgeLeftTopY }}
          className="absolute top-[6%] left-[10%] xl:left-[14%] 2xl:left-[17%]"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="bg-navy rounded-full px-4.5 py-2 border border-alabaster/10 shadow-lg flex items-center space-x-2 backdrop-blur-sm pointer-events-auto"
          >
            <Sparkles className="w-3 h-3 text-coral animate-pulse" />
            <span className="font-mono text-[9px] text-alabaster/90 uppercase tracking-widest font-semibold">
              {heroData.stats.statusNode}
            </span>
          </motion.div>
        </motion.div>


        {/* 3. Bottom-Left Badge (Efficiency metrics) - Positioned safely above value props */}
        <motion.div
          style={{ x: badgeLeftBottomX, y: badgeLeftBottomY }}
          className="absolute top-[56%] left-[8%] xl:left-[11%] 2xl:left-[14%] pointer-events-auto"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            className="bg-alabaster/90 border border-navy/8 rounded-2xl p-4 shadow-lg flex items-center space-x-3 backdrop-blur-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center text-coral shrink-0">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <span className="block font-mono text-[8.5px] uppercase tracking-wider text-navy/90">Projects</span>
              <span className="block font-heading text-sm font-bold text-navy tracking-tight">{heroData.stats.efficiency}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 4. Top-Right Badge (System Sync status) */}
        <motion.div
          style={{ x: badgeRightTopX, y: badgeRightTopY }}
          className="absolute top-[8%] right-[10%] xl:right-[14%] 2xl:right-[17%] pointer-events-auto"
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="bg-alabaster/90 border border-navy/6 rounded-full px-4.5 py-2 shadow-lg flex items-center space-x-2 backdrop-blur-sm"
          >
            <Activity className="w-3 h-3 text-coral animate-pulse" />
            <span className="font-mono text-[9px] text-navy/70 uppercase tracking-widest font-semibold">
              10+ Projects Delivered
            </span>
          </motion.div>
        </motion.div>


        {/* 6. Bottom-Right Badge (Trust Stats) - Positioned safely above value props */}
        <motion.div
          style={{ x: badgeRightBottomX, y: badgeRightBottomY }}
          className="absolute top-[55%] right-[8%] xl:right-[11%] 2xl:right-[14%] pointer-events-auto"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            className="bg-navy border border-alabaster/10 rounded-2xl p-4 shadow-lg flex items-center space-x-3 backdrop-blur-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-alabaster/10 flex items-center justify-center text-coral shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div className="text-left">
              <span className="block font-mono text-[8.5px] uppercase tracking-wider text-alabaster/40">Delivery</span>
              <span className="block font-heading text-sm font-bold text-alabaster tracking-tight">On-Time</span>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* ── CENTRALIZED EDITORIAL TEXT CONTAINER ──────────────────── */}
      {/* Scaled down headline and tightened spacings so everything fits elegantly within 100vh */}
      <div className="w-full max-w-7xl flex flex-col items-center justify-center grow relative py-4">
        <motion.div
          style={{ x: textParallaxX, y: textParallaxY }}
          className="relative z-30 w-full max-w-4xl px-4 text-center flex flex-col items-center justify-center space-y-5 md:space-y-6"
        >
          {/* Status capsule */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center space-x-2 bg-coral/5 border border-coral/15 px-4.5 py-1.5 rounded-full w-fit mx-auto"
          >
            {/* <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" /> */}
            <span className="font-mono text-[9px] text-coral uppercase tracking-[0.18em] font-bold">
              {heroData.status}
            </span>
          </motion.div>

          {/* Headline - 3D character-split reveal, compact size on desktop to fit screen height */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] xl:text-[3.4rem] font-black text-navy leading-none lg:leading-[0.93] tracking-[-0.04em] max-w-4xl break-normal">
            <SplitReveal delay={0.3} className={heroData.headline[0].highlight ? "text-coral" : ""}>
              {heroData.headline[0].text}
            </SplitReveal>
            <br className="hidden sm:block" />
            <SplitReveal delay={0.55} className={heroData.headline[1].highlight ? "text-coral font-black" : ""}>
              {heroData.headline[1].text}
            </SplitReveal>
            <br />
            <SplitReveal delay={0.85} className={heroData.headline[2].highlight ? "text-coral" : ""}>
              {heroData.headline[2].text}
            </SplitReveal>
          </h1>

          {/* Sub-copy with comfortable margins */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="max-w-2xl font-sans text-xs sm:text-sm md:text-base text-navy/70 leading-relaxed mx-auto px-4"
          >
            {heroData.subHeadline}
          </motion.p>

          {/* Centered Primary and Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1 w-full sm:w-auto px-4"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="group relative overflow-hidden bg-navy hover:bg-coral text-alabaster px-8 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-tight transition-all duration-300 shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
            >
              <span className="relative z-10">{heroData.primaryCta}</span>
              <ArrowRight className="w-4 h-4 text-coral group-hover:text-alabaster relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-coral translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </button>

            <button
              onClick={() => onNavigate('portfolio')}
              className="bg-white/80 border border-navy/20 hover:border-coral/80 hover:bg-white/60 text-navy px-8 py-3.5 rounded-xl font-heading font-semibold text-sm tracking-tight transition-all duration-300 w-full sm:w-auto cursor-pointer"
            >
              {heroData.secondaryCta}
            </button>
          </motion.div>
        </motion.div>

        {/* ── RESPONSIVE ADAPTIVE LAYOUT: FLOATING COMPONENT DRAWER (Tablet & Mobile Only) ── */}
        <div className="block lg:hidden w-full max-w-lg mt-10 px-4 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.8 }}
            className="space-y-5"
          >
            {/* Mobile Terminal Card */}
            {/* <div className="rounded-3xl bg-alabaster/80 border border-navy/6 p-5 shadow-md">
              <div className="flex justify-between items-center mb-3">
                <div className="flex space-x-1.5">
                  <div className="w-2 h-2 rounded-full bg-coral" />
                  <div className="w-2 h-2 rounded-full bg-navy/10" />
                  <div className="w-2 h-2 rounded-full bg-navy/10" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-wider text-navy/90">
                  {heroData.stats.liveTerminal}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-alabaster/40 border border-navy/4 rounded-xl p-3">
                  <span className="font-mono text-xs text-navy/85">Projects.status</span>
                  <span className="font-mono text-xs text-coral font-bold">{heroData.stats.automationPulse}</span>
                </div>
                <div className="bg-navy rounded-xl p-3 flex justify-between items-center">
                  <div className="text-left">
                    <span className="block font-mono text-[8px] text-alabaster/40 uppercase">Delivery</span>
                    <span className="font-mono text-xs text-alabaster font-light">{heroData.stats.neuralSpeed}</span>
                  </div>
                  <span className="bg-coral/20 border border-coral/30 rounded px-2 py-0.5 font-mono text-[8px] text-coral font-bold">
                    ON TIME
                  </span>
                </div>
              </div>
            </div> */}

            {/* Mobile Quick Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-alabaster/80 border border-navy/6 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center text-coral shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block font-mono text-[8px] uppercase text-navy/90">Projects</span>
                  <span className="block font-heading text-sm font-bold text-navy">{heroData.stats.efficiency}</span>
                </div>
              </div>
              <div className="bg-navy border border-alabaster/10 rounded-2xl p-4 flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-alabaster/10 flex items-center justify-center text-coral shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block font-mono text-[8px] uppercase text-alabaster/40">Delivery</span>
                  <span className="block font-heading text-sm font-bold text-alabaster">On-Time</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* ── Value Proposition Cards ─────────────────────────────────── */}
      {/* Positioned at the very bottom with a small, clean margin so they NEVER overlap */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pb-2 relative z-30">
        {heroData.valueProps.map((card, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.45 + i * 0.1 }}
            key={i}
            className="glass-panel rounded-2xl p-5 md:p-6 bg-white/80 bento-card-hover text-left flex flex-col justify-between"
          >
            <h4 className="font-heading text-sm md:text-base font-black text-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
              {card.title}
            </h4>
            <p className="font-sans text-[11px] md:text-xs text-navy/90 leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
