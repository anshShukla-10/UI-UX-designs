"use client";

import { ArrowRight, Instagram, MapPin, Phone, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MagneticButton from "./MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FooterCTA() {
  const containerRef = useRef<HTMLElement>(null);
  const ctaCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (ctaCardRef.current) {
        gsap.fromTo(
          ctaCardRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaCardRef.current,
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
    <footer
      ref={containerRef}
      className="pt-20 sm:pt-32 pb-10 sm:pb-12 bg-[#000000] border-t border-gray-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Massive CTA Card with Performant Radial Gradient */}
        <div
          ref={ctaCardRef}
          className="relative rounded-[2.5rem] sm:rounded-[3.5rem] md:rounded-[4.5rem] overflow-hidden bg-[#0a0a0a] mb-16 sm:mb-24 border border-brand-500/30 shadow-[0_0_50px_rgba(212,255,62,0.1)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,255,62,0.08)_0%,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 px-5 py-14 sm:px-12 md:py-32 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-brand-950/40 border border-brand-500/30 text-brand-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-400" />
              Begin Your Legacy
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-6 sm:mb-8 tracking-tighter uppercase leading-tight">
              Ready to <span className="text-brand-500 underline decoration-brand-500/40 underline-offset-8">Transform?</span>
            </h2>
            <p className="text-base sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Stop waiting. Claim your free day pass today and experience Lucknow&apos;s most elite training sanctuary in Aashiana.
            </p>

            <MagneticButton strength={0.15} textStrength={0.08} className="w-full sm:w-auto">
              <Link
                href="#pricing"
                className="bg-brand-500 hover:bg-brand-400 text-black px-8 sm:px-14 py-4 sm:py-6 rounded-full font-black text-lg sm:text-xl md:text-2xl transition-all hover:-translate-y-0.5 shadow-[0_0_35px_rgba(212,255,62,0.35)] hover:shadow-[0_0_50px_rgba(212,255,62,0.55)] flex items-center justify-center gap-3 sm:gap-4 mx-auto uppercase tracking-wide group active:scale-95 w-full sm:w-auto text-center"
              >
                Claim Free Day Pass
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-200 group-hover:translate-x-1.5" />
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Standard Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 sm:mb-6 group inline-flex">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-brand-500">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-9 h-9 sm:w-11 sm:h-11"
                >
                  <path
                    d="M6 5V19M18 5V19M4 8H8M4 16H8M16 8H20M16 16H20M8 12H16M2 12H4M20 12H22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-black text-2xl sm:text-3xl md:text-4xl tracking-tighter text-white uppercase group-hover:text-brand-400 transition-colors">
                ELevana <span className="text-brand-500">Fitness</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md leading-relaxed">
              Lucknow&apos;s premier fitness sanctuary in Aashiana. World-class biomechanical equipment, master coaching, and an inspiring community.
            </p>
            <div className="flex flex-col gap-3 sm:gap-4 text-gray-400 font-medium text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 shrink-0" />
                <span>Sector M, Aashiana, Lucknow 226012</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 shrink-0" />
                <a href="tel:+9108960739467" className="hover:text-brand-400 transition-colors">
                  +91 08960739467
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-brand-500 shrink-0" />
                <span>hello@elevanafitness.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg sm:text-xl text-white mb-4 sm:mb-6 uppercase tracking-wider">
              Facility
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="#facilities" className="text-gray-400 text-base sm:text-lg hover:text-brand-400 transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="#classes" className="text-gray-400 text-base sm:text-lg hover:text-brand-400 transition-colors">
                  Classes
                </Link>
              </li>
              <li>
                <Link href="#facilities" className="text-gray-400 text-base sm:text-lg hover:text-brand-400 transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="#home" className="text-gray-400 text-base sm:text-lg hover:text-brand-400 transition-colors">
                  Virtual Tour
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg sm:text-xl text-white mb-4 sm:mb-6 uppercase tracking-wider">
              Members
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="#pricing" className="text-gray-400 text-base sm:text-lg hover:text-brand-400 transition-colors">
                  Member Portal
                </Link>
              </li>
              <li>
                <Link href="#classes" className="text-gray-400 text-base sm:text-lg hover:text-brand-400 transition-colors">
                  Book a Class
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 text-base sm:text-lg hover:text-brand-400 transition-colors">
                  Refer a Friend
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 text-base sm:text-lg hover:text-brand-400 transition-colors">
                  Guest Passes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl text-white mb-4 sm:mb-6 uppercase tracking-wider">
              Connect
            </h4>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 text-base sm:text-lg hover:text-brand-400 transition-colors group mb-3"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-brand-500 group-hover:scale-105 transition-transform" />
              <span>@elevanafitness</span>
            </a>
            <a
              href="tel:+9108960739467"
              className="flex items-center gap-3 text-gray-400 text-base sm:text-lg hover:text-brand-400 transition-colors group"
            >
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-brand-500 group-hover:scale-105 transition-transform" />
              <span>+91 08960739467</span>
            </a>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs sm:text-sm font-medium text-center md:text-left">
            © {new Date().getFullYear()} ELevana Fitness. All rights reserved. Aashiana, Lucknow.
          </p>
          <div className="flex gap-6 text-xs sm:text-sm">
            <span className="flex items-center gap-2 text-gray-400 font-bold uppercase tracking-wider">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-brand-500 animate-pulse"></span> Open 24/7 in Aashiana
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
