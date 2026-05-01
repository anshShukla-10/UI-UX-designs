"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What are your opening hours?",
    answer: "Chandigarh Fitness is open 24/7 for VIP Unlimited members. For Off-Peak pass holders, access is restricted to 10:00 AM - 4:00 PM."
  },
  {
    question: "Do you have parking available?",
    answer: "Yes, we have a dedicated, secure parking lot for all members right next to our Sector 8 facility."
  },
  {
    question: "Are group classes included in the membership?",
    answer: "Yes! All group classes, including HIIT, Yoga, and CrossFit, are completely free and unlimited for VIP members."
  },
  {
    question: "Do you offer personal training?",
    answer: "Absolutely. We have elite, certified personal trainers. You get 1 free intro session with any membership, and you can book ongoing private packages at the front desk."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-[#000000]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            Questions?
          </h2>
          <p className="text-2xl text-gray-400">
            Everything you need to know before stepping through our doors.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div 
                key={index} 
                className={`border-2 rounded-[2rem] overflow-hidden transition-colors duration-500 ${isOpen ? "border-brand-500 bg-[#0a0a0a]" : "border-gray-800 bg-[#0a0a0a]"}`}
              >
                <button
                  className="w-full px-8 py-8 text-left flex justify-between items-center"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-black text-2xl transition-colors duration-500 ${isOpen ? "text-brand-400" : "text-white"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`w-8 h-8 shrink-0 transition-transform duration-500 ${isOpen ? "rotate-180 text-brand-500" : "text-gray-500"}`} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-gray-400 text-xl leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
