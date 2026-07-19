"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";

export function CTASection() {
  return (
    <section className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-xl font-display text-4xl italic text-foreground md:text-5xl"
        >
          Your business already has a voice. Give it a chatbot that speaks it.
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex justify-center"
        >
          <Magnetic strength={0.3}>
            <Button size="lg">
              Build my assistant
              <ArrowRight size={16} />
            </Button>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}