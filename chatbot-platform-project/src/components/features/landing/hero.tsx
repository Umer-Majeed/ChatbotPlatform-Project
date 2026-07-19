"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { ScrambleText } from "@/components/ui/scramble-text";
import { PersonaWidget } from "@/components/features/landing/persona-widget";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function Hero() {
  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 overflow-hidden px-6 pb-24 pt-16 md:grid-cols-2 md:pt-24"
    >
      {/* Mouse-reactive glow — cursor ke aas-pass halki roshni */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 transition-opacity"
        style={{
          background:
            "radial-gradient(500px circle at var(--x, 50%) var(--y, 50%), rgba(86,82,84,0.07), transparent 70%)",
        }}
      />

      <div>
        <motion.span
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
        >
          Trained on your website in minutes
        </motion.span>

        <h1 className="mt-6 font-display text-5xl italic leading-[1.05] text-foreground md:text-6xl">
          <ScrambleText text="One assistant." delay={200} />
          <br />
          <ScrambleText text="Every business." delay={500} />
        </h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.2}
          variants={fadeUp}
          className="mt-6 max-w-md text-base leading-relaxed text-muted"
        >
          Paste your website URL. Repixm reads it, learns your services,
          your tone, your customers — and becomes your business&apos;s AI
          assistant. No training. No prompts. No code.
        </motion.p>

        <motion.form
          initial="hidden"
          animate="visible"
          custom={0.3}
          variants={fadeUp}
          className="mt-8 flex max-w-md items-center gap-2 rounded-lg border border-border bg-surface p-1.5 shadow-sm"
        >
          <Globe size={18} className="ml-2 shrink-0 text-muted" />
          <input
            type="url"
            placeholder="yourbusiness.com"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
          <Magnetic strength={0.25}>
            <Button size="sm" className="shrink-0">
              Build my assistant
              <ArrowRight size={15} />
            </Button>
          </Magnetic>
        </motion.form>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.4}
          variants={fadeUp}
          className="mt-3 text-xs text-muted"
        >
          Free to try. No credit card required.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <PersonaWidget />
      </motion.div>
    </section>
  );
}