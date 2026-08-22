"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      // Smooth initial reveal animation
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Stagger nav links
      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", delay: 0.2 }
        );
      }
    },
    { scope: navRef }
  );

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (lenis) {
      lenis.scrollTo(target, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] max-w-7xl z-50 bg-black/85 border border-white/10 rounded-full px-4 sm:px-8 py-1.5 sm:py-2 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
    >
      <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
        <div className="flex-shrink-0 flex items-center">
          <Link
            ref={logoRef}
            href="/"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 sm:gap-3 group transition-transform duration-200"
          >
            <div className="logo-icon w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-brand-500 transition-colors">
              {/* Gym Dumbbell/Weight Icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 sm:w-9 sm:h-9"
              >
                <path
                  d="M6 5V19M18 5V19M4 8H8M4 16H8M16 8H20M16 16H20M8 12H16M2 12H4M20 12H22"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-black text-lg sm:text-2xl md:text-3xl tracking-tighter text-white uppercase group-hover:text-brand-400 transition-colors">
              ELevana <span className="text-brand-500">Fitness</span>
            </span>
          </Link>
        </div>

        <div ref={linksRef} className="hidden lg:flex items-center space-x-8 xl:space-x-10">
          <Link
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-brand-500 font-bold text-base xl:text-lg transition-colors hover:text-brand-400 py-1"
          >
            Home
          </Link>
          <Link
            href="#facilities"
            onClick={(e) => handleNavClick(e, "#facilities")}
            className="text-gray-300 hover:text-white font-bold text-base xl:text-lg transition-colors py-1 hover:-translate-y-0.5 transform duration-150"
          >
            Facilities
          </Link>
          <Link
            href="#classes"
            onClick={(e) => handleNavClick(e, "#classes")}
            className="text-gray-300 hover:text-white font-bold text-base xl:text-lg transition-colors py-1 hover:-translate-y-0.5 transform duration-150"
          >
            Classes
          </Link>
          <Link
            href="#pricing"
            onClick={(e) => handleNavClick(e, "#pricing")}
            className="text-gray-300 hover:text-white font-bold text-base xl:text-lg transition-colors py-1 hover:-translate-y-0.5 transform duration-150"
          >
            Membership
          </Link>
          <Link
            href="#faq"
            onClick={(e) => handleNavClick(e, "#faq")}
            className="text-gray-300 hover:text-white font-bold text-base xl:text-lg transition-colors py-1 hover:-translate-y-0.5 transform duration-150"
          >
            FAQ
          </Link>
        </div>

        <div className="hidden lg:flex items-center">
          <Link
            href="#pricing"
            onClick={(e) => handleNavClick(e, "#pricing")}
            className="bg-brand-500 hover:bg-brand-400 text-black px-7 xl:px-9 py-3 xl:py-3.5 rounded-full font-black text-base xl:text-lg transition-all hover:-translate-y-0.5 shadow-[0_0_25px_rgba(212,255,62,0.25)] hover:shadow-[0_0_35px_rgba(212,255,62,0.5)] uppercase tracking-wide inline-block active:scale-95"
          >
            Join Now
          </Link>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white p-2 rounded-xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-7 h-7 sm:w-8 sm:h-8" /> : <Menu className="w-7 h-7 sm:w-8 sm:h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border border-gray-800 rounded-3xl absolute top-full left-0 w-full mt-3 p-5 sm:p-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            <Link
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="block px-4 py-2.5 text-lg font-bold text-brand-500 hover:bg-gray-900 rounded-xl"
            >
              Home
            </Link>
            <Link
              href="#facilities"
              onClick={(e) => handleNavClick(e, "#facilities")}
              className="block px-4 py-2.5 text-lg font-bold text-gray-300 hover:bg-gray-900 rounded-xl"
            >
              Facilities
            </Link>
            <Link
              href="#classes"
              onClick={(e) => handleNavClick(e, "#classes")}
              className="block px-4 py-2.5 text-lg font-bold text-gray-300 hover:bg-gray-900 rounded-xl"
            >
              Classes
            </Link>
            <Link
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="block px-4 py-2.5 text-lg font-bold text-gray-300 hover:bg-gray-900 rounded-xl"
            >
              Membership
            </Link>
            <Link
              href="#faq"
              onClick={(e) => handleNavClick(e, "#faq")}
              className="block px-4 py-2.5 text-lg font-bold text-gray-300 hover:bg-gray-900 rounded-xl"
            >
              FAQ
            </Link>
            <Link
              href="#pricing"
              onClick={(e) => handleNavClick(e, "#pricing")}
              className="w-full mt-4 text-center py-3.5 font-black text-lg text-black bg-brand-500 hover:bg-brand-400 rounded-full uppercase tracking-wide block shadow-[0_0_25px_rgba(212,255,62,0.3)]"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
