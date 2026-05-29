'use client';

import { Info, Quote } from 'lucide-react';

export default function Callout({ type = 'info', children }) {
  if (type === 'quote') {
    return (
      <blockquote className="border-l-4 border-coral bg-coral/5 rounded-r-2xl px-6 py-5 my-8">
        <Quote className="w-5 h-5 text-coral mb-3 opacity-60" />
        <div className="font-heading text-lg font-bold text-navy leading-snug">{children}</div>
      </blockquote>
    );
  }

  return (
    <div className="flex gap-4 glass-panel rounded-2xl px-6 py-5 my-8 border-coral/20 bg-coral/3">
      <Info className="w-5 h-5 text-coral shrink-0 mt-0.5" />
      <div className="font-sans text-sm text-navy/80 leading-relaxed">{children}</div>
    </div>
  );
}
