"use client";

import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';

import { heroData } from '../data/homeData';

// ── SplitReveal helper ──────────────────────────────────────────────
// Breaks a string into individual character nodes that rotate-in on a 3D axis
const SplitReveal = ({ children, className = '', delay = 0 }) => {
  const chars = String(children).split('');
  return (
    <span className={`inline-flex flex-wrap ${className}`} style={{ perspective: '600px' }}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, rotateX: 90, y: 20 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{
            delay: delay + i * 0.025,
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block origin-bottom"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export default function Hero({ onNavigate }) {
  // Mouse motion values normalised to -0.5 … +0.5
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Elastic spring response matching editorial metrics
  const springConfig = { stiffness: 100, damping: 15, mass: 0.8 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    x.set((e.clientX / innerWidth) - 0.5);
    y.set((e.clientY / innerHeight) - 0.5);
  };

  // ── Parallax depth layers ─────────────────────────────────────────
  // Text shifts gently in cursor direction
  const textParallaxX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const textParallaxY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

  // Layer 1 — primary analytics card: moves toward cursor + tilts
  const cardLayerOneX = useTransform(mouseX, [-0.5, 0.5], [35, -35]);
  const cardLayerOneY = useTransform(mouseY, [-0.5, 0.5], [35, -35]);
  const rotateX1 = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY1 = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  // Layer 2 — secondary metric badge: drifts inversely for severe depth
  const cardLayerTwoX = useTransform(mouseX, [-0.5, 0.5], [-40, 40]);
  const cardLayerTwoY = useTransform(mouseY, [-0.5, 0.5], [-40, 40]);

  // Layer 3 — tertiary accent node: subtle opposite drift
  const cardLayerThreeX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
  const cardLayerThreeY = useTransform(mouseY, [-0.5, 0.5], [-25, 25]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] w-full overflow-hidden px-6 md:px-12 pt-8 pb-20 flex flex-col justify-center items-center select-none z-10"
      style={{ perspective: '1200px' }}
    >
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* ── Left Column: Editorial Heading ──────────────────────────── */}
        <motion.div
          style={{ x: textParallaxX, y: textParallaxY }}
          className="lg:col-span-7 flex flex-col items-center space-y-8 text-center"
        >
          {/* Status capsule */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center space-x-2 bg-coral/5 border border-coral/15 px-4 py-1.5 rounded-full w-fit mx-auto"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
            <span className="font-mono text-[9px] text-coral uppercase tracking-[0.15em] font-bold">
              {heroData.status}
            </span>
          </motion.div>

          {/* Headline — 3D character-split reveal */}
          <h1 className="font-heading text-5xl md:text-7xl font-black text-navy leading-[0.95] tracking-[-0.04em]">
            <SplitReveal delay={0.3} className={heroData.headline[0].highlight ? "text-coral" : ""}>
              {heroData.headline[0].text}
            </SplitReveal>
            <br />
            <SplitReveal delay={0.55} className={heroData.headline[1].highlight ? "text-coral" : ""}>
              {heroData.headline[1].text}
            </SplitReveal>
            <br />
            <SplitReveal delay={0.85} className={heroData.headline[2].highlight ? "text-coral" : ""}>
              {heroData.headline[2].text}
            </SplitReveal>
          </h1>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="max-w-xl font-sans text-base md:text-lg text-navy/70 leading-relaxed mx-auto"
          >
            {heroData.subHeadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25 }}
            className="flex items-center justify-center space-x-4 pt-4"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="group relative overflow-hidden bg-navy hover:bg-coral text-alabaster px-8 py-4 rounded-xl font-heading font-semibold text-sm tracking-tight transition-all duration-300 shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span className="relative z-10">{heroData.primaryCta}</span>
              <ArrowRight className="w-4 h-4 text-coral group-hover:text-alabaster relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-coral translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </button>

            <button
              onClick={() => onNavigate('services')}
              className="bg-transparent border border-navy/10 hover:border-coral/30 hover:bg-alabaster/60 text-navy px-8 py-4 rounded-xl font-heading font-semibold text-sm tracking-tight transition-all duration-300"
            >
              {heroData.secondaryCta}
            </button>
          </motion.div>
        </motion.div>

        {/* ── Right Column: Interactive Layered Dashboard ─────────────── */}
        <div className="lg:col-span-5 relative w-full h-[480px] flex items-center justify-center">

          {/* Decorative back-light leak */}
          <div className="absolute top-16 left-8 w-72 h-72 bg-coral/5 rounded-full blur-3xl pointer-events-none z-10" />

          {/* Layer 1 — Primary Analytics Card (tilts toward cursor) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              x: cardLayerOneX,
              y: cardLayerOneY,
              rotateX: rotateX1,
              rotateY: rotateY1,
              transformStyle: 'preserve-3d',
            }}
            className="absolute w-full max-w-[380px] h-[280px] rounded-3xl bg-alabaster/70 backdrop-blur-xl border border-navy/6 shadow-xl p-6 z-20"
          >
            {/* Card chrome */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-coral" />
                <div className="w-2.5 h-2.5 rounded-full bg-navy/15" />
                <div className="w-2.5 h-2.5 rounded-full bg-navy/15" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-navy/40">
                {heroData.stats.liveTerminal}
              </span>
            </div>

            <div className="space-y-4">
              <div className="h-2 w-1/3 bg-navy/8 rounded" />
              <div className="h-12 w-full bg-alabaster/60 border border-navy/4 rounded-xl p-3 flex items-center justify-between">
                <span className="font-mono text-xs text-navy/80">Automation.pulse</span>
                <span className="font-mono text-xs text-coral font-bold">{heroData.stats.automationPulse}</span>
              </div>
              <div className="h-16 w-full bg-navy rounded-xl p-3 flex items-center justify-between">
                <div className="space-y-1">
                  <span className="block font-mono text-[10px] text-alabaster/40 uppercase tracking-wider">Neural Speed</span>
                  <span className="block font-mono text-sm text-alabaster font-light">{heroData.stats.neuralSpeed}</span>
                </div>
                <div className="w-14 h-7 bg-coral/20 rounded border border-coral/30 flex items-center justify-center">
                  <span className="font-mono text-[9px] text-coral font-bold">OPTIMAL</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Layer 2 — Floating Metric Badge (inverse drift) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: cardLayerTwoX, y: cardLayerTwoY }}
            className="absolute bottom-10 -right-2 w-[185px] bg-alabaster/90 border border-navy/8 rounded-2xl p-4 shadow-lg z-30 flex items-center space-x-3 backdrop-blur-sm"
          >
            <div className="w-9 h-9 rounded-lg bg-coral/10 flex items-center justify-center text-coral shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <span className="block font-mono text-[10px] uppercase tracking-wider text-navy/40">Efficiency</span>
              <span className="block font-heading text-lg font-bold text-navy tracking-tight">{heroData.stats.efficiency}</span>
            </div>
          </motion.div>

          {/* Layer 3 — Tertiary status node (subtle opposite drift) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.95, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{ x: cardLayerThreeX, y: cardLayerThreeY }}
            className="absolute top-4 -left-4 bg-navy rounded-2xl px-4 py-3 shadow-lg z-30 flex items-center space-x-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-coral animate-pulse" />
            <span className="font-mono text-[9px] text-alabaster/70 uppercase tracking-wider">
              {heroData.stats.statusNode}
            </span>
          </motion.div>

        </div>
      </div>

      {/* ── Value Proposition Cards ─────────────────────────────────── */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
        {heroData.valueProps.map((card, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 + i * 0.1 }}
            key={i}
            className="glass-panel rounded-3xl p-6 md:p-8 bg-alabaster/40 bento-card-hover text-left flex flex-col justify-between"
          >
            <h4 className="font-heading text-base font-black text-navy mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
              {card.title}
            </h4>
            <p className="font-sans text-xs md:text-sm text-navy/60 leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
