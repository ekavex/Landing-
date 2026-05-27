"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

import { contactHeader, contactDetails, contactFormFields, contactSuccessMessage } from '../data/contactData';

const iconMap = { Mail, Phone, MessageSquare };

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: contactFormFields.services[0],
    budget: contactFormFields.budgets[0],
    timeline: contactFormFields.timelines[0],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side Copy */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3"
          >
            {contactHeader.subtitle}
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl md:text-5xl font-black tracking-tight text-navy leading-[1.1] mb-6"
          >
            {contactHeader.title}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-navy/70 text-base leading-relaxed mb-8"
          >
            {contactHeader.description}
          </motion.p>

          <div className="space-y-6">
            {contactDetails.map((detail) => {
              const Icon = iconMap[detail.iconName];
              return (
                <motion.div 
                  key={detail.id}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-2xl glass-panel bg-alabaster/30 max-w-sm"
                >
                  <div className="p-3 rounded-xl bg-coral/10 text-coral">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-mono text-[9px] text-navy/40 uppercase tracking-widest">{detail.label}</div>
                    {detail.pulse ? (
                      <span className="inline-flex items-center gap-1.5 font-heading text-xs font-bold text-coral">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        {detail.value}
                      </span>
                    ) : (
                      <div className="font-heading text-sm font-bold text-navy">{detail.value}</div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 glass-panel-heavy rounded-[2.5rem] p-8 md:p-10 border-navy/10 shadow-2xl relative"
        >
          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-coral mb-6" />
              <h3 className="font-heading text-2xl font-black text-navy mb-2">{contactSuccessMessage.title}</h3>
              <p className="font-sans text-sm text-navy/60 max-w-sm leading-relaxed">
                {contactSuccessMessage.description}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-navy/50">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none transition-all focus:border-coral focus:bg-alabaster/80 focus:ring-1 focus:ring-coral"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-navy/50">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none transition-all focus:border-coral focus:bg-alabaster/80 focus:ring-1 focus:ring-coral"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-navy/50">Required Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none focus:border-coral cursor-pointer"
                  >
                    {contactFormFields.services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-navy/50">Target Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none focus:border-coral cursor-pointer"
                  >
                    {contactFormFields.budgets.map((budget) => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-navy/50">Timeline Range</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none focus:border-coral cursor-pointer"
                  >
                    {contactFormFields.timelines.map((timeline) => (
                      <option key={timeline} value={timeline}>{timeline}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-navy/50">Project Brief & Details</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your systems goals, integrations, and expectations..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none transition-all focus:border-coral focus:bg-alabaster/80 focus:ring-1 focus:ring-coral"
                />
              </div>

              <button
                type="submit"
                className="w-full group relative overflow-hidden flex items-center justify-center gap-2 bg-navy text-alabaster font-heading text-xs font-bold uppercase tracking-wider py-4 rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Send Project Transmission</span>
                  <Send className="w-3.5 h-3.5 text-coral" />
                </span>
                <div className="absolute inset-0 bg-coral translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
