"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 lg:pt-40 pb-20 overflow-hidden relative min-h-screen flex flex-col justify-center">
      {/* Edge Glows - Expanded for full effect */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40vw] h-[70vh] bg-brand-500/15 blur-[150px] rounded-full -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[70vh] bg-brand-500/15 blur-[150px] rounded-full translate-x-1/2 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50vw] h-[30vh] bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center text-center relative z-10 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto my-auto pt-10 pb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-900/30 border border-brand-500/30 text-brand-400 font-bold text-xs sm:text-sm md:text-base mb-6 md:mb-8">
            <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-brand-500"></span>
            </span>
            Sector 8, Chandigarh • Premium Facility
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-black tracking-tighter text-white leading-[1] md:leading-[0.95] mb-6 md:mb-8 drop-shadow-2xl">
            CHANDIGARH'S<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-400 to-brand-600 filter drop-shadow-[0_0_20px_rgba(212,255,62,0.3)]">ELITE</span> FITNESS<br/>
            DESTINATION
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            State-of-the-art equipment, elite personal training, and the most vibrant fitness community in the Tricity. Stop settling for average.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-brand-500 hover:bg-brand-400 text-black px-12 py-5 rounded-full font-black text-xl md:text-2xl transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(212,255,62,0.4)] w-full sm:w-auto uppercase tracking-wide">
              Join Chandigarh Fitness
            </button>
            <button className="bg-transparent border-2 border-gray-600 hover:border-gray-400 hover:bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-xl md:text-2xl transition-all hover:-translate-y-1 w-full sm:w-auto uppercase tracking-wide">
              Book a Free Tour
            </button>
          </div>
        </motion.div>

        {/* Removed phone mockup, added bottom scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-auto pb-4 flex flex-col items-center gap-2"
        >
          <span className="text-gray-500 text-sm font-bold tracking-widest uppercase">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-12 bg-gray-800 rounded-full overflow-hidden relative"
          >
             <div className="w-full h-1/2 bg-brand-500 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
