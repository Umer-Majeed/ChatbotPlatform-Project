"use client";

import { motion } from "framer-motion";
import {
  Scale, Stethoscope, UtensilsCrossed, Building2, Dumbbell,
  Scissors, ShoppingBag, GraduationCap, Briefcase, Car,
} from "lucide-react";

const VERTICALS = [
  { label: "Law Firm", icon: Scale },
  { label: "Hospital", icon: Stethoscope },
  { label: "Restaurant", icon: UtensilsCrossed },
  { label: "Real Estate", icon: Building2 },
  { label: "Gym", icon: Dumbbell },
  { label: "Salon", icon: Scissors },
  { label: "E-commerce", icon: ShoppingBag },
  { label: "University", icon: GraduationCap },
  { label: "Agency", icon: Briefcase },
  { label: "Car Dealer", icon: Car },
];

export function BusinessTypes() {
  return (
    <section id="personas" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-lg"
        >
          <h2 className="font-display text-4xl italic text-foreground">
            Built for any front desk.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The same engine, reshaped for whatever business installs it.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-5">
          {VERTICALS.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-start gap-3 bg-surface px-5 py-6 transition-colors hover:bg-background cursor-default"
            >
              <v.icon size={18} strokeWidth={1.75} className="text-muted" />
              <span className="text-sm font-medium text-foreground">{v.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}