'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Blog from '../../components/Blog';

export default function BlogPage() {
  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <motion.div key="blog" {...pageTransition}>
      <Blog />
    </motion.div>
  );
}
