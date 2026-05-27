"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, TrendingUp, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

import { portfolioData, portfolioFilters, portfolioHeader } from '../data/portfolioData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All' 
    ? portfolioData 
    : portfolioData.filter(p => p.category === activeFilter);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3">
            {portfolioHeader.subtitle}
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight text-navy leading-[1.1]">
            {portfolioHeader.title}
          </h2>
        </div>

        {/* Categories Tab Controller */}
        <div className="flex flex-wrap gap-1.5 bg-navy/5 p-1 rounded-full border border-navy/5 max-w-max self-start md:self-end">
          {portfolioFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-4 py-2 rounded-full font-heading text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${
                activeFilter === filter ? 'text-navy' : 'text-navy/50 hover:text-navy'
              }`}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="portfolioActiveTab"
                  className="absolute inset-0 bg-alabaster rounded-full shadow-sm border border-navy/5 -z-10"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid List */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass-panel rounded-4xl p-8 bento-card-hover cursor-pointer group flex flex-col justify-between h-90 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl pointer-events-none transition-opacity group-hover:opacity-100" />
              
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold bg-coral/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-navy/40 font-mono text-[10px]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.timeline}</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl font-black text-navy group-hover:text-coral transition-colors mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-navy/60 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-navy/5 pt-6 mt-6">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <span className="font-heading text-xs font-black uppercase text-navy">{project.metric}</span>
                </div>
                <div className="flex items-center gap-1.5 font-heading text-xs font-black uppercase text-navy group-hover:text-coral transition-colors">
                  <span>Deconstruct Case</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Expanded Case Study Detail Drawer Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-md p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full max-w-4xl bg-alabaster rounded-[2.5rem] border border-navy/10 shadow-2xl p-8 md:p-12 overflow-y-auto max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start gap-6 border-b border-navy/10 pb-6 mb-8">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold bg-coral/10 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl font-black text-navy mt-4">
                    {selectedProject.title}
                  </h3>
                  <div className="flex gap-4 mt-3">
                    <span className="font-mono text-[10px] text-navy/40 uppercase">Timeline: {selectedProject.timeline}</span>
                    <span className="font-mono text-[10px] text-coral font-bold uppercase">Outcome: {selectedProject.metric}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-3 rounded-full border border-navy/10 bg-alabaster hover:bg-navy/5 transition-colors"
                >
                  <X className="w-4 h-4 text-navy" />
                </button>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left panel */}
                <div className="md:col-span-7 space-y-6">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-navy/40 mb-2">The Business Challenge</h4>
                    <p className="font-sans text-sm text-navy/80 leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-navy/40 mb-2">Our Strategy & Engineering</h4>
                    <p className="font-sans text-sm text-navy/80 leading-relaxed">{selectedProject.strategy}</p>
                  </div>
                </div>

                {/* Right panel */}
                <div className="md:col-span-5 space-y-6 bg-navy/3 p-6 rounded-3xl border border-navy/5">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-navy/40 mb-3">Key Metric Results</h4>
                    <ul className="space-y-3">
                      {selectedProject.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ShieldCheck className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-navy/80 leading-normal">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-navy/40 mb-3">System Stack</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="font-mono text-[9px] bg-navy text-alabaster px-3 py-1 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
