'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const pathname = usePathname();
  const router = useRouter();

  // Map pathnames to IDs
  const pathToId = (path) => {
    if (path === '/') return 'home';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/portfolio')) return 'portfolio';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/blog')) return 'blog';
    if (path.startsWith('/contact')) return 'contact';
    return 'home';
  };

  const handleViewChange = (id) => {
    const targetPath = id === 'home' ? '/' : `/${id}`;
    router.push(targetPath);
  };

  return <Navbar activeView={pathToId(pathname)} onViewChange={handleViewChange} />;
}
