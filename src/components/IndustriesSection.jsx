"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Heart, GraduationCap, UtensilsCrossed, Rocket, Briefcase } from 'lucide-react';

import { industriesData, industriesHeader } from '../data/homeData';

const iconMap = { Building2, Heart, GraduationCap, UtensilsCrossed, Rocket, Briefcase };

const IndustriesSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-navy/5">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3"
        >
          {industriesHeader.subtitle}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl font-black tracking-tight text-navy leading-[1.1]"
        >
          {industriesHeader.title}
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {industriesData.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-panel rounded-3xl p-8 bg-alabaster/40 bento-card-hover flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-coral/10 border border-coral/15 flex items-center justify-center text-coral group-hover:bg-coral group-hover:text-alabaster transition-colors duration-300">
                {Icon && <Icon className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="font-heading text-base font-black text-navy mb-2 group-hover:text-coral transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-navy/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default IndustriesSection;
