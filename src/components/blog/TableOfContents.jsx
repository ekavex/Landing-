'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function TableOfContents({ toc, mobile = false }) {
  const [active, setActive] = useState(toc[0]?.id ?? '');
  const [open, setOpen] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const ids = toc.map((t) => t.id);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [toc]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (mobile) setOpen(false);
  };

  if (mobile) {
    return (
      <div className="glass-panel rounded-2xl overflow-hidden border-navy/8">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between px-5 py-4 font-mono text-[10px] uppercase tracking-widest text-navy/60 font-bold"
        >
          <span>On This Page</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              {toc.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`w-full text-left px-5 py-3 font-sans text-sm transition-colors duration-200 border-l-2 ${
                      active === item.id
                        ? 'border-coral text-black font-semibold bg-coral/5'
                        : 'border-transparent text-black hover:text-navy'
                    }`}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="sticky top-32 glass-panel rounded-3xl p-6">
      <p className="font-mono text-[10px] uppercase tracking-widest text-navy/40 font-bold mb-5">
        On This Page
      </p>
      <ul className="space-y-1">
        {toc.map((item) => (
          <li key={item.id} className="relative">
            <button
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left pl-4 pr-2 py-2 rounded-lg font-sans text-sm transition-all duration-200 ${
                active === item.id
                  ? 'text-black font-semibold bg-coral/5'
                  : 'text-black hover:text-navy'
              }`}
            >
              {active === item.id && (
                <motion.div
                  layoutId="tocActiveBar"
                  className="absolute left-0 top-1 bottom-1 w-0.75 rounded-full bg-coral"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
