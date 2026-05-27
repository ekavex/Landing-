'use client';

import React, { useState, useEffect } from 'react';
import Preloader from './Preloader';

export default function PreloaderWrapper() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Lock body scroll while preloader is active
    document.body.style.overflow = 'hidden';
  }, []);

  const handleComplete = () => {
    document.body.style.overflow = '';
    setLoading(false);
  };

  // Don't render anything until mounted on client (avoids hydration mismatch)
  if (!mounted) return null;
  if (!loading) return null;

  return <Preloader onComplete={handleComplete} />;
}
