"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Hammer Strength Free Weights",
    description: "Multiple squat racks, Olympic lifting platforms, and dumbbells up to 150lbs so you never have to wait for equipment.",
  },
  {
    id: "02",
    title: "Cardio & Conditioning",
    description: "Rowers, SkiErgs, assault bikes, and premium treadmills overlooking the city skyline.",
  },
  {
    id: "03",
    title: "Functional Turf Area",
    description: "A massive turf strip for sled pushes, tire flips, and agility drills to build real-world athletic power.",
  },
  {
    id: "04",
    title: "Recovery Lounge",
    description: "Percussion therapy guns, compression boots, and stretching areas to accelerate your recovery between intense sessions.",
  },
  {
    id: "05",
    title: "Group Fitness Studio",
    description: "A fully equipped, sound-proofed studio hosting over 40+ classes a week led by Chandigarh's most energetic instructors.",
  }
];

export default function CoreFeatures() {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  // Track the scroll progress through the entire 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const progressPercentage = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Update the active feature based on how far we've scrolled
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // latest is a value from 0 to 1. We multiply by number of features to get an index.
    const index = Math.min(
      Math.floor(latest * features.length),
      features.length - 1
    );
    if (index !== activeFeature) {
      setActiveFeature(index);
    }
  });

  return (
    <section 
      ref={containerRef}
      id="classes" 
      className="bg-[#000000] relative border-t border-gray-900"
      // Height = 100vh per feature. This creates the "scroll runway"
      style={{ height: `${features.length * 100}vh` }} 
    >
      {/* 
        This div is "sticky", meaning it will lock into place at the top of the screen
        and stay there while the user scrolls through the 500vh container height.
      */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-16 lg:pt-0">
        
        {/* Background glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80vw] lg:w-[50vw] h-[80vh] bg-brand-500/10 blur-[150px] rounded-full translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col h-full justify-center">
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-10%" }}
            className="mb-8 lg:mb-12 text-center lg:text-left origin-center lg:origin-left"
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-2 lg:mb-4 uppercase tracking-tighter">
              World-Class Zones
            </h2>
            <p className="text-lg lg:text-2xl text-gray-400 max-w-3xl mx-auto lg:mx-0">
              Over 15,000 sq ft of meticulously designed space. Scroll to explore.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 items-center flex-1 lg:flex-none">
            
            {/* Image/Asset Container - Takes less space on mobile */}
            <div className="w-full lg:w-1/2 relative flex justify-center h-48 sm:h-64 lg:h-auto">
              <div className="relative w-full max-w-md aspect-video lg:aspect-[4/5] bg-[#0a0a0a] rounded-[2rem] lg:rounded-[3rem] border border-gray-800 flex items-center justify-center overflow-hidden shadow-2xl">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 bg-[#111] flex flex-col justify-end p-6 lg:p-10"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/60 via-[#111]/80 to-[#111] z-10" />
                    
                    <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20">
                       <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-brand-500 lg:w-[200px] lg:h-[200px]">
                          <path d="M6 5V19M18 5V19M4 8H8M4 16H8M16 8H20M16 16H20M8 12H16M2 12H4M20 12H22"/>
                       </svg>
                    </div>

                    <div className="relative z-20 mt-auto">
                       <span className="text-brand-500 font-black text-xl lg:text-2xl tracking-widest mb-1 lg:mb-2 block uppercase">Area {features[activeFeature].id}</span>
                       <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white leading-tight">{features[activeFeature].title}</h3>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Desktop Vertical Progress Line (Hidden on Mobile) */}
            <div className="hidden lg:flex flex-col items-center justify-center h-[500px] relative shrink-0">
              <div className="w-1 h-full bg-gray-900 rounded-full relative overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 w-full bg-brand-500 rounded-full origin-top"
                  style={{ height: progressPercentage }}
                />
              </div>
              {/* Glowing Dot following exact scroll progress */}
              <motion.div 
                className="absolute w-6 h-6 bg-brand-500 rounded-full shadow-[0_0_20px_rgba(212,255,62,0.8)] border-4 border-black -translate-y-1/2"
                style={{ top: progressPercentage }}
              />
            </div>

            {/* Content Container - Takes remaining space on mobile */}
            <div className="w-full lg:w-1/2 flex flex-col mb-8 lg:mb-0">
              {/* Mobile Horizontal Progress Bar */}
              <div className="flex lg:hidden gap-2 mb-6">
                {features.map((_, i) => (
                  <div key={i} className="h-1.5 flex-1 bg-gray-900 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-brand-500 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeFeature > i ? 1 : activeFeature === i ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                  <motion.div
                    key={activeFeature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                    className="bg-[#0a0a0a] border border-gray-800 p-6 sm:p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] will-change-transform"
                  >
                  <h2 className="hidden lg:block text-8xl font-black text-gray-800 mb-6 tracking-tighter">
                    {features[activeFeature].id}
                  </h2>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 lg:mb-6 leading-tight uppercase">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 lg:mb-10 min-h-[80px]">
                    {features[activeFeature].description}
                  </p>
                  <button className="bg-brand-500 hover:bg-brand-400 text-black px-8 py-3 lg:px-10 lg:py-4 rounded-full font-black text-lg lg:text-xl transition-all hover:-translate-y-1 block w-full lg:inline-block text-center uppercase tracking-wide">
                    Explore Zone
                  </button>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
