"use client";

import { useState, useRef } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqs = [
  {
    question: "What are the operating hours for ELevana Fitness?",
    answer:
      "ELevana Fitness is open 24/7, 365 days a year for VIP Unlimited members. For Off-Peak pass holders, access is from 10:00 AM to 4:00 PM daily.",
  },
  {
    question: "Where in Aashiana, Lucknow are you located, and is there parking?",
    answer:
      "We are located in Sector M, Aashiana, Lucknow. We have dedicated, secure on-site parking with 24/7 surveillance and valet assistance for all our members.",
  },
  {
    question: "Are group fitness and yoga classes included in membership?",
    answer:
      "Yes! All 40+ group fitness classes each week—including HIIT, Power Yoga, CrossFit conditioning, and Zumba—are 100% included and unlimited for VIP members.",
  },
  {
    question: "Do you offer personal training and biomechanical assessments?",
    answer:
      "Absolutely. ELevana Fitness features certified master trainers specializing in strength coaching, fat loss, and posture correction. Every new member receives a complimentary InBody scan and 1-on-1 coaching session.",
  },
  {
    question: "Can I freeze or pause my membership when traveling?",
    answer:
      "Yes. Annual members can pause their membership for up to 60 days per year with zero fees through our member portal or front desk.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = itemsRef.current?.querySelectorAll(".faq-item");
      if (items) {
        gsap.fromTo(
          items,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    },
    { scope: containerRef }
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      ref={containerRef}
      id="faq"
      className="py-20 sm:py-32 bg-[#000000] relative overflow-hidden border-t border-gray-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-950/40 border border-brand-500/30 text-brand-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4 text-brand-400" />
            Got Questions?
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter">
            FAQ & Details
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400">
            Everything you need to know before stepping into ELevana Fitness Aashiana.
          </p>
        </div>

        <div ref={itemsRef} className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div
                key={index}
                className={`faq-item border-2 rounded-[1.8rem] sm:rounded-[2rem] overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-brand-500 bg-[#0a0a0a] shadow-[0_0_30px_rgba(212,255,62,0.15)]"
                    : "border-gray-800/80 bg-[#0a0a0a] hover:border-gray-700"
                }`}
              >
                <button
                  className="w-full px-5 py-5 sm:px-8 sm:py-7 text-left flex justify-between items-center gap-3 sm:gap-4 group"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-black text-base sm:text-xl md:text-2xl transition-colors duration-300 ${
                      isOpen ? "text-brand-400" : "text-white group-hover:text-brand-400"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-500 text-black rotate-180 shadow-[0_0_15px_rgba(212,255,62,0.5)]"
                        : "bg-gray-800/80 text-gray-400 group-hover:bg-gray-700"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-8 sm:pb-8 pt-2 text-gray-400 text-sm sm:text-lg md:text-xl leading-relaxed border-t border-gray-900">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
