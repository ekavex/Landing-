"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, TrendingUp, X, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';

import { portfolioData, portfolioFilters, portfolioHeader } from '../data/portfolioData';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeFilter);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -200,
      behavior: 'smooth',
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 200,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
        <div className="w-full lg:w-auto">
          <div className="flex items-center justify-between gap-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3">
              {portfolioHeader.subtitle}
            </div>
            {/* Elegant Swipe indicator for mobile */}
            <div className="lg:hidden flex items-center gap-1 font-mono text-[9px] uppercase tracking-widest text-navy/90 mb-3 select-none">
              <span>Swipe to filter</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="inline-block font-bold text-coral"
              >
                →
              </motion.span>
            </div>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight text-navy leading-[1.1] text-balance">
            {portfolioHeader.title}
          </h2>
        </div>

        <div className="relative w-full">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-alabaster border border-navy/10 shadow-sm flex items-center justify-center hover:bg-navy/5 transition-all duration-200 sm:hidden"
          >
            <ChevronRight className="w-4 h-4 rotate-180 text-navy" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-alabaster border border-navy/10 shadow-sm flex items-center justify-center hover:bg-navy/5 transition-all duration-200 sm:hidden"
          >
            <ChevronRight className="w-4 h-4 text-navy" />
          </button>

          {/* Scroll Area */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-none px-10 sm:px-0"
          >
            <div className="inline-flex gap-1.5 bg-navy/5 p-1 rounded-full border border-navy/5 min-w-max">
              {portfolioFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative shrink-0 px-4 py-2 rounded-full font-heading text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 hover:scale-105 active:scale-95 ${activeFilter === filter
                      ? 'text-navy font-black'
                      : 'text-navy/90 hover:text-navy'
                    }`}
                >
                  {activeFilter === filter && (
                    <motion.div
                      layoutId="portfolioActiveTab"
                      className="absolute inset-0 bg-alabaster rounded-full shadow-sm border border-navy/5 -z-10"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}

                  {filter}
                </button>
              ))}
            </div>
          </div>
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
              className="rounded-4xl sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 bento-card-hover cursor-pointer group flex flex-col justify-between min-h-104 sm:h-96 relative overflow-hidden shadow-md border border-navy/10 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
            >
              {/* Background Image with Overlay styles */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/45 transition-colors duration-500" />
                {/* Visual Depth Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />
              </div>

              {/* Foreground Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold bg-coral/20 border border-coral/30 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-alabaster/60 font-mono text-[10px]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.timeline}</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-black text-alabaster group-hover:text-coral transition-colors mb-3 leading-tight text-balance">
                  {project.title}
                </h3>
                <p className="font-sans text-sm md:text-base text-alabaster/80 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between border-t border-alabaster/10 pt-6 mt-6 gap-4">
                <div className="flex items-center gap-2 shrink-0">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="font-heading text-xs font-black uppercase text-alabaster tracking-wider">{project.metric}</span>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto shrink-0">
                  {/* View Project direct link button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.projectUrl, '_blank', 'noopener,noreferrer');
                    }}
                    className="bg-coral hover:bg-coral/95 text-alabaster font-heading text-[10px] font-black uppercase tracking-wider px-4 py-2.5 rounded-full transition-all duration-300 flex items-center gap-1 border border-coral/30 shadow-lg shadow-coral/10 hover:scale-[1.03] active:scale-95 shrink-0 cursor-pointer"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {/* Deconstruct detail modal button */}
                  <div className="flex items-center gap-1 font-heading text-[10px] font-black uppercase text-alabaster/85 group-hover:text-coral transition-all duration-300 group-hover:scale-105 active:scale-95 shrink-0 cursor-pointer">
                    <span>Deconstruct</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
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
            className="fixed inset-0 z-[100] overflow-hidden flex items-center justify-center bg-navy/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full max-w-4xl bg-alabaster rounded-4xl sm:rounded-[2.5rem] border border-navy/10 shadow-2xl p-6 sm:p-10 md:pt-10 overflow-y-auto md:overflow-hidden max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-4.5rem)]"
              style={{ WebkitOverflowScrolling: 'touch' }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-start gap-6 border-b border-navy/10 pb-6 pt-4 mb-5">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-coral font-bold bg-coral/10 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl font-black text-navy mt-4 text-balance">
                    {selectedProject.title}
                  </h3>
                  <div className="flex gap-4 mt-3">
                    <span className="font-mono text-[10px] text-navy/90 uppercase">Timeline: {selectedProject.timeline}</span>
                    <span className="font-mono text-[10px] text-coral font-bold uppercase">Outcome: {selectedProject.metric}</span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-3 rounded-full border border-navy/10 bg-alabaster hover:bg-navy/5 active:scale-90 transition-all duration-200 cursor-pointer"
                >
                  <X className="w-4 h-4 text-navy" />
                </button>
              </div>

              {/* Grid content */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Left panel */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-navy/90 mb-2">The Business Challenge</h4>
                    <p className="font-sans text-sm text-navy/80 leading-relaxed text-pretty">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-navy/90 mb-2">Our Strategy & Engineering</h4>
                    <p className="font-sans text-sm text-navy/80 leading-relaxed text-pretty">{selectedProject.strategy}</p>
                  </div>
                </div>

                {/* Right panel */}
                <div className="md:col-span-5 space-y-3 bg-navy/3 p-4 rounded-3xl border border-navy/5">
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-navy/90 mb-3">Key Metric Results</h4>
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
                    <h4 className="font-mono text-[10px] uppercase tracking-wider text-navy/90 mb-3">System Stack</h4>
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
