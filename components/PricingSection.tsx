"use client";

import { useState, useRef } from "react";
import { Check, Sparkles, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const togglePillRef = useRef<HTMLDivElement>(null);
  const price1Ref = useRef<HTMLSpanElement>(null);
  const price2Ref = useRef<HTMLSpanElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Stagger in pricing cards
      const cards = cardsRef.current?.querySelectorAll(".pricing-card");
      if (cards) {
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

  const handleToggle = (yearly: boolean) => {
    if (yearly === isYearly) return;
    setIsYearly(yearly);

    // Fast slider pill transition directly aligned to 50% grid width
    if (togglePillRef.current) {
      gsap.to(togglePillRef.current, {
        x: yearly ? "100%" : "0%",
        duration: 0.3,
        ease: "power2.out",
      });
    }

    // Number pop
    [price1Ref.current, price2Ref.current].forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0.7 },
          { scale: 1, opacity: 1, duration: 0.25, ease: "power2.out" }
        );
      }
    });
  };

  return (
    <section
      ref={containerRef}
      id="pricing"
      className="py-20 sm:py-32 bg-[#000000] relative border-t border-gray-900 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(212,255,62,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-950/40 border border-brand-500/30 text-brand-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 text-brand-400" />
            Transparent Pricing
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter">
            No Hidden Fees.
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12">
            Straightforward memberships at ELevana Fitness Aashiana. Built for committed athletes.
          </p>

          {/* Perfectly Aligned Symmetric Pricing Switcher */}
          <div className="inline-block w-full max-w-[300px] sm:max-w-md mx-auto">
            <div className="grid grid-cols-2 bg-[#0a0a0a] rounded-full p-1 sm:p-1.5 border border-gray-800 relative select-none items-center">
              {/* Sliding Pill Background */}
              <div
                ref={togglePillRef}
                className="absolute top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 left-1 sm:left-1.5 w-[calc(50%-2px)] sm:w-[calc(50%-3px)] bg-brand-500 rounded-full z-0 pointer-events-none shadow-[0_0_20px_rgba(212,255,62,0.35)] will-change-transform"
              />

              {/* Monthly Button */}
              <button
                type="button"
                onClick={() => handleToggle(false)}
                className={`relative z-10 w-full py-2.5 sm:py-4 rounded-full text-xs sm:text-base md:text-lg font-black transition-colors duration-200 uppercase tracking-wider flex items-center justify-center text-center ${
                  !isYearly ? "text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </button>

              {/* Annual Pass Button */}
              <button
                type="button"
                onClick={() => handleToggle(true)}
                className={`relative z-10 w-full py-2.5 sm:py-4 rounded-full text-xs sm:text-base md:text-lg font-black transition-colors duration-200 uppercase tracking-wider flex items-center justify-center gap-1 sm:gap-2 text-center ${
                  isYearly ? "text-black" : "text-gray-400 hover:text-white"
                }`}
              >
                <span>Annual</span>
                <span
                  className={`text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-full font-black uppercase transition-colors ${
                    isYearly
                      ? "bg-black/30 text-black"
                      : "bg-brand-500/20 text-brand-400 border border-brand-500/30"
                  }`}
                >
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto items-stretch"
        >
          {/* Off-Peak Plan */}
          <div className="pricing-card bg-[#0a0a0a] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 flex flex-col h-full border border-gray-800 hover:border-gray-700 transition-all duration-300 shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4 uppercase tracking-tighter">
              Off-Peak Pass
            </h3>
            <div className="mb-4 sm:mb-6 flex items-baseline gap-2">
              <span
                ref={price1Ref}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white"
              >
                ₹{isYearly ? "15,000" : "1,500"}
              </span>
              <span className="text-gray-500 text-base sm:text-lg font-bold">
                {isYearly ? "/year" : "/month"}
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 font-medium leading-relaxed">
              Access from 10:00 AM to 4:00 PM daily. Perfect for students and flexible remote professionals in Lucknow.
            </p>

            <ul className="space-y-4 sm:space-y-5 mb-10 sm:mb-14 flex-1">
              {[
                "Access to main gym floor & free weights",
                "Access to cardio & conditioning zones",
                "Standard locker room & shower usage",
                "1 Free Biomechanical Coaching Intro",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 sm:gap-4 group">
                  <div className="bg-brand-500/20 rounded-full p-1.5 shrink-0">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 stroke-[3]" />
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base md:text-lg font-semibold">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 sm:py-5 rounded-full border-2 border-gray-700 text-white font-black text-lg sm:text-xl hover:bg-gray-800 hover:border-brand-500/50 transition-all uppercase tracking-wide active:scale-95">
              Select Off-Peak
            </button>
          </div>

          {/* Premium VIP Plan */}
          <div className="pricing-card bg-[#0a0a0a] rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 lg:p-12 flex flex-col h-full border border-brand-500 relative overflow-hidden shadow-[0_0_40px_rgba(212,255,62,0.1)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,255,62,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-brand-500 text-black px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-sm font-black uppercase tracking-widest shadow-[0_0_15px_rgba(212,255,62,0.5)] flex items-center gap-1">
              <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-black" />
              Most Popular
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4 uppercase tracking-tighter">
              Unlimited VIP
            </h3>
            <div className="mb-4 sm:mb-6 flex items-baseline gap-2">
              <span
                ref={price2Ref}
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white"
              >
                ₹{isYearly ? "25,000" : "2,500"}
              </span>
              <span className="text-gray-500 text-base sm:text-lg font-bold">
                {isYearly ? "/year" : "/month"}
              </span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 font-medium leading-relaxed">
              24/7 All-Access Pass with no restrictions. Complete freedom for your fitness lifestyle.
            </p>

            <ul className="space-y-4 sm:space-y-5 mb-10 sm:mb-14 flex-1 relative z-10">
              {[
                "24/7 Access to all 5 World-Class Zones",
                "Unlimited Group Classes (HIIT, Yoga, CrossFit)",
                "Full Swedish Sauna & Bio-Recovery Lounge",
                "Executive VIP Locker Suite Access",
                "2 Free InBody Composition Scans per month",
                "Bring a workout buddy free every weekend",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 sm:gap-4 group">
                  <div className="bg-brand-500 rounded-full p-1.5 shrink-0 shadow-[0_0_10px_rgba(212,255,62,0.4)]">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-black stroke-[3]" />
                  </div>
                  <span className="text-white text-sm sm:text-base md:text-lg font-semibold">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <button className="w-full py-4 sm:py-5 rounded-full bg-brand-500 text-black font-black text-lg sm:text-xl hover:bg-brand-400 transition-all shadow-[0_0_25px_rgba(212,255,62,0.3)] hover:shadow-[0_0_35px_rgba(212,255,62,0.5)] uppercase tracking-wide relative z-10 active:scale-95">
              Join VIP Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
