"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Sector 8 Resident",
    image: "https://i.pravatar.cc/150?img=11",
    text: "I've tried every gym in Chandigarh. Chandigarh Fitness is on another level. The equipment is pristine and the community is incredibly motivating.",
  },
  {
    name: "Neha Gupta",
    role: "CrossFit Enthusiast",
    image: "https://i.pravatar.cc/150?img=5",
    text: "The group classes here changed my life. The trainers actually care about your form and progress. Best decision I made for my health.",
  },
  {
    name: "Kabir Singh",
    role: "Powerlifter",
    image: "https://i.pravatar.cc/150?img=8",
    text: "Finally a gym with enough squat racks and deadlift platforms. The atmosphere here makes you want to lift heavier.",
  },
  {
    name: "Priya Patel",
    role: "Working Professional",
    image: "https://i.pravatar.cc/150?img=1",
    text: "The recovery lounge is a godsend after a long day at work. Chandigarh Fitness isn't just a place to sweat, it's my daily escape.",
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-[#000000] border-t border-gray-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-brand-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            Chandigarh's Finest
          </h2>
          <p className="text-2xl text-gray-400">
            Don't just take our word for it. Hear from the athletes and locals who train here every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-[#0a0a0a] p-10 rounded-[3rem] border border-gray-800 flex flex-col justify-between hover:border-brand-500/50 transition-colors will-change-transform"
            >
              <div>
                <div className="flex gap-1.5 mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-2xl font-medium mb-12 leading-relaxed italic">
                  "{t.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-700 bg-gray-900">
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover"
                    loading="lazy" 
                  />
                </div>
                <div>
                  <h4 className="font-black text-xl text-white uppercase tracking-wider">{t.name}</h4>
                  <p className="text-lg text-brand-500 font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
