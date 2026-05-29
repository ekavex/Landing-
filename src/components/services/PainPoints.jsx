'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle, SearchX, Smartphone, TrendingDown,
  Puzzle, Lock, Users, CreditCard,
  ClipboardList, Clock, RefreshCw, Link,
  BarChart2, MessageSquare, Target, FileSearch,
  HelpCircle, Code, FolderOpen, UserX,
  Edit3, Calendar, DollarSign, Eye,
  Bell, Package, WifiOff,
} from 'lucide-react';

const iconMap = {
  AlertTriangle, SearchX, Smartphone, TrendingDown,
  Puzzle, Lock, Users, CreditCard,
  ClipboardList, Clock, RefreshCw, Link,
  BarChart2, MessageSquare, Target, FileSearch,
  HelpCircle, Code, FolderOpen, UserX,
  Edit3, Calendar, DollarSign, Eye,
  Bell, Package, WifiOff,
};

export default function PainPoints({ painPoints }) {
  return (
    <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="font-mono text-[10px] uppercase tracking-widest text-coral font-bold mb-3">
          The Problem
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-navy text-balance">
          Sound familiar?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {painPoints.map((point, i) => {
          const Icon = iconMap[point.icon] || AlertTriangle;
          return (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-3xl p-6 border border-coral/10 hover:border-coral/25 transition-colors duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                <Icon className="w-4.5 h-4.5 text-coral" />
              </div>
              <h3 className="font-heading text-sm font-black text-navy mb-2">{point.label}</h3>
              <p className="font-sans text-xs text-navy/60 leading-relaxed">{point.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
