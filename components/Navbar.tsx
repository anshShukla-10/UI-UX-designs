"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass px-8 py-2">
      <div className="flex justify-between items-center h-24">
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center text-brand-500">
              {/* Gym Dumbbell/Weight Icon */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 5V19M18 5V19M4 8H8M4 16H8M16 8H20M16 16H20M8 12H16M2 12H4M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="font-black text-3xl tracking-tighter text-white uppercase">Chandigarh Fitness</span>
          </Link>
        </div>
        
        <div className="hidden lg:flex items-center space-x-10">
          <Link href="#home" className="text-brand-500 font-bold text-lg transition-colors">Home</Link>
          <Link href="#facilities" className="text-gray-300 hover:text-white font-bold text-lg transition-colors">Facilities</Link>
          <Link href="#classes" className="text-gray-300 hover:text-white font-bold text-lg transition-colors">Classes</Link>
          <Link href="#trainers" className="text-gray-300 hover:text-white font-bold text-lg transition-colors">Trainers</Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white font-bold text-lg transition-colors">Membership</Link>
        </div>

        <div className="hidden lg:flex items-center">
          <button className="bg-brand-500 hover:bg-brand-400 text-black px-10 py-4 rounded-full font-black text-lg transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,255,62,0.3)] uppercase tracking-wide">
            Join Now
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-white">
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:hidden bg-[#0a0a0a] border border-gray-800 rounded-3xl absolute top-full left-0 w-full mt-4 p-6 shadow-2xl"
        >
          <div className="flex flex-col space-y-4">
            <Link href="#home" className="block px-4 py-3 text-xl font-bold text-brand-500 hover:bg-gray-900 rounded-xl">Home</Link>
            <Link href="#facilities" className="block px-4 py-3 text-xl font-bold text-gray-300 hover:bg-gray-900 rounded-xl">Facilities</Link>
            <Link href="#classes" className="block px-4 py-3 text-xl font-bold text-gray-300 hover:bg-gray-900 rounded-xl">Classes</Link>
            <Link href="#pricing" className="block px-4 py-3 text-xl font-bold text-gray-300 hover:bg-gray-900 rounded-xl">Membership</Link>
            <button className="w-full mt-6 text-center py-4 font-black text-xl text-black bg-brand-500 hover:bg-brand-400 rounded-full uppercase tracking-wide">Join Now</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
