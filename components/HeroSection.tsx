"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MagneticButton from "./MagneticButton";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Badge pop
      if (badgeRef.current) {
        tl.to(badgeRef.current, {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.05,
        });
      }

      // Title lines stagger
      if (titleRef.current) {
        const lines = titleRef.current.querySelectorAll(".hero-line");
        tl.to(
          lines,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.3"
        );
      }

      // Description reveal
      if (descRef.current) {
        tl.to(descRef.current, { y: 0, opacity: 1, duration: 0.5 }, "-=0.3");
      }

      // CTA buttons reveal
      if (ctaRef.current) {
        tl.to(
          ctaRef.current.children,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
          },
          "-=0.2"
        );
      }

      // Scroll indicator reveal + infinite bounce
      if (scrollIndicatorRef.current) {
        tl.to(
          scrollIndicatorRef.current,
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.2"
        );

        const dot = scrollIndicatorRef.current.querySelector(".scroll-dot");
        if (dot) {
          gsap.to(dot, {
            y: 16,
            opacity: 0.3,
            duration: 1.4,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
        }
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="home"
      className="pt-24 sm:pt-36 lg:pt-40 pb-10 sm:pb-20 overflow-hidden relative min-h-[85vh] sm:min-h-screen flex flex-col justify-center select-none"
    >
      {/* High-performance CSS Radial Gradients */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[radial-gradient(circle,rgba(212,255,62,0.1)_0%,transparent_70%)] -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[radial-gradient(circle,rgba(212,255,62,0.1)_0%,transparent_70%)] translate-x-1/2 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(212,255,62,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center text-center relative z-10 w-full">
        <div className="max-w-5xl mx-auto my-auto pt-4 sm:pt-10 pb-4 sm:pb-8">
          {/* Location Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-brand-950/40 border border-brand-500/30 text-brand-400 font-bold text-[11px] sm:text-sm md:text-base mb-4 sm:mb-8 shadow-[0_0_15px_rgba(212,255,62,0.1)] opacity-0 -translate-y-3 scale-95 will-change-transform"
          >
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-brand-500"></span>
            </span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400 inline" />
            <span>Aashiana, Lucknow • Premium Facility</span>
          </div>

          {/* Main Hero Heading */}
          <h1
            ref={titleRef}
            className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-black tracking-tighter text-white leading-[1.08] sm:leading-[0.95] mb-4 sm:mb-8"
          >
            <span className="hero-line block opacity-0 translate-y-8 will-change-transform">LUCKNOW&apos;S</span>
            <span className="hero-line block text-transparent bg-clip-text bg-gradient-to-br from-brand-300 via-brand-500 to-brand-600 opacity-0 translate-y-8 will-change-transform">
              ELEVANA
            </span>
            <span className="hero-line block opacity-0 translate-y-8 will-change-transform">FITNESS SANCTUARY</span>
          </h1>

          <p
            ref={descRef}
            className="text-sm sm:text-xl md:text-2xl text-gray-400 mb-6 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-normal px-2 opacity-0 translate-y-5 will-change-transform"
          >
            <span className="sm:hidden">
              State-of-the-art equipment & elite personal training in Aashiana, Lucknow. Stop settling for ordinary.
            </span>
            <span className="hidden sm:inline">
              State-of-the-art biomechanical equipment, elite personal training, and Lucknow&apos;s most passionate fitness community in Aashiana. Stop settling for ordinary.
            </span>
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-3.5 sm:gap-6 justify-center items-center w-full max-w-xs sm:max-w-none mx-auto"
          >
            <MagneticButton strength={0.15} textStrength={0.08} className="w-full sm:w-auto opacity-0 translate-y-4 will-change-transform">
              <Link
                href="#pricing"
                className="bg-brand-500 hover:bg-brand-400 text-black px-6 sm:px-12 py-3.5 sm:py-5 rounded-full font-black text-base sm:text-xl md:text-2xl transition-all hover:-translate-y-0.5 shadow-[0_0_30px_rgba(212,255,62,0.35)] hover:shadow-[0_0_45px_rgba(212,255,62,0.55)] w-full sm:w-auto uppercase tracking-wide flex items-center justify-center gap-2.5 sm:gap-3 group active:scale-95 text-center"
              >
                Join ELevana Fitness
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </MagneticButton>

            <Link
              href="#facilities"
              className="opacity-0 translate-y-4 will-change-transform bg-black/60 border-2 border-gray-700 hover:border-brand-500/60 hover:bg-gray-900/80 text-white px-6 sm:px-12 py-3.5 sm:py-5 rounded-full font-bold text-base sm:text-xl md:text-2xl transition-all hover:-translate-y-0.5 w-full sm:w-auto uppercase tracking-wide block active:scale-95 text-center"
            >
              Book a Free Tour
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="mt-auto pb-2 sm:pb-4 flex flex-col items-center gap-1.5 sm:gap-2 opacity-0 translate-y-3 will-change-transform"
        >
          <span className="text-gray-500 text-[10px] sm:text-sm font-bold tracking-widest uppercase">
            Scroll To Explore
          </span>
          <div className="w-1.5 h-9 sm:h-12 bg-gray-800 rounded-full overflow-hidden relative p-0.5">
            <div className="scroll-dot w-full h-3 sm:h-4 bg-brand-500 rounded-full shadow-[0_0_8px_rgba(212,255,62,0.8)]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
