"use client";

import { useState, useRef } from "react";
import { Sparkles, Dumbbell, Flame, Zap, ShieldCheck, Users, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const zones = [
  {
    id: "01",
    title: "Hammer Strength Free Weights",
    category: "Heavy Strength",
    tagline: "Uncompromised Pure Iron Sanctuary",
    mobileDesc: "Squat racks, Olympic platforms, and calibrated dumbbells up to 150 lbs.",
    desktopDesc: "Multiple competition squat racks, dedicated Olympic lifting platforms, and calibrated cast-iron dumbbells up to 150 lbs so your training never pauses.",
    icon: Dumbbell,
    accent: "from-brand-500/25 via-brand-900/10 to-transparent",
    glowColor: "rgba(212, 255, 62, 0.15)",
    tagClass: "text-brand-400 border-brand-500/40 bg-brand-500/10",
    mobileSpecs: ["10+ Squat Racks", "Dumbbells to 150lbs"],
    desktopSpecs: ["10+ Squat Racks", "Eleiko Plates", "Dumbbells up to 150 lbs", "Deadlift Platforms"],
  },
  {
    id: "02",
    title: "Cardio & High-Conditioning",
    category: "Endurance & Speed",
    tagline: "Biomechanical Aerobic Performance",
    mobileDesc: "Concept2 rowers, SkiErgs, assault air-bikes, and curved treadmills.",
    desktopDesc: "Concept2 rowers, SkiErgs, assault air-bikes, and curved slat-belt treadmills designed for maximum calorie expenditure and cardiovascular endurance.",
    icon: Flame,
    accent: "from-orange-500/25 via-orange-900/10 to-transparent",
    glowColor: "rgba(249, 115, 22, 0.15)",
    tagClass: "text-orange-400 border-orange-500/40 bg-orange-500/10",
    mobileSpecs: ["Concept2 Rowers", "Assault AirBikes"],
    desktopSpecs: ["Concept2 Rowers", "Assault AirBikes", "Curved Treadmills", "StairMasters"],
  },
  {
    id: "03",
    title: "Functional Athletic Turf",
    category: "Athletic Power",
    tagline: "Explosive Biomechanics & Agility",
    mobileDesc: "40-meter sprint turf for heavy prowler sled pushes and agility drills.",
    desktopDesc: "A massive 40-meter continuous high-density turf runway for heavy prowler sled pushes, tire flips, battle ropes, and explosive agility drills.",
    icon: Zap,
    accent: "from-yellow-500/25 via-yellow-900/10 to-transparent",
    glowColor: "rgba(234, 179, 8, 0.15)",
    tagClass: "text-yellow-400 border-yellow-500/40 bg-yellow-500/10",
    mobileSpecs: ["40m Sprint Turf", "Prowler Sleds"],
    desktopSpecs: ["40m Sprint Turf", "Prowler Sleds", "Plyo Jump Boxes", "Battle Ropes"],
  },
  {
    id: "04",
    title: "Therapy & Bio-Recovery Lounge",
    category: "Recovery & Sauna",
    tagline: "Rapid Cellular Regeneration",
    mobileDesc: "Hyperice percussion guns, NormaTec compression boots, and dry sauna.",
    desktopDesc: "Hyperice percussion massage guns, NormaTec pneumatic compression boots, and Finnish dry sauna suites to accelerate muscle repair and decrease soreness.",
    icon: ShieldCheck,
    accent: "from-emerald-500/25 via-emerald-900/10 to-transparent",
    glowColor: "rgba(16, 185, 129, 0.15)",
    tagClass: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
    mobileSpecs: ["NormaTec 3 Boots", "Swedish Dry Sauna"],
    desktopSpecs: ["NormaTec 3 Boots", "Hypervolt Percussion", "Swedish Dry Sauna", "Infrared Bays"],
  },
  {
    id: "05",
    title: "Group Energy & Fitness Studio",
    category: "Classes & Rhythm",
    tagline: "High-Octane Community Energy",
    mobileDesc: "40+ weekly classes: HIIT, CrossFit conditioning, and Power Yoga.",
    desktopDesc: "A dedicated acoustic-treated studio hosting over 40+ weekly classes—including HIIT, CrossFit conditioning, and Power Yoga led by certified master coaches.",
    icon: Users,
    accent: "from-purple-500/25 via-purple-900/10 to-transparent",
    glowColor: "rgba(168, 85, 247, 0.15)",
    tagClass: "text-purple-400 border-purple-500/40 bg-purple-500/10",
    mobileSpecs: ["40+ Classes Weekly", "HIIT & Power Yoga"],
    desktopSpecs: ["40+ Classes Weekly", "Surround Sound", "HIIT & Power Yoga", "CrossFit Studio"],
  },
];

export default function CoreFeatures() {
  const [activeZone, setActiveZone] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const pinTargetRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const pinTarget = pinTargetRef.current;
      if (!container || !pinTarget) return;

      // Enable pinning on desktop/large screens for scrollytelling
      if (window.innerWidth >= 1024) {
        const total = zones.length;

        const st = ScrollTrigger.create({
          trigger: container,
          pin: pinTarget,
          start: "top top",
          end: "+=220%",
          scrub: 0.3,
          anticipatePin: 1,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * total * 0.999),
              total - 1
            );
            setActiveZone(index);
          },
        });

        triggerRef.current = st;

        return () => {
          st.kill();
        };
      }
    },
    { scope: containerRef }
  );

  const handleTabClick = (index: number) => {
    setActiveZone(index);
    if (triggerRef.current && containerRef.current && window.innerWidth >= 1024) {
      const st = triggerRef.current;
      const start = st.start;
      const end = st.end;
      const targetProgress = (index + 0.1) / zones.length;
      const targetScroll = start + (end - start) * targetProgress;
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={containerRef}
      id="classes"
      className="relative bg-[#000000] border-t border-gray-900 overflow-hidden min-h-0 lg:min-h-screen"
    >
      {/* Viewport Container */}
      <div
        ref={pinTargetRef}
        className="w-full min-h-0 lg:h-screen flex flex-col justify-center overflow-hidden py-6 sm:py-10 lg:py-0"
      >
        {/* Background radial ambient glow */}
        <div
          className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] rounded-full pointer-events-none transition-colors duration-500"
          style={{
            background: `radial-gradient(circle, ${zones[activeZone].glowColor} 0%, transparent 70%)`,
          }}
        />

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col justify-center h-full max-h-[880px]">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-3 sm:mb-8 gap-2 sm:gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-4 sm:py-1.5 rounded-full bg-brand-950/40 border border-brand-500/30 text-brand-400 font-bold text-[10px] sm:text-sm uppercase tracking-widest mb-1.5 sm:mb-2">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-brand-400" />
                15,000 SQ FT SANCTUARY
              </div>
              <h2 className="text-2xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">
                World-Class Zones
              </h2>
              <p className="text-[11px] sm:text-base md:text-lg text-gray-400 mt-0.5 sm:mt-1 max-w-2xl">
                Meticulously engineered training ecosystems in Aashiana. Tap or scroll to explore.
              </p>
            </div>

            {/* Step Progress Counter & Bar (Hidden on mobile) */}
            <div className="w-full md:w-64 shrink-0 hidden sm:block">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1.5">
                <span className="text-gray-400 font-semibold">Zone Progression</span>
                <span className="text-brand-400 font-black">
                  0{activeZone + 1} <span className="text-gray-600">/ 0{zones.length}</span>
                </span>
              </div>
              <div className="h-1.5 w-full bg-gray-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-500 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${((activeZone + 1) / zones.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Interactive Zone Navigation Pills */}
          <div className="flex items-center gap-1.5 sm:gap-3 overflow-x-auto pb-1.5 mb-3 sm:mb-8 no-scrollbar select-none">
            {zones.map((zone, idx) => {
              const isSelected = idx === activeZone;
              return (
                <button
                  key={zone.id}
                  onClick={() => handleTabClick(idx)}
                  type="button"
                  className={`px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-black uppercase tracking-wider whitespace-nowrap transition-all duration-200 flex items-center gap-1 sm:gap-2 border cursor-pointer ${
                    isSelected
                      ? "bg-brand-500 text-black border-brand-400 shadow-[0_0_20px_rgba(212,255,62,0.35)] scale-100"
                      : "bg-[#0a0a0a] text-gray-400 border-gray-800 hover:border-gray-700 hover:text-white"
                  }`}
                >
                  <span className={isSelected ? "text-black" : "text-brand-500 font-bold"}>
                    {zone.id}
                  </span>
                  <span>{zone.category}</span>
                </button>
              );
            })}
          </div>

          {/* Un-squished Responsive Compact Card Stage */}
          <div className="relative w-full min-h-0 sm:min-h-[420px] lg:min-h-[440px]">
            {zones.map((zone, idx) => {
              const isActive = idx === activeZone;
              const IconComp = zone.icon;

              return (
                <div
                  key={zone.id}
                  className={`transition-all duration-300 ease-out ${
                    isActive
                      ? "opacity-100 translate-y-0 scale-100 pointer-events-auto z-10 relative lg:absolute lg:inset-0"
                      : "opacity-0 translate-y-3 scale-[0.99] pointer-events-none z-0 hidden lg:block lg:absolute lg:inset-0"
                  }`}
                >
                  {/* Single Clean Compact Card on Mobile (< lg), Pinned Split View on Desktop (lg:) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-stretch h-full">
                    
                    {/* Left Visual Card (Desktop: 5 cols / Mobile: hidden) */}
                    <div className="lg:col-span-5 h-full hidden lg:block">
                      <div className="w-full h-full min-h-[420px] bg-[#0a0a0a] rounded-[2.5rem] border border-gray-800 flex flex-col justify-between p-8 relative overflow-hidden shadow-2xl">
                        {/* Gradient Backdrop */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${zone.accent} pointer-events-none opacity-80`}
                        />

                        {/* Header Badge */}
                        <div className="flex justify-between items-center relative z-10">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border ${zone.tagClass}`}
                          >
                            {zone.category}
                          </span>
                          <span className="text-5xl font-black text-white/20 tracking-tighter">
                            {zone.id}
                          </span>
                        </div>

                        {/* Center Icon */}
                        <div className="my-auto py-4 flex items-center justify-center relative z-10">
                          <div className="w-24 h-24 rounded-3xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-brand-400 shadow-[0_0_30px_rgba(212,255,62,0.25)]">
                            <IconComp className="w-12 h-12 stroke-[1.8]" />
                          </div>
                        </div>

                        {/* Tagline */}
                        <div className="relative z-10">
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                            {zone.tagline}
                          </div>
                          <h3 className="text-xl font-black text-white tracking-tight">
                            {zone.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Right Details Card (Desktop: 7 cols / Mobile: full compact card) */}
                    <div className="lg:col-span-7 h-full flex flex-col">
                      <div className="w-full h-full bg-[#0a0a0a] border border-gray-800 rounded-2xl sm:rounded-[2.5rem] p-4 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                        <div>
                          {/* Mobile Icon & Header Row */}
                          <div className="flex items-center justify-between mb-2 lg:hidden">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400">
                                <IconComp className="w-4 h-4 stroke-[2]" />
                              </div>
                              <span
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border ${zone.tagClass}`}
                              >
                                {zone.category}
                              </span>
                            </div>
                            <span className="text-xl font-black text-white/30 tracking-tighter">
                              {zone.id} / 05
                            </span>
                          </div>

                          <div className="hidden lg:flex text-brand-500 text-sm font-black uppercase tracking-widest mb-2 items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                            Zone Ecosystem {zone.id}
                          </div>

                          <h3 className="text-lg sm:text-3xl lg:text-4xl font-black text-white mb-1.5 sm:mb-3 leading-tight uppercase tracking-tight">
                            {zone.title}
                          </h3>

                          {/* Concise mobile text, full desktop text */}
                          <p className="text-gray-300 text-xs sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-6">
                            <span className="lg:hidden">{zone.mobileDesc}</span>
                            <span className="hidden lg:inline">{zone.desktopDesc}</span>
                          </p>

                          {/* Specs Badges */}
                          <div className="mb-3 sm:mb-6">
                            <div className="flex flex-wrap gap-1.5 sm:gap-2.5">
                              {/* Mobile Specs */}
                              <div className="flex flex-wrap gap-1.5 lg:hidden">
                                {zone.mobileSpecs.map((spec, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="px-2.5 py-1 rounded-lg bg-gray-900/90 border border-gray-800 text-gray-300 text-[10px] font-semibold flex items-center gap-1"
                                  >
                                    <span className="w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                                    <span>{spec}</span>
                                  </div>
                                ))}
                              </div>
                              {/* Desktop Specs */}
                              <div className="hidden lg:flex flex-wrap gap-2.5">
                                {zone.desktopSpecs.map((spec, sIdx) => (
                                  <div
                                    key={sIdx}
                                    className="px-4 py-2 rounded-xl bg-gray-900/90 border border-gray-800 text-gray-300 text-sm font-semibold flex items-center gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                                    <span>{spec}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Footer Actions */}
                        <div className="pt-2.5 sm:pt-4 border-t border-gray-900 flex items-center justify-between gap-2 sm:gap-4">
                          <span className="text-[10px] sm:text-xs text-gray-500 font-medium hidden sm:inline">
                            Available with Standard & VIP Memberships in Aashiana
                          </span>
                          <a
                            href="#pricing"
                            className="w-full sm:w-auto bg-brand-500 hover:bg-brand-400 text-black px-4 py-2 sm:px-7 sm:py-3 rounded-full font-black text-xs sm:text-sm transition-all hover:-translate-y-0.5 shadow-[0_0_20px_rgba(212,255,62,0.25)] flex items-center justify-center gap-1.5 sm:gap-2 uppercase tracking-wider active:scale-95 shrink-0"
                          >
                            Experience Zone
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
