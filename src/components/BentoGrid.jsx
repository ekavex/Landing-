import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  Code, Cpu, Brain, Layers, Smartphone, Shield,
  ArrowUpRight, Award, Activity
} from 'lucide-react';

// ── SplitReveal for section headings ────────────────────────────────
// Characters rotate into place along a 3D axis on scroll-triggered entry
const SplitReveal = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const chars = String(children).split('');

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={{ perspective: '600px' }}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, rotateX: 90, y: 14 }}
          animate={inView ? { opacity: 1, rotateX: 0, y: 0 } : {}}
          transition={{
            delay: delay + i * 0.02,
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block origin-bottom"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

// ── Card definitions ────────────────────────────────────────────────
const cards = [
  {
    id: 'web',
    span: 'md:col-span-2',
    icon: Code,
    label: '01 / Digital Architectures',
    title: 'Premium Web Development',
    desc: 'We design and construct blazing-fast, responsive, and SEO-optimized web applications utilizing Next.js, React, and modular structures. Optimized for organic search, speed, and premium user interaction.',
    tags: ['Next.js', 'React.js', 'Vite', 'Node.js', 'PostgreSQL'],
    cta: 'Explore Engineering Capabilities',
    bg: 'bg-alabaster/40',
    speed: 0.2,
  },
  {
    id: 'automation',
    span: '',
    icon: Cpu,
    label: '02 / Workflow Systems',
    title: 'AI Automation',
    desc: 'Automate repetitive workflows, connect legacy business databases, and supercharge staff efficiency using custom-built AI agents.',
    tags: ['LangChain', 'Make.com', 'n8n', 'Zapier'],
    cta: 'Learn More',
    bg: 'bg-alabaster/40',
    speed: -0.1,
  },
  {
    id: 'ai',
    span: '',
    icon: Brain,
    label: '03 / Artificial Intelligence',
    title: 'Intelligent AI Engines',
    desc: 'Implement conversational custom LLMs, vector search databases, semantic models, and predictive algorithms natively in your workflow.',
    tags: [],
    cta: 'Configure AI',
    bg: 'bg-alabaster/40',
    speed: 0.4,
  },
  {
    id: 'metrics',
    span: '',
    icon: Award,
    label: '04 / Performance Matrix',
    title: null, // special metrics card
    desc: null,
    tags: [],
    cta: null,
    bg: 'bg-navy text-alabaster shadow-xl',
    speed: -0.15,
  },
  {
    id: 'design',
    span: '',
    icon: Layers,
    label: '05 / Editorial Aesthetics',
    title: 'Luxurious UI/UX Design',
    desc: 'Tailored visual identities using our strict signature layout rules: perfect geometric balance, gorgeous typography, and micro-animations.',
    tags: [],
    cta: 'View Design Style',
    bg: 'bg-alabaster/40',
    speed: 0.25,
  },
  {
    id: 'mobile',
    span: '',
    icon: Smartphone,
    label: '06 / Native Platforms',
    title: 'Mobile Application Suite',
    desc: 'Build crisp, high-performance native iOS and Android experiences utilizing React Native and Expo frameworks.',
    tags: [],
    cta: 'Start App Build',
    bg: 'bg-alabaster/40',
    speed: -0.2,
  },
  {
    id: 'security',
    span: 'md:col-span-2',
    icon: Shield,
    label: '07 / Threat Protection',
    title: 'Enterprise Cybersecurity',
    desc: 'Thorough penetration auditing, API vulnerability shield architectures, SSL enforcement, DDOS prevention layers, and compliant security frameworks to safeguard private consumer records and data pipelines.',
    tags: ['Penetration Testing', 'API Auditing', 'OAuth 2.1', 'SSL Shield'],
    cta: 'Request Security Audit',
    bg: 'bg-alabaster/40',
    speed: 0.3,
  },
];

// ── Individual parallax-floating card wrapper ────────────────────────
const ParallaxCard = ({ card, scrollYProgress, onNavigate, index }) => {
  const IconComponent = card.icon;
  const yOffset = useTransform(scrollYProgress, [0, 1], [0, card.speed * 120]);
  const isMetrics = card.id === 'metrics';
  const isLight = !card.bg.includes('navy');

  return (
    <motion.div
      style={{ y: yOffset }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        delay: index * 0.06,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      className={`${card.span} glass-panel rounded-[2rem] p-8 flex flex-col justify-between min-h-[300px] bento-card-hover group relative overflow-hidden ${card.bg}`}
    >
      {/* Decorative glow blob */}
      {(card.span === 'md:col-span-2') && (
        <div className="absolute top-0 right-0 w-64 h-64 bg-coral/5 rounded-full blur-3xl pointer-events-none transition-opacity group-hover:opacity-100" />
      )}

      {isMetrics ? (
        /* ── Metrics card (special dark layout) ─────────────────── */
        <>
          <div className="flex justify-between items-start">
            <div className="p-4 rounded-2xl bg-alabaster/10 text-coral">
              <IconComponent className="w-6 h-6" />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-alabaster/40 uppercase">{card.label}</span>
          </div>

          <div className="my-6">
            <div className="font-heading text-5xl font-black text-coral leading-none mb-2">25+</div>
            <div className="font-heading text-lg font-bold tracking-tight text-alabaster">
              SaaS & AI Systems Delivered
            </div>
            <p className="font-sans text-xs text-alabaster/60 mt-2 leading-relaxed">
              Successful product handovers, 100% client transparency, weekly staging rollouts, and stellar agile engineering quality.
            </p>
          </div>

          <div className="flex items-center gap-2 border-t border-alabaster/10 pt-4">
            <Activity className="w-4 h-4 text-coral animate-pulse" />
            <span className="font-mono text-[10px] text-alabaster/60 tracking-wider">SYSTEMS STABLE & ONLINE</span>
          </div>
        </>
      ) : (
        /* ── Standard service card ──────────────────────────────── */
        <>
          <div className="flex justify-between items-start">
            <div className={`p-4 rounded-2xl ${isLight ? 'bg-navy/5 text-navy group-hover:bg-coral group-hover:text-alabaster' : 'bg-alabaster/10 text-coral'} transition-colors duration-300`}>
              <IconComponent className="w-6 h-6" />
            </div>
            <span className={`font-mono text-[10px] tracking-widest uppercase ${isLight ? 'text-navy/40' : 'text-alabaster/40'}`}>{card.label}</span>
          </div>

          <div className="mt-8">
            <h3 className={`font-heading ${card.span ? 'text-2xl' : 'text-xl'} font-black mb-3 ${isLight ? 'text-navy group-hover:text-coral' : 'text-alabaster'} transition-colors`}>
              {card.title}
            </h3>
            <p className={`font-sans text-sm leading-relaxed ${card.span ? 'max-w-xl' : ''} ${isLight ? 'text-navy/70' : 'text-alabaster/70'}`}>
              {card.desc}
            </p>
            {card.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {card.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] bg-navy/5 text-navy/60 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            )}
          </div>

          {card.cta && (
            <button
              onClick={() => onNavigate('services')}
              className={`flex items-center gap-2 font-heading text-xs font-black uppercase tracking-wider mt-6 ${isLight ? 'text-navy group-hover:text-coral' : 'text-coral'} transition-colors`}
            >
              <span>{card.cta}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          )}
        </>
      )}
    </motion.div>
  );
};

// ── Main BentoGrid ──────────────────────────────────────────────────
const BentoGrid = ({ onNavigate }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section heading with 3D character split reveal */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-coral font-bold mb-3"
        >
          Specialized Competencies
        </motion.div>

        <h2 className="font-heading text-3xl md:text-5xl font-black tracking-tight text-navy leading-[1.1] mb-6">
          <SplitReveal>Our Core Service Architecture</SplitReveal>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-sans text-navy/70 text-base md:text-lg leading-relaxed"
        >
          Discover how we synthesize advanced digital architectures and AI systems to accelerate operational performance and digital growth.
        </motion.p>
      </div>

      {/* Grid with per-cell scroll parallax */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <ParallaxCard
            key={card.id}
            card={card}
            index={i}
            scrollYProgress={scrollYProgress}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
