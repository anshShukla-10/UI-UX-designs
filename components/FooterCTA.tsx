"use client";

import { ArrowRight, Instagram, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <footer className="pt-32 pb-10 bg-[#000000] border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive CTA Card */}
        <div className="relative rounded-[4rem] overflow-hidden bg-[#0a0a0a] mb-24 border border-brand-500/30">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 px-8 py-24 md:py-32 text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter uppercase">
              Ready to <span className="text-brand-500">Transform?</span>
            </h2>
            <p className="text-2xl text-gray-400 mb-12">
              Stop waiting. Claim your free day pass today and experience Chandigarh's most elite training facility.
            </p>
            <button className="bg-brand-500 hover:bg-brand-400 text-black px-12 py-6 rounded-full font-black text-2xl transition-all hover:-translate-y-1 flex items-center justify-center gap-4 mx-auto shadow-[0_0_40px_rgba(212,255,62,0.3)] uppercase tracking-wide">
              Claim Free Pass <ArrowRight className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* Standard Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center text-brand-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 5V19M18 5V19M4 8H8M4 16H8M16 8H20M16 16H20M8 12H16M2 12H4M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-black text-4xl tracking-tighter text-white uppercase">WAO Gym</span>
            </Link>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Chandigarh's premium fitness sanctuary. State-of-the-art equipment, expert coaching, and a community built on hard work.
            </p>
            <div className="flex flex-col gap-4 text-gray-400 font-medium">
              <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-brand-500" /> Sector 8, Chandigarh 160009</div>
              <div className="flex items-center gap-3"><Phone className="w-5 h-5 text-brand-500" /> +91 98765 43210</div>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-brand-500" /> hello@waogym.com</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-xl text-white mb-6 uppercase">Facility</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 text-lg hover:text-brand-400 transition-colors">Equipment</Link></li>
              <li><Link href="#" className="text-gray-400 text-lg hover:text-brand-400 transition-colors">Classes</Link></li>
              <li><Link href="#" className="text-gray-400 text-lg hover:text-brand-400 transition-colors">Amenities</Link></li>
              <li><Link href="#" className="text-gray-400 text-lg hover:text-brand-400 transition-colors">Virtual Tour</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl text-white mb-6 uppercase">Members</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 text-lg hover:text-brand-400 transition-colors">Member Login</Link></li>
              <li><Link href="#" className="text-gray-400 text-lg hover:text-brand-400 transition-colors">Book a Class</Link></li>
              <li><Link href="#" className="text-gray-400 text-lg hover:text-brand-400 transition-colors">Refer a Friend</Link></li>
              <li><Link href="#" className="text-gray-400 text-lg hover:text-brand-400 transition-colors">Guest Passes</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xl text-white mb-6 uppercase">Follow Us</h4>
            <a href="#" className="flex items-center gap-3 text-gray-400 text-lg hover:text-brand-400 transition-colors">
              <Instagram className="w-6 h-6" /> @waogymchd
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} WAO Gym Chandigarh. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="flex items-center gap-2 text-gray-500 font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span> Open 24/7
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
