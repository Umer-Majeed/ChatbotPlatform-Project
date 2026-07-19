"use client";

import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/use-count-up";
import type { LucideIcon } from "lucide-react";

export function StatCard({
  label,
  value,
  suffix = "",
  icon: Icon,
  delay = 0,
}: {
  label: string;
  value: number;
  suffix?: string;
  icon: LucideIcon;
  delay?: number;
}) {
  const count = useCountUp(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl border border-border bg-surface p-5"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide text-muted">{label}</span>
        <Icon size={16} strokeWidth={1.75} className="text-muted" />
      </div>
      <p className="mt-3 font-display text-3xl italic text-foreground">
        {count.toLocaleString()}
        {suffix}
      </p>
    </motion.div>
  );
}