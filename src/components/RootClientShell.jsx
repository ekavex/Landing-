'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import PerspectiveGrid from './PerspectiveGrid';
import NavbarWrapper from './NavbarWrapper';
import PreloaderWrapper from './PreloaderWrapper';
import SmoothScroll from './SmoothScroll';
import { CinematicFooter } from './ui/motion-footer';
import StickyContact from './StickyContact';
import { blogPosts } from '../data/blogData';
import { servicesData } from '../data/servicesData';

export default function RootClientShell({ children }) {
  const pathname = usePathname() || '/';

  const hideShell = useMemo(() => {
    const validStaticPaths = [
      '/',
      '/about',
      '/contact',
      '/portfolio',
      '/privacy-policy',
      '/blog',
      '/blog/author',
      '/services'
    ];

    if (validStaticPaths.includes(pathname)) {
      return false;
    }

    if (pathname.startsWith('/blog/')) {
      const slug = pathname.replace('/blog/', '').trim();
      return !blogPosts.some((post) => post.slug === slug);
    }

    if (pathname.startsWith('/services/')) {
      const slug = pathname.replace('/services/', '').trim();
      return !servicesData.some((service) => service.slug === slug);
    }

    return true;
  }, [pathname]);

  return (
    <>
      <SmoothScroll>
        <PreloaderWrapper />

        <div className="relative z-10 bg-alabaster" style={{ clipPath: 'inset(0 0 0 0)' }}>
          {!hideShell && <PerspectiveGrid />}
          {!hideShell && <NavbarWrapper />}
          <main className={hideShell ? 'grow relative z-10' : 'grow pt-28 pb-16 relative z-10'}>{children}</main>
        </div>
      </SmoothScroll>

      {!hideShell && (
        <div className="relative z-5">
          <CinematicFooter />
        </div>
      )}

      {!hideShell && <StickyContact />}
    </>
  );
}
