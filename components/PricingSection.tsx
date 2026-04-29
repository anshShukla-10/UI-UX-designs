"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-32 bg-[#000000] relative border-t border-gray-900">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-brand-500/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">
            No Hidden Fees.
          </h2>
          <p className="text-2xl text-gray-400 mb-12">
            Straightforward memberships designed for your commitment level.
          </p>
          
          <div className="inline-flex bg-[#0a0a0a] rounded-full p-2 border border-gray-800 relative">
            <button 
              onClick={() => setIsYearly(false)}
              className={`relative z-10 px-10 py-4 rounded-full text-lg font-black transition-colors duration-300 uppercase tracking-widest ${!isYearly ? "text-black" : "text-gray-400 hover:text-white"}`}
            >
              Monthly
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`relative z-10 px-10 py-4 rounded-full text-lg font-black transition-colors duration-300 uppercase tracking-widest ${isYearly ? "text-black" : "text-gray-400 hover:text-white"}`}
            >
              Annual Pass
            </button>
            <motion.div 
              className="absolute top-2 bottom-2 w-[calc(50%-4px)] bg-brand-500 rounded-full z-0"
              initial={false}
              animate={{ left: isYearly ? 'calc(50% + 2px)' : '8px' }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* Off-Peak Plan */}
          <div className="bg-[#0a0a0a] rounded-[3rem] p-12 flex flex-col h-full border border-gray-800 hover:border-gray-700 transition-colors">
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Off-Peak Pass</h3>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-6xl font-black text-white">₹{isYearly ? "15,000" : "1,500"}</span>
              <span className="text-gray-500 text-lg font-bold">{isYearly ? "/year" : "/month"}</span>
            </div>
            <p className="text-gray-400 text-lg mb-10 font-medium">Access from 10 AM to 4 PM only. Perfect for flexible schedules.</p>
            
            <ul className="space-y-6 mb-16 flex-1">
              {[
                'Access to main gym floor', 
                'Access to cardio zones', 
                'Standard locker usage', 
                '1 Free Personal Training Intro'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="bg-brand-500/20 rounded-full p-1.5 shrink-0">
                    <Check className="w-5 h-5 text-brand-500 stroke-[3]" />
                  </div>
                  <span className="text-gray-300 text-lg font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-5 rounded-full border-2 border-gray-700 text-white font-black text-xl hover:bg-gray-800 transition-colors mt-auto uppercase tracking-wide">
              Select Off-Peak
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-[#0a0a0a] rounded-[3rem] p-12 flex flex-col h-full border border-brand-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-900/20 to-transparent pointer-events-none" />
            
            <div className="absolute top-8 right-8 bg-brand-500 text-black px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest">
              Most Popular
            </div>
            
            <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Unlimited VIP</h3>
            <div className="mb-6 flex items-baseline gap-2">
              <span className="text-6xl font-black text-white">₹{isYearly ? "25,000" : "2,500"}</span>
              <span className="text-gray-500 text-lg font-bold">{isYearly ? "/year" : "/month"}</span>
            </div>
            <p className="text-gray-400 text-lg mb-10 font-medium">24/7 Access to everything. No restrictions.</p>
            
            <ul className="space-y-6 mb-16 flex-1 relative z-10">
              {[
                '24/7 Access to all zones',
                'Unlimited Group Classes (Yoga, HIIT)',
                'Premium Sauna & Recovery Lounge',
                'VIP Locker Room Access',
                '2 Free InBody Scans per month',
                'Bring a friend free (weekends)'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="bg-brand-500 rounded-full p-1.5 shrink-0">
                    <Check className="w-5 h-5 text-black stroke-[3]" />
                  </div>
                  <span className="text-white text-lg font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="relative z-10 w-full py-5 rounded-full bg-brand-500 text-black font-black text-xl hover:bg-brand-400 transition-colors mt-auto shadow-[0_0_30px_rgba(212,255,62,0.3)] uppercase tracking-wide">
              Join VIP Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
