import './globals.css';
import PerspectiveGrid from '../components/PerspectiveGrid';
import NavbarWrapper from '../components/NavbarWrapper';
import PreloaderWrapper from '../components/PreloaderWrapper';
import SmoothScroll from '../components/SmoothScroll';
import { CinematicFooter } from '../components/ui/motion-footer';

export const metadata = {
  title: 'Ekavex | Premium Web, AI & Automation Solutions',
  description: 'A high-end editorial digital agency specializing in premium web development, custom AI agent systems, and top-tier UI/UX designs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen font-sans antialiased text-navy selection:bg-coral/20 selection:text-navy bg-[#FFFDF6] overflow-x-hidden">
        <SmoothScroll>
          {/* Preloader overlay — z-50, above everything */}
          <PreloaderWrapper />

        {/* 
          Content wrapper — clip-path: inset(0) clips ALL fixed children
          (PerspectiveGrid + Navbar) to this wrapper's bounds, so they
          don't bleed into the cinematic footer area below.
        */}
        <div
          className="relative z-10 bg-[#FFFDF6]"
          style={{ clipPath: 'inset(0 0 0 0)' }}
        >
          {/* WebGL grid — fixed background, clipped to this wrapper */}
          <PerspectiveGrid />

          {/* Floating sticky navbar */}
          <NavbarWrapper />

          {/* Content body */}
          <main className="grow pt-28 pb-16 relative z-10">
            {children}
          </main>
        </div>
        </SmoothScroll>

        {/* Cinematic Curtain-Reveal Footer — z-[5], above grid, below content */}
        <div className="relative z-[5]">
          <CinematicFooter />
        </div>
      </body>
    </html>
  );
}
