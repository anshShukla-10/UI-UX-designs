"use client";

import { useRef } from "react";
import { Dumbbell, Users, Droplets, HeartPulse, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BentoGrid() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Stagger reveal with ScrollTrigger
      const cards = cardsRef.current?.querySelectorAll(".bento-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="facilities"
      className="py-20 sm:py-32 bg-[#000000] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[800px] h-[90vw] sm:h-[800px] bg-[radial-gradient(circle,rgba(212,255,62,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-950/40 border border-brand-500/30 text-brand-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-brand-400" />
            Designed For Champions
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter">
            More Than Just A Gym
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 leading-relaxed">
            We built ELevana Fitness to be Lucknow&apos;s ultimate fitness sanctuary. Everything you need to transform your body and mind under one roof in Aashiana.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 auto-rows-auto"
        >
          {/* Card 1: Elite Personal Training */}
          <div className="bento-card md:col-span-2 bg-[#0a0a0a] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 flex flex-col justify-between border border-gray-800 hover:border-brand-500/50 group cursor-default relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-2xl min-h-[280px]">
            <div className="absolute right-0 top-0 w-80 h-80 bg-[radial-gradient(circle,rgba(212,255,62,0.08)_0%,transparent_70%)] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-brand-900/40 rounded-2xl flex items-center justify-center text-brand-400 mb-6 sm:mb-8 border border-brand-500/20 group-hover:scale-105 transition-transform duration-300">
                <Dumbbell className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight">
                Elite Personal Training
              </h3>
              <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
                Work with Lucknow&apos;s top certified coaches who build customized biomechanical roadmaps tailored to your unique physiology and goals.
              </p>
            </div>
          </div>

          {/* Card 2: High-Energy Classes */}
          <div className="bento-card bg-[#0a0a0a] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-between border border-gray-800 hover:border-blue-500/50 group cursor-default relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-2xl min-h-[280px]">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-400 mb-6 sm:mb-8 border border-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <HeartPulse className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4 tracking-tight">
                High-Energy Classes
              </h3>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                From HIIT and CrossFit to Power Yoga and Zumba. Sweat and break barriers together.
              </p>
            </div>
          </div>

          {/* Card 3: Luxury Amenities */}
          <div className="bento-card bg-brand-600 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-between group cursor-default relative overflow-hidden border border-brand-500 transition-all duration-300 hover:-translate-y-1 shadow-2xl min-h-[280px]">
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-[radial-gradient(circle,rgba(0,0,0,0.3)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black/20 rounded-2xl flex items-center justify-center text-white mb-6 sm:mb-8 border border-white/20 group-hover:scale-105 transition-transform duration-300">
                <Droplets className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4 tracking-tight">
                Luxury Amenities
              </h3>
              <p className="text-brand-950 text-base sm:text-lg font-semibold leading-relaxed">
                Premium locker suites, Swedish sauna, steam hydrotherapy, and a recovery lounge to heal fast.
              </p>
            </div>
          </div>

          {/* Card 4: Lucknow Community */}
          <div className="bento-card md:col-span-2 bg-[#0a0a0a] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 flex flex-col justify-between border border-gray-800 hover:border-purple-500/50 group cursor-default relative overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-2xl min-h-[280px]">
            <div className="absolute left-0 top-0 w-80 h-80 bg-[radial-gradient(circle,rgba(168,85,247,0.08)_0%,transparent_70%)] -translate-y-1/3 -translate-x-1/4 pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row gap-8 sm:gap-10 items-start md:items-center justify-between h-full">
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 mb-6 sm:mb-8 border border-purple-500/20 group-hover:scale-105 transition-transform duration-300">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4 tracking-tight">
                  The Lucknow Community
                </h3>
                <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed">
                  Join hundreds of local athletes, professionals, and dedicated lifters across Lucknow pushing each other to exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
