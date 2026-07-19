"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "@/components/ui/scramble-text";

/**
 * Login/Signup ka left panel — grid texture + slow-moving glow +
 * scramble headline. Ye brand ki "ye ek AI system hai" feel deta hai
 * bina kisi extra color use kiye — palette monochrome hi rehti hai.
 */
export function AuthVisual() {
  return (
    <div className="relative hidden h-full overflow-hidden bg-foreground md:block">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-background) 1px, transparent 1px), linear-gradient(90deg, var(--color-background) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <motion.div
        className="absolute h-[420px] w-[420px] rounded-full bg-background/20 blur-[100px]"
        animate={{ x: [0, 120, -60, 0], y: [0, 80, 160, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between p-12">
        <span className="font-display text-2xl italic text-background">Repixm</span>

        <div>
          <h2 className="max-w-sm font-display text-4xl italic leading-tight text-background">
            <ScrambleText text="Your business, understood." />
          </h2>
          <p className="mt-4 max-w-xs text-sm text-background/60">
            Every conversation, every persona, one intelligent core.
          </p>
        </div>

        <div className="flex gap-10 text-background/70">
          <div>
            <p className="font-mono text-2xl text-background">10+</p>
            <p className="text-xs">Business verticals</p>
          </div>
          <div>
            <p className="font-mono text-2xl text-background">3 min</p>
            <p className="text-xs">Average setup</p>
          </div>
        </div>
      </div>
    </div>
  );
}