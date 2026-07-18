"use client";

import { motion } from "framer-motion";
import { Link2, ScanSearch, Sparkles } from "lucide-react";

const STEPS = [
  { number: "01", icon: Link2, title: "Add your website", description: "Paste your URL. That's the only input we need — no forms, no manual setup." },
  { number: "02", icon: ScanSearch, title: "We read everything", description: "Pages, services, pricing, FAQs, brand tone — organized into structured knowledge in minutes." },
  { number: "03", icon: Sparkles, title: "Your assistant goes live", description: "A chatbot that already sounds like you, knows your business, and is ready to install." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg"
        >
          <h2 className="font-display text-4xl italic text-foreground">
            From URL to assistant,
            <br />
            three steps.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="font-mono text-sm text-muted">{step.number}</span>
              <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background">
                <step.icon size={18} strokeWidth={1.75} className="text-foreground" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}