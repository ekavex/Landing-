import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, CheckCircle2,
  Code, Cpu, Brain, Layers,
  Smartphone, Shield
} from 'lucide-react';

// Custom inline SVG icons for social networks (not exported by latest lucide)
const Github = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const Twitter = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 shrink-0" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

// Components
import Preloader from './components/Preloader';
import PerspectiveGrid from './components/PerspectiveGrid';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import ContactForm from './components/ContactForm';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState('home');

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const handleViewChange = (view) => {
    setActiveView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Video Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <div className="relative min-h-screen flex flex-col font-sans antialiased text-navy selection:bg-coral/20 selection:text-navy overflow-hidden">
          {/* WebGL/Perspective grid background */}
          <PerspectiveGrid />

          {/* Fixed Floating Navbar */}
          <Navbar activeView={activeView} onViewChange={handleViewChange} />

          {/* Master View Orchestrator */}
          <main className="grow pt-28 pb-16 relative z-10">
            <AnimatePresence mode="wait">
              {activeView === 'home' && (
                <motion.div key="home" {...pageTransition}>
                  {/* Standalone Hero with cursor-vector 3D tilt */}
                  <Hero onNavigate={handleViewChange} />

                  {/* Core Services Bento Grid (scroll-pinned parallax) */}
                  <BentoGrid onNavigate={handleViewChange} />

                  {/* Operational Stepper Timeline */}
                  <Timeline />

                  {/* FAQ */}
                  <FAQ />
                </motion.div>
              )}

              {activeView === 'services' && (
                <motion.div key="services" {...pageTransition}>
                  <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
                    {/* Services Page Editorial Hero */}
                    <div className="border-b border-navy/10 pb-8 mb-16">
                      <div className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3">
                        Professional Services
                      </div>
                      <h1 className="font-heading text-4xl md:text-6xl font-black tracking-tight text-navy leading-[1.05]">
                        Engineering & System Capabilities
                      </h1>
                      <p className="font-sans text-navy/60 text-base md:text-lg mt-4 max-w-2xl">
                        A detailed deconstruction of our technology capabilities, security frameworks, and custom LLM agent systems.
                      </p>
                    </div>

                    {/* Alternating Service Decks from Aboutus.md */}
                    <div className="space-y-24">
                      {[
                        {
                          num: '01',
                          title: 'Premium Web Engineering',
                          icon: Code,
                          problem: 'Slow loading, poor search engine ranking, and bloated legacy codebases that drop customer conversion rates.',
                          benefit: 'Next-generation web applications built using React, Next.js, and lightweight Tailwind v4. Fully responsive, SEO-ready, and lightning-fast.',
                          tech: ['Next.js', 'React', 'Tailwind v4', 'Vite', 'GraphQL'],
                        },
                        {
                          num: '02',
                          title: 'Agentic AI Workflow Automation',
                          icon: Cpu,
                          problem: 'Overwhelming manual processes, data entry lags, and expensive labor costs handling repetitive tasks.',
                          benefit: 'Custom multi-agent workflows that connect internal databases, parse document grids, sync customer CRM entries, and automate 95% of manual processes.',
                          tech: ['n8n Core', 'LangChain', 'Make', 'Zapier APIs'],
                        },
                        {
                          num: '03',
                          title: 'Intelligent AI Engines',
                          icon: Brain,
                          problem: 'Static data portals that fail to provide insights, requiring regular support queries and manual searches.',
                          benefit: 'Semantic LLMs integrated natively with your data pipelines, vector memory vector store systems (PgVector), and conversational chatbot structures.',
                          tech: ['OpenAI', 'Pinecone', 'HuggingFace', 'LangGraph'],
                        },
                        {
                          num: '04',
                          title: 'Editorial UI/UX Design',
                          icon: Layers,
                          problem: 'Cluttered, standard dark SaaS templates that feel generic and drop client brand credibility.',
                          benefit: 'Taste-skill visual identity systems matching geometric rules, luxurious outfit typography, warm ivory grids, and fluid scroll animations.',
                          tech: ['Figma Pro', 'Framer', 'GSAP', 'Illustrator'],
                        },
                        {
                          num: '05',
                          title: 'Native Mobile Applications',
                          icon: Smartphone,
                          problem: 'Outdated cross-platform wrappers that feel slow, jittery, and lack native phone integration.',
                          benefit: 'Sleek, high-performance mobile application suites compiled natively for iOS and Android using Expo and React Native.',
                          tech: ['React Native', 'Expo', 'Redux Toolkit', 'NativeWind'],
                        },
                        {
                          num: '06',
                          title: 'Enterprise Cybersecurity Shield',
                          icon: Shield,
                          problem: 'API data leaks, SQL injections, insecure authentication tokens, and vulnerable user access control structures.',
                          benefit: 'Thorough penetration testing auditing, bank-grade secure OAuth 2.1 implementation, and robust server firewall setups.',
                          tech: ['OAuth 2.1', 'JWT Core', 'HelmetJS', 'OWASP Standards'],
                        }
                      ].map((svc, index) => {
                        const IconComponent = svc.icon;
                        const isEven = index % 2 === 0;

                        return (
                          <div 
                            key={svc.num} 
                            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                              isEven ? '' : 'lg:flex-row-reverse'
                            }`}
                          >
                            {/* Text side */}
                            <div className={`lg:col-span-7 space-y-6 ${
                              isEven ? 'order-1' : 'order-1 lg:order-2'
                            }`}>
                              <div className="flex items-center gap-4">
                                <span className="font-mono text-xs text-coral font-bold">{svc.num} / SERVICE</span>
                                <div className="p-2 rounded-xl bg-navy/5 text-navy">
                                  <IconComponent className="w-5 h-5" />
                                </div>
                              </div>

                              <h3 className="font-heading text-3xl font-black text-navy">{svc.title}</h3>

                              <div className="space-y-4">
                                <div>
                                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-navy/40 mb-1">Core Problem</h4>
                                  <p className="font-sans text-sm text-navy/70 leading-relaxed">{svc.problem}</p>
                                </div>
                                <div>
                                  <h4 className="font-mono text-[9px] uppercase tracking-widest text-navy/40 mb-1">Our Engineering Approach</h4>
                                  <p className="font-sans text-sm text-navy/70 leading-relaxed">{svc.benefit}</p>
                                </div>
                              </div>

                              <div className="flex flex-wrap gap-1.5 pt-4">
                                {svc.tech.map((t) => (
                                  <span key={t} className="font-mono text-[9px] bg-navy text-alabaster px-3 py-1 rounded-full">{t}</span>
                                ))}
                              </div>
                            </div>

                            {/* visual box side */}
                            <div className={`lg:col-span-5 ${
                              isEven ? 'order-2' : 'order-2 lg:order-1'
                            }`}>
                              <div className="h-[280px] bg-navy/3 border border-navy/5 rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden relative glass-panel-heavy">
                                <div className="absolute inset-0 bg-gradient-to-tr from-coral/5 to-transparent pointer-events-none" />
                                <div className="font-mono text-[9px] uppercase tracking-wider text-navy/40">SYSTEM RUNTIME OK</div>
                                <div className="space-y-4">
                                  <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-coral" />
                                    <span className="font-heading text-xs font-bold text-navy">Agile QA Audited</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-coral" />
                                    <span className="font-heading text-xs font-bold text-navy">Premium Micro-interactions</span>
                                  </div>
                                </div>
                                <button 
                                  onClick={() => handleViewChange('contact')}
                                  className="flex items-center gap-1.5 font-heading text-xs font-black uppercase tracking-wider text-coral"
                                >
                                  <span>Request Deep Brief</span>
                                  <ChevronRight className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                </motion.div>
              )}

              {activeView === 'portfolio' && (
                <motion.div key="portfolio" {...pageTransition}>
                  <Portfolio />
                </motion.div>
              )}

              {activeView === 'blog' && (
                <motion.div key="blog" {...pageTransition}>
                  <Blog />
                </motion.div>
              )}

              {activeView === 'contact' && (
                <motion.div key="contact" {...pageTransition}>
                  <ContactForm />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Structured Premium Footer */}
          <footer className="border-t border-navy/10 bg-alabaster/80 py-16 px-6 md:px-12 relative z-10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
              {/* Left Branding */}
              <div className="md:col-span-5 space-y-6">
                <div 
                  onClick={() => handleViewChange('home')}
                  className="flex items-center gap-3 cursor-pointer group max-w-max"
                >
                  <div className="grid grid-cols-3 gap-1 w-6 h-6">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-coral"
                        style={{ opacity: i % 2 === 0 ? 1 : 0.7 }}
                      />
                    ))}
                  </div>
                  <span className="font-heading text-lg font-black tracking-[-0.03em] text-navy">
                    ECAVEX
                  </span>
                </div>
                <p className="font-sans text-xs md:text-sm text-navy/60 leading-relaxed max-w-sm">
                  A high-end editorial digital agency specializing in premium web development, custom AI agent systems, and top-tier UI/UX designs.
                </p>
                <div className="font-mono text-[9px] text-navy/40 uppercase tracking-widest">
                  © 2026 ECAVEX DIGITAL. ALL RIGHTS SECURED.
                </div>
              </div>

              {/* Columns */}
              <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Pages */}
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-navy/40">Navigation</h4>
                  <ul className="space-y-2.5">
                    {['home', 'services', 'portfolio', 'blog', 'contact'].map((view) => (
                      <li key={view}>
                        <button
                          onClick={() => handleViewChange(view)}
                          className="font-heading text-xs font-semibold capitalize text-navy/60 hover:text-coral transition-colors"
                        >
                          {view === 'portfolio' ? 'Case Studies' : view}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Socials */}
                <div className="space-y-4">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-navy/40">Connect</h4>
                  <ul className="space-y-2.5">
                    {[
                      { label: 'LinkedIn', icon: Linkedin },
                      { label: 'GitHub', icon: Github },
                      { label: 'Twitter / X', icon: Twitter },
                    ].map((soc) => (
                      <li key={soc.label}>
                        <a
                          href="#"
                          className="flex items-center gap-2 font-heading text-xs font-semibold text-navy/60 hover:text-coral transition-colors"
                        >
                          <soc.icon className="w-3.5 h-3.5" />
                          <span>{soc.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Secure footprint details */}
                <div className="space-y-4 col-span-2 md:col-span-1">
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-navy/40">Capabilities</h4>
                  <ul className="space-y-1.5">
                    {['Next.js Frontend', 'LangChain Core', 'OAuth Security', 'Expo Native'].map((t) => (
                      <li key={t} className="font-mono text-[9px] text-navy/50">{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
