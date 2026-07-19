"use client";

import { useRef } from "react";

/**
 * Button ko cursor ki taraf halka sa "khinchta" hai jab mouse qareeb ho —
 * jaise magnet. Element se dur jate hi wapis center pe aa jata hai.
 */
export function Magnetic({
  children,
  strength = 0.3,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  }

  function handleLeave() {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block transition-transform duration-200 ease-out"
    >
      {children}
    </div>
  );
}