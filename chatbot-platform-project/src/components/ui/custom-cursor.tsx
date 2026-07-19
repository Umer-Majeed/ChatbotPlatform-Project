"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Native cursor ki jagah ek dot + trailing ring — jo buttons/links pe
 * hover karte waqt bara ho jata hai. Sirf mouse/trackpad wale devices
 * pe chalta hai (mobile/touch pe khud disable ho jata hai).
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.classList.add("has-custom-cursor");

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [data-cursor-hover]"));
    };

    let raf: number;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
      />
      <div
        ref={ringRef}
        className={`fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,background-color,border-color] duration-200 ease-out ${
          isPointer
            ? "h-14 w-14 border-foreground/60 bg-foreground/5"
            : "h-8 w-8 border-foreground/30"
        }`}
      />
    </div>
  );
}