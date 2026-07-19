"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Buttery inertia scroll — jaise Apple/Linear ki site pe hota hai.
 * Mouse wheel se scroll karte waqt momentum/deceleration feel aati hai,
 * default browser scroll ki tarah "tut ke" nahi rukta.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}