"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function LogoMarquee() {
  const containerRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const logos = [
    "Hammer Strength",
    "Rogue Fitness",
    "Life Fitness",
    "Eleiko",
    "Concept2",
    "ELevana Lifters",
    "Technogym",
    "Arsenal Strength",
    "Lucknow Athletes",
  ];

  useGSAP(
    () => {
      const items = containerRef.current?.querySelectorAll(".brand-item");
      if (!items) return;

      items.forEach((item) => {
        const onEnter = () => {
          gsap.to(item, {
            scale: 1.08,
            color: "#D4FF3E",
            duration: 0.25,
            ease: "power2.out",
          });
        };
        const onLeave = () => {
          gsap.to(item, {
            scale: 1,
            color: "#374151",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        item.addEventListener("mouseenter", onEnter);
        item.addEventListener("mouseleave", onLeave);
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-10 sm:py-16 bg-[#000000] border-y border-gray-900 overflow-hidden relative select-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900/10 via-transparent to-transparent pointer-events-none" />
      <p className="text-center text-xs sm:text-base font-bold text-gray-500 mb-6 sm:mb-8 uppercase tracking-[0.25em]">
        Equipped With Industry Gold Standards
      </p>
      <div className="relative w-full flex overflow-x-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000] via-transparent to-[#000000] pointer-events-none w-full"></div>
        <div
          ref={marqueeRef}
          className="animate-marquee whitespace-nowrap flex items-center gap-10 sm:gap-20 md:gap-28"
        >
          {logos.map((logo, index) => (
            <span
              key={`logo-1-${index}`}
              className="brand-item text-2xl sm:text-4xl md:text-5xl font-black text-gray-700 uppercase tracking-tighter cursor-pointer transition-colors duration-150 inline-block px-3 py-1"
            >
              {logo}
            </span>
          ))}
          {logos.map((logo, index) => (
            <span
              key={`logo-2-${index}`}
              className="brand-item text-2xl sm:text-4xl md:text-5xl font-black text-gray-700 uppercase tracking-tighter cursor-pointer transition-colors duration-150 inline-block px-3 py-1"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
