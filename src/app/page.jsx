'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CinematicHero } from '../components/ui/cinematic-landing-hero';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import IndustriesSection from '../components/IndustriesSection';
import BeforeAfterSection from '../components/BeforeAfterSection';
import Timeline from '../components/Timeline';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';

export default function HomePage() {
  const router = useRouter();

  const handleNavigate = (view) => {
    const targetPath = view === 'home' ? '/' : `/${view}`;
    router.push(targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <motion.div key="home" {...pageTransition}>
      {/* Initial Hero with cursor-vector 3D tilt */}
      <div className="">
        <Hero onNavigate={handleNavigate} />
      </div>

      {/* Cinematic Hero (Scroll sequence) */}
      <div className="mt-0 mb-16 relative z-20 bg-alabaster">
        {/* We use a subtle top gradient/mask if needed, but since it's full-bleed, 
            it will seamlessly follow the previous section. */}
        <CinematicHero />
      </div>

      <BentoGrid onNavigate={handleNavigate} />
      <IndustriesSection />
      <BeforeAfterSection />
      <Timeline />
      <FAQ />
      <CTASection />
    </motion.div>
  );
}
