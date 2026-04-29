"use client";

export default function LogoMarquee() {
  const logos = [
    "Hammer Strength", "Rogue Fitness", "Life Fitness", "Eleiko", "Concept2", "Chandigarh Lifters", "Hammer Strength", "Rogue Fitness", "Life Fitness"
  ];

  return (
    <section className="py-16 bg-[#000000] border-y border-gray-900 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-900/10 via-transparent to-transparent pointer-events-none" />
      <p className="text-center text-lg font-bold text-gray-600 mb-8 uppercase tracking-widest">Equipped With The Best</p>
      <div className="relative w-full flex overflow-x-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#000000] via-transparent to-[#000000] pointer-events-none w-full"></div>
        <div className="animate-marquee whitespace-nowrap flex items-center gap-24 md:gap-40">
          {logos.map((logo, index) => (
            <span key={index} className="text-4xl md:text-5xl font-black text-gray-800 uppercase tracking-tighter hover:text-gray-700 transition-colors cursor-default">
              {logo}
            </span>
          ))}
          {logos.map((logo, index) => (
            <span key={`dup-${index}`} className="text-4xl md:text-5xl font-black text-gray-800 uppercase tracking-tighter hover:text-gray-700 transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
