"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send, CheckCircle2, MessageCircle } from 'lucide-react';

import { contactHeader, contactDetails, contactSuccessMessage, whatHappensNext, whatsappData, contactFormFields } from '../data/contactData';

const iconMap = { Mail, Phone, MessageSquare };

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      console.log('Sending contact form data:', formData);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log('Response from /api/contact:', { status: res.status, data });
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', message: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${whatsappData.number}?text=${encodeURIComponent(whatsappData.message)}`;

  return (
    <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3"
        >
          {contactHeader.subtitle}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl font-black tracking-tight text-navy leading-[1.1] mb-4"
        >
          {contactHeader.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-navy/90 text-base leading-relaxed"
        >
          {contactHeader.description}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Contact Details */}
          <div className="space-y-4">
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
                    <div className="font-mono text-[9px] text-navy/90 uppercase tracking-widest">{detail.label}</div>
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

          {/* Location */}
          <div className="flex items-center gap-4 p-4 rounded-2xl glass-panel bg-alabaster/30 max-w-sm">
            <div className="p-3 rounded-xl bg-coral/10 text-coral">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-[9px] text-navy/90 uppercase tracking-widest">Location</div>
              <div className="font-heading text-sm font-bold text-navy">Ekavex Digital</div>
              <div className="font-heading text-xs font-medium text-navy/70">Pune, Maharashtra, India</div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-heading text-sm font-bold px-6 py-4 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-green-500/20 max-w-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{whatsappData.label}</span>
          </a>

          {/* What Happens Next */}
          <div className="glass-panel rounded-3xl p-6 bg-alabaster/40 border border-navy/8 max-w-sm">
            <h3 className="font-heading text-sm font-black text-navy mb-5">What happens next?</h3>
            <ul className="space-y-4">
              {whatHappensNext.map((item) => (
                <li key={item.step} className="flex items-start gap-3">
                  <span className="font-mono text-[10px] text-coral font-bold bg-coral/10 px-2 py-1 rounded-full shrink-0">
                    {item.step}
                  </span>
                  <span className="font-sans text-sm text-navy/70 leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side Form */}
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
              <p className="font-sans text-sm text-navy/90 max-w-sm leading-relaxed">
                {contactSuccessMessage.description}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-navy/90">Your Name</label>
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
                  <label className="font-mono text-[10px] uppercase tracking-wider text-navy/90">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none transition-all focus:border-coral focus:bg-alabaster/80 focus:ring-1 focus:ring-coral"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-navy/90">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="+91 93071 09883"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none transition-all focus:border-coral focus:bg-alabaster/80 focus:ring-1 focus:ring-coral"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-navy/90">Company Name</label>
                  <input
                    type="text"
                    placeholder="Your company (optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-5 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none transition-all focus:border-coral focus:bg-alabaster/80 focus:ring-1 focus:ring-coral"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-navy/90">What do you need? (Optional)</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none transition-all focus:border-coral focus:bg-alabaster/80 focus:ring-1 focus:ring-coral appearance-none"
                >
                  <option value="">Select a service (optional)</option>
                  {contactFormFields.services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-navy/90">Approximate Budget (Optional)</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none transition-all focus:border-coral focus:bg-alabaster/80 focus:ring-1 focus:ring-coral appearance-none"
                >
                  <option value="">Select a budget range (optional)</option>
                  {contactFormFields.budgets.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] uppercase tracking-wider text-navy/90">Project Brief</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your project, goals, and any specific requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-5 py-3.5 rounded-2xl border border-navy/8 bg-alabaster/40 text-navy font-sans text-sm outline-none transition-all focus:border-coral focus:bg-alabaster/80 focus:ring-1 focus:ring-coral resize-none"
                />
              </div>

              {error && (
                <p className="font-sans text-xs text-red-500 text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full group relative overflow-hidden flex items-center justify-center gap-2 bg-coral text-alabaster font-heading text-sm font-bold py-4 rounded-2xl transition-all duration-300 hover:bg-coral/90 hover:-translate-y-0.5 shadow-lg shadow-coral/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>{loading ? 'Sending...' : 'Send Project Inquiry'}</span>
                  {!loading && <Send className="w-4 h-4" />}
                </span>
              </button>

              <p className="font-sans text-xs text-navy/60 text-center leading-relaxed">
                We typically respond within 4–8 business hours. For urgent queries, WhatsApp us directly.
              </p>

              <p className="font-mono text-[9px] text-navy/40 text-center leading-relaxed">
                We respond within 24 hours &mdash; no spam, ever.{' '}
                <a href="/privacy-policy" className="underline underline-offset-2 hover:text-coral transition-colors">
                  Privacy Policy
                </a>
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
