"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { MessageSquare, ArrowRight, Mail } from "lucide-react";

import { useRouter } from 'next/navigation';
import { whatsappData } from '@/data/contactData';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image: 
          linear-gradient(to right, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* -------------------------------------------------------------------
     PHYSICAL SKEUOMORPHIC MATERIALS (Restored 3D Depth)
  ---------------------------------------------------------------------- */
  
  /* OUTSIDE THE CARD: Theme-aware text (Shadow in Light Mode, Glow in Dark Mode) */
  .text-3d-matte {
      color: var(--foreground);
      text-shadow: 
          0 10px 30px color-mix(in srgb, var(--foreground) 20%, transparent), 
          0 2px 4px color-mix(in srgb, var(--foreground) 10%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in srgb, var(--foreground) 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0); /* Hardware acceleration to prevent WebKit clipping bug */
      filter: 
          drop-shadow(0px 10px 20px color-mix(in srgb, var(--foreground) 15%, transparent)) 
          drop-shadow(0px 2px 4px color-mix(in srgb, var(--foreground) 10%, transparent));
  }

  /* INSIDE THE CARD: Hardcoded Silver/White for the dark background, deep rich shadows */
  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) 
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  /* Deep Physical Card with Dynamic Mouse Lighting */
  .premium-depth-card {
      background: linear-gradient(145deg, #09122C 0%, #040816 100%);
      box-shadow: 
          0 40px 100px -20px rgba(0, 0, 0, 0.9),
          0 20px 40px -20px rgba(0, 0, 0, 0.8),
          inset 0 1px 2px rgba(255, 255, 255, 0.1),
          inset 0 -2px 4px rgba(0, 0, 0, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.04);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  /* Realistic iPhone Mockup Hardware */
  .iphone-bezel {
      background-color: #111;
      box-shadow: 
          inset 0 0 0 2px #52525B, 
          inset 0 0 0 7px #000, 
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow: 
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }
  
  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow: 
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(24px); 
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  /* Physical Tactile Buttons */
  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
      color: #0F172A;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px);
      background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.02);
  }
  .btn-modern-dark {
      background: linear-gradient(180deg, #27272A 0%, #18181B 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #3F3F46 0%, #27272A 100%);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 6px 12px -2px rgba(0,0,0,0.7), 0 20px 32px -6px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:active {
      transform: translateY(1px);
      background: #18181B;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.05), inset 0 3px 8px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(0,0,0,0.5);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

export interface CinematicHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  brandName?: string;
  tagline1?: string;
  tagline2?: string;
  cardHeading?: string;
  cardDescription?: React.ReactNode;
  metricValue?: number;
  metricLabel?: string;
  ctaHeading?: string;
  ctaDescription?: string;
}

export function CinematicHero({
  brandName = "Ekavex",
  tagline1 = "Build Without Limits,",
  tagline2 = "Tech First Always.",
  cardHeading = "High-End Digital Solutions.",
  cardDescription = <><span className="text-white font-semibold">Ekavex</span> empowers enterprises with structured accountability, precise tracking, and beautiful visual timelines.</>,
  metricValue = 95,
  metricLabel = "Automation Rate",
  ctaHeading = "Start your project.",
  ctaDescription = "Join thousands of others in elevating their digital presence with Ekavex today.",
  className,
  ...props
}: CinematicHeroProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  const router = useRouter();
  const whatsappUrl = `https://wa.me/${whatsappData.number}?text=${encodeURIComponent(whatsappData.message)}`;
  

  // 1. High-Performance Mouse Interaction Logic (Using requestAnimationFrame)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);

      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // 2. Complex Cinematic Scroll Timeline
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      gsap.set(".text-track", { autoAlpha: 0, y: 60, scale: 0.85, filter: "blur(20px)", rotationX: -20 });
      gsap.set(".text-days", { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" });
      gsap.set(".main-card-bg", {
        y: window.innerHeight + 200,
        autoAlpha: 1
      });
      gsap.set(".main-card-content", { y: window.innerHeight + 200 });
      gsap.set(".cta-wrapper", { autoAlpha: 0 });

      // Hardware acceleration hints for scrubbed elements
      gsap.set([".hero-text-wrapper", ".bg-grid-theme", ".main-card-bg", ".main-card-content", ".cta-wrapper"], { willChange: "transform, opacity" });

      const introTl = gsap.timeline({ delay: 0.3 });
      introTl
        .to(".text-track", { duration: 1.8, autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", rotationX: 0, ease: "expo.out" })
        .to(".text-days", { duration: 1.4, clipPath: "inset(0 0% 0 0)", ease: "power4.inOut" }, "-=1.0");

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2200",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        // Removed heavy filter: blur() on scrub. Fade opacity instead for 60FPS.
        .to([".hero-text-wrapper", ".bg-grid-theme"], { scale: 1.1, opacity: 0, ease: "power2.inOut", duration: 2 }, 0)
        .to([".main-card-bg", ".main-card-content"], { y: 0, ease: "power3.inOut", duration: 2 }, 0)
        // Physical expansion via SCALE and BORDER-RADIUS (GPU accelerated, zero layout thrashing)
        .to(".main-card-bg", {
          scale: 1.35,
          borderRadius: "0px",
          ease: "power3.inOut",
          duration: 1.5
        })
        .fromTo(".cta-wrapper",
          { y: 60, autoAlpha: 0, scale: 0.95 },
          { y: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2 }, "-=0.8"
        )
        .to({}, { duration: 1.0 });

    }, containerRef);

    return () => ctx.revert();
  }, [metricValue]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-screen overflow-hidden flex items-center justify-center bg-transparent text-foreground font-sans antialiased", className)}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

      {/* BACKGROUND LAYER: Hero Texts */}
      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 will-change-transform transform-style-3d">
        <h1 className="text-track gsap-reveal text-3d-matte text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight mb-2">
          {tagline1}
        </h1>
        <h1 className="text-days sm:pb-5 gsap-reveal text-silver-matte text-5xl md:text-7xl lg:text-[6rem] font-extrabold tracking-tighter">
          {tagline2}
        </h1>
      </div>



      {/* FOREGROUND LAYER: The Physical Deep Blue Card */}
      <div className="absolute inset-0 z-20 pointer-events-none" style={{ perspective: "1500px" }}>

        {/* Isolated scalable background (Prevents layout thrashing) */}
        <div
          ref={mainCardRef}
          className="main-card-bg premium-depth-card absolute inset-0 m-auto overflow-hidden gsap-reveal w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] rounded-4xl md:rounded-[40px] will-change-transform"
        >
          <div className="card-sheen" aria-hidden="true" />
        </div>

        {/* Static content container (Text doesn't reflow) */}
        <div className="main-card-content absolute inset-0 m-auto z-30 w-[92vw] md:w-[85vw] h-[92vh] md:h-[85vh] flex flex-col items-center justify-center text-center px-4 md:px-12 py-16 md:py-24 pointer-events-auto will-change-transform">
          <div className="cta-wrapper gsap-reveal flex flex-col items-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-4 py-1.5 mb-8 md:mb-12 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-sm">
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/80 uppercase">Ready To Begin</span>
            </div>

            {/* Serif Headline */}
            <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] font-serif text-white tracking-tight mb-6 md:mb-8">
              Let's Build <br className="hidden md:block" />
              <span className="text-white/95">Something Extraordinary</span>
            </h2>

            {/* Description */}
            <p className="text-blue-100/70 text-sm sm:text-base md:text-xl leading-relaxed mb-10 md:mb-14 max-w-2xl">
              Partner with us to transform your vision into an AI-powered reality. Book a discovery call and let's explore what's possible.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 w-full sm:w-auto">
              <button onClick={() => router.push('/contact')}
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8 py-4 md:py-4 bg-white text-navy font-bold rounded-xl md:rounded-2xl hover:bg-neutral-100 transition-all duration-300 shadow-[0_4px_14px_0_rgba(255,255,255,0.15)] hover:shadow-[0_8px_25px_0_rgba(255,255,255,0.2)] hover:-translate-y-0.5">
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-base md:text-lg">Book a Call</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <a href={whatsappUrl}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8 py-4 md:py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-base md:text-lg">Send a Brief</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
