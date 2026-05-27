"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Menu, X } from 'lucide-react';

import { navbarData } from '../data/commonData';

const Navbar = ({ activeView, onViewChange }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 md:px-12 py-4 ${
          scrolled ? 'top-2 md:top-4' : 'top-0'
        }`}
      >
        <div 
          className={`mx-auto max-w-7xl rounded-full transition-all duration-500 flex items-center justify-between px-6 py-2.5 md:py-3 ${
            scrolled 
              ? 'glass-panel-heavy shadow-[0_8px_30px_rgb(9,18,44,0.03)] border-navy/10' 
              : 'bg-transparent border-transparent'
          }`}
        >
          {/* Brand Logo Section */}
          <div 
            onClick={() => onViewChange('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Interactive 3x3 Dot Grid Logo */}
            <div className="grid grid-cols-3 gap-1 w-6 h-6 transition-transform duration-500 group-hover:rotate-90">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-coral transition-all duration-300 group-hover:scale-125"
                  style={{
                    opacity: i % 2 === 0 ? 1 : 0.7,
                  }}
                />
              ))}
            </div>

            <span className="font-heading text-lg font-black tracking-[-0.03em] text-navy">
              {navbarData.brandName}
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navbarData.navItems.map((item) => {
              const isActive = activeView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`relative px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? 'text-navy' : 'text-navy/60 hover:text-navy'
                  }`}
                >
                  {/* Sliding Indicator Background */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-coral/8 border border-coral/15 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onViewChange('contact')}
              className="group relative overflow-hidden flex items-center gap-2 bg-navy text-alabaster font-heading text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10">{navbarData.ctaButton}</span>
              <Sparkles className="w-3.5 h-3.5 text-coral relative z-10 transition-transform duration-500 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-coral translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-navy/10 bg-alabaster/60 backdrop-blur-sm"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-navy" /> : <Menu className="w-4 h-4 text-navy" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Glassmorphic Bottom Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-6 bottom-6 z-40 md:hidden"
          >
            <div className="glass-panel-heavy rounded-3xl p-6 border-navy/10 shadow-2xl shadow-navy/20">
              <div className="flex flex-col gap-3">
                {navbarData.navItems.map((item) => {
                  const isActive = activeView === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onViewChange(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all duration-300 ${
                        isActive 
                          ? 'bg-coral text-alabaster font-bold shadow-lg shadow-coral/10' 
                          : 'bg-navy/3 text-navy font-semibold hover:bg-navy/5'
                      }`}
                    >
                      <span className="font-heading text-[13px] uppercase tracking-wider">
                        {item.label}
                      </span>
                      {isActive && <Sparkles className="w-4 h-4 text-alabaster" />}
                    </button>
                  );
                })}

                <button
                  onClick={() => {
                    onViewChange('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 bg-navy text-alabaster px-5 py-4 rounded-2xl font-heading text-xs font-bold uppercase tracking-wider shadow-lg shadow-navy/10 mt-2"
                >
                  <span>{navbarData.ctaButton}</span>
                  <Calendar className="w-4 h-4 text-coral" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
