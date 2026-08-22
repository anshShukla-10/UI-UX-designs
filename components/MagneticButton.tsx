"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface MagneticProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  strength?: number;
  textStrength?: number;
  className?: string;
}

export default function MagneticButton({
  children,
  strength = 0.15,
  textStrength = 0.08,
  className = "",
  ...props
}: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        gsap.to(container, {
          x: distanceX * strength,
          y: distanceY * strength,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });

        gsap.to(content, {
          x: distanceX * textStrength,
          y: distanceY * textStrength,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const handleMouseLeave = () => {
        gsap.to([container, content], {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      container.addEventListener("mousemove", handleMouseMove, { passive: true });
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`inline-block will-change-transform ${className}`} {...props}>
      <div ref={contentRef} className="w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
