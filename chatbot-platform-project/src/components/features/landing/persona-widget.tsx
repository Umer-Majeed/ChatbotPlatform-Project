"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS_PERSONAS } from "@/constants/personas";

const CYCLE_MS = 3200;

/**
 * Signature element — chatbot ka wahi ek widget har 3.2 second mein
 * khud ba khud persona badalta hai. Yehi product ka core idea
 * "dikhata" hai, sirf batata nahi.
 */
export function PersonaWidget() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % BUSINESS_PERSONAS.length);
    }, CYCLE_MS);
    return () => clearInterval(timer);
  }, []);

  const persona = BUSINESS_PERSONAS[index];
  const Icon = persona.icon;

  return (
    <div className="relative mx-auto w-full max-w-sm rounded-xl border border-border bg-surface shadow-lg">
      <div className="flex items-center gap-3 border-b border-border px-5 py-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={persona.id}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-foreground"
          >
            <Icon size={17} strokeWidth={1.75} />
          </motion.div>
        </AnimatePresence>

        <div className="min-w-0 flex-1">
          <p className="text-xs uppercase tracking-wide text-muted">Now acting as</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={persona.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="truncate text-sm font-medium text-foreground"
            >
              {persona.label}
            </motion.p>
          </AnimatePresence>
        </div>

        <span className="h-2 w-2 shrink-0 rounded-full bg-foreground/70" />
      </div>

      <div className="space-y-3 px-5 py-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={persona.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3"
          >
            <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-background px-3.5 py-2.5 text-sm text-foreground">
              {persona.greeting}
            </div>
            <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-background px-3.5 py-2.5 text-sm text-foreground">
              {persona.reply}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="ml-auto max-w-[70%] rounded-lg rounded-tr-sm bg-foreground px-3.5 py-2.5 text-sm text-background">
          Tell me more
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-border px-4 py-3">
        <div className="h-8 flex-1 rounded-md bg-background" />
        <div className="h-8 w-8 shrink-0 rounded-md bg-foreground" />
      </div>

      <div className="flex items-center justify-center gap-1.5 pb-4">
        {BUSINESS_PERSONAS.map((p, i) => (
          <span
            key={p.id}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-4 bg-foreground" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}