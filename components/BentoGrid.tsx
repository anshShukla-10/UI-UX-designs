"use client";

import { motion } from "framer-motion";
import { Dumbbell, Users, Droplets, HeartPulse } from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="facilities" className="py-32 bg-[#000000] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            More Than Just A Gym
          </h2>
          <p className="text-2xl text-gray-400">
            We built WAO Gym to be Chandigarh's ultimate fitness sanctuary. Everything you need to transform your body and mind under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[300px]">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 bg-[#0a0a0a] rounded-[3rem] p-12 card-shadow flex flex-col justify-between border border-gray-800 group cursor-default relative overflow-hidden"
          >
            <div className="absolute right-0 top-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 to-transparent -translate-y-1/2 translate-x-1/4 transition-transform duration-700 group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-brand-900/50 rounded-2xl flex items-center justify-center text-brand-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                <Dumbbell className="w-8 h-8" />
              </div>
              <h3 className="text-4xl font-black text-white mb-4 tracking-tight">Elite Personal Training</h3>
              <p className="text-gray-400 text-xl max-w-lg">Work with Chandigarh's top certified coaches who will build a custom roadmap for your unique goals and push you beyond your limits.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] rounded-[3rem] p-10 card-shadow flex flex-col justify-between border border-gray-800 group cursor-default relative overflow-hidden"
          >
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/30 to-transparent transition-transform duration-700 group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">High-Energy Classes</h3>
              <p className="text-gray-400 text-lg">From HIIT and CrossFit to Yoga and Zumba. Sweat it out together.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-brand-600 rounded-[3rem] p-10 card-shadow flex flex-col justify-between group cursor-default relative overflow-hidden border border-brand-500"
          >
            <div className="absolute left-0 bottom-0 w-64 h-64 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black/30 to-transparent transition-transform duration-700 group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-black/20 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-500">
                <Droplets className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Luxury Amenities</h3>
              <p className="text-brand-950 text-lg font-medium">Premium locker rooms, sauna, steam rooms, and a recovery lounge to heal fast.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-2 bg-[#0a0a0a] rounded-[3rem] p-12 card-shadow flex flex-col justify-between border border-gray-800 group cursor-default relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900/20 to-transparent -translate-y-1/4 -translate-x-1/4 transition-transform duration-700 group-hover:scale-110" />
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start md:items-center justify-between h-full">
              <div>
                <div className="w-16 h-16 bg-purple-900/30 rounded-2xl flex items-center justify-center text-purple-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-black text-white mb-4 tracking-tight">The Tricity Community</h3>
                <p className="text-gray-400 text-xl max-w-xl">Join hundreds of local athletes, professionals, and beginners all pushing each other to be their absolute best. Leave your ego at the door.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
