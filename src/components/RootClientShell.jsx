'use client';

import PerspectiveGrid from './PerspectiveGrid';
import NavbarWrapper from './NavbarWrapper';
import PreloaderWrapper from './PreloaderWrapper';
import SmoothScroll from './SmoothScroll';
import { CinematicFooter } from './ui/motion-footer';
import StickyContact from './StickyContact';

export default function RootClientShell({ children }) {
  return (
    <>
      <SmoothScroll>
        <PreloaderWrapper />

        <div className="relative z-10 bg-alabaster" style={{ clipPath: 'inset(0 0 0 0)' }}>
          <PerspectiveGrid />
          <NavbarWrapper />
          <main className="grow pt-28 pb-16 relative z-10">{children}</main>
        </div>
      </SmoothScroll>

      <div className="relative z-5">
        <CinematicFooter />
      </div>

      <StickyContact />
    </>
  );
}
