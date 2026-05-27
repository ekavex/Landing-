"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Target, PenTool, Terminal, RefreshCw, Rocket, Heart } from 'lucide-react';

import { timelineData, timelineHeader } from '../data/homeData';

const iconMap = { Compass, Target, PenTool, Terminal, RefreshCw, Rocket, Heart };

const Timeline = () => {

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-navy/5 bg-alabaster/30">
      <div className="text-center max-w-3xl mx-auto mb-20">
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

      <div className="relative max-w-4xl mx-auto">
        {/* Continuous timeline line (hidden on mobile, centered on larger screens) */}
        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[1px] bg-navy/10 transform md:-translate-x-1/2" />

        <div className="space-y-12">
          {timelineData.map((step, idx) => {
            const IconComponent = iconMap[step.iconName];
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={step.num} 
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Step Circle Indicator */}
                <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                  <motion.div 
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    viewport={{ once: true }}
                    className="w-[80px] h-[80px] rounded-full border border-navy/10 bg-alabaster flex flex-col items-center justify-center shadow-lg shadow-navy/5"
                  >
                    <IconComponent className="w-5 h-5 text-coral mb-0.5 animate-pulse" />
                    <span className="font-mono text-[10px] text-navy/50 font-bold">{step.num}</span>
                  </motion.div>
                </div>

                {/* Left/Right Text Content Card */}
                <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${
                  isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'
                }`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="glass-panel rounded-[2rem] p-6 md:p-8 bg-alabaster/50 hover:border-coral/25 transition-colors shadow-sm"
                  >
                    <h3 className="font-heading text-lg font-black text-navy mb-2">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-navy/70 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty placeholder column for horizontal alignment */}
                <div className="hidden md:block w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
