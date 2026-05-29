"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, PenTool, Terminal, RefreshCw, Rocket, Heart } from 'lucide-react';

import { timelineData, timelineHeader } from '../data/homeData';

const iconMap = { Compass, Target, PenTool, Terminal, RefreshCw, Rocket, Heart };

const Timeline = () => {

  return (
    <section className="py-24 w-full border-t border-navy/5 bg-alabaster/30">
      <div className="text-center max-w-3xl mx-auto mb-16 px-6 md:px-12">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3">
          {timelineHeader.subtitle}
        </div>
        <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight text-navy leading-[1.1] mb-6">
          {timelineHeader.title}
        </h2>
        <p className="font-sans text-navy/70 text-base md:text-lg">
          {timelineHeader.description}
        </p>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 py-8 lg:py-[280px]">
        {/* Horizontal Line - Desktop Only */}
        <div className="hidden lg:block absolute left-12 right-12 top-1/2 h-[1px] bg-navy/10 -translate-y-1/2 z-0" />
        
        {/* Vertical Line - Mobile Only */}
        <div className="block lg:hidden absolute left-1/2 top-8 bottom-8 w-[1px] bg-navy/10 -translate-x-1/2 z-0" />

        <div className="flex flex-col lg:flex-row justify-between items-center relative z-10 w-full gap-12 lg:gap-4">
          
          {timelineData.map((step, idx) => {
            const IconComponent = iconMap[step.iconName];
            const isTop = idx % 2 === 0;

            return (
              <div 
                key={step.num} 
                className="relative z-10 flex flex-col items-center w-full lg:w-auto"
              >
                {/* Visual Step Circle Indicator */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative w-[70px] h-[70px] lg:w-[80px] lg:h-[80px] rounded-full border border-navy/10 bg-alabaster flex flex-col items-center justify-center shadow-lg shadow-navy/5 z-20 mx-auto"
                >
                  <IconComponent className="w-5 h-5 text-coral mb-0.5" />
                  <span className="font-mono text-[10px] text-navy/90 font-bold">{step.num}</span>
                </motion.div>

                {/* Text Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: isTop ? 20 : -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.6, ease: "easeOut" }}
                  className={`
                    glass-panel rounded-[2rem] p-6 bg-alabaster/50 hover:border-coral/25 transition-colors shadow-sm text-center
                    mt-6 lg:mt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:w-[240px] xl:w-[280px]
                    ${isTop ? 'lg:bottom-[calc(100%+32px)]' : 'lg:top-[calc(100%+32px)]'}
                  `}
                >
                  <h3 className="font-heading text-base xl:text-lg font-black text-navy mb-2 lg:mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-navy/70 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
