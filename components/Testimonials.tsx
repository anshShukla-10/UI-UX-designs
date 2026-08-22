"use client";

import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Aashiana Resident",
    image: "https://i.pravatar.cc/150?img=11",
    text: "I've tried every gym in Lucknow. ELevana Fitness is on a whole different level. The equipment is pristine, the vibe is electric, and the community is genuinely motivating.",
  },
  {
    name: "Neha Gupta",
    role: "CrossFit Enthusiast",
    image: "https://i.pravatar.cc/150?img=5",
    text: "The group classes here changed my health journey completely. The trainers actually focus on biomechanics and form. Best investment in myself.",
  },
  {
    name: "Kabir Singh",
    role: "Competitive Powerlifter",
    image: "https://i.pravatar.cc/150?img=8",
    text: "Finally a gym in Lucknow with calibrated competition plates, deadlift platforms, and Eleiko bars. The atmosphere here makes you hit new PRs every week.",
  },
  {
    name: "Priya Patel",
    role: "Working Professional",
    image: "https://i.pravatar.cc/150?img=1",
    text: "The recovery lounge and Swedish sauna are a godsend after long work hours. ELevana Fitness isn't just a place to sweat, it's my daily sanctuary.",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = cardsRef.current?.querySelectorAll(".testimonial-card");
      if (!cards) return;

      cards.forEach((card, index) => {
        const el = card as HTMLElement;
        const stars = el.querySelectorAll(".star-icon");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        tl.fromTo(
          el,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: index * 0.08,
            ease: "power2.out",
          }
        );

        if (stars.length > 0) {
          tl.fromTo(
            stars,
            { scale: 0.5, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              stagger: 0.04,
              ease: "power2.out",
            },
            "-=0.3"
          );
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-32 bg-[#000000] border-t border-gray-900 relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[800px] h-[90vw] sm:h-[800px] bg-[radial-gradient(circle,rgba(212,255,62,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-950/40 border border-brand-500/30 text-brand-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Real Stories, Real Transformations
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-4 sm:mb-6 uppercase tracking-tighter">
            Lucknow&apos;s Finest
          </h2>
          <p className="text-base sm:text-xl md:text-2xl text-gray-400">
            Don&apos;t just take our word for it. Hear from the athletes and dedicated members who train at ELevana Fitness in Aashiana every day.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="testimonial-card bg-[#0a0a0a] p-6 sm:p-8 lg:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-gray-800 flex flex-col justify-between cursor-default transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-1 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-brand-500/10 pointer-events-none">
                <Quote className="w-12 h-12 sm:w-16 sm:h-16" />
              </div>

              <div>
                <div className="flex gap-1.5 mb-6 sm:mb-8">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="star-icon w-5 h-5 sm:w-6 sm:h-6 fill-brand-500 text-brand-500"
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl font-medium mb-8 sm:mb-12 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 sm:gap-5">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-brand-500/40 bg-gray-900 shadow-[0_0_15px_rgba(212,255,62,0.15)] shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-black text-lg sm:text-xl text-white uppercase tracking-wider">
                    {t.name}
                  </h4>
                  <p className="text-sm sm:text-base lg:text-lg text-brand-500 font-bold">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
