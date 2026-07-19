"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, Clock, TrendingUp } from "lucide-react";
import { DashboardTopbar } from "@/components/layout/dashboard-topbar";
import { StatCard } from "@/components/features/dashboard/stat-card";
import { PersonaWidget } from "@/components/features/landing/persona-widget";

export default function DashboardPage() {
  return (
    <>
      <DashboardTopbar title="Overview" />

      <div className="p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Conversations" value={1284} icon={MessageSquare} delay={0} />
          <StatCard label="Unique visitors" value={892} icon={Users} delay={0.08} />
          <StatCard label="Avg. response" value={2} suffix="s" icon={Clock} delay={0.16} />
          <StatCard label="Resolution rate" value={94} suffix="%" icon={TrendingUp} delay={0.24} />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl border border-border bg-surface p-6 lg:col-span-2"
          >
            <h3 className="font-display text-lg italic text-foreground">Recent activity</h3>
            <div className="mt-4 space-y-3">
              {[
                { text: "New conversation started", time: "2m ago" },
                { text: "Knowledge base re-synced from website", time: "1h ago" },
                { text: "Widget installed on 3 new pages", time: "5h ago" },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center justify-between rounded-lg bg-background px-4 py-3 text-sm"
                >
                  <span className="text-foreground">{item.text}</span>
                  <span className="text-xs text-muted">{item.time}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-xs uppercase tracking-wide text-muted">Live preview</p>
            <PersonaWidget />
          </motion.div>
        </div>
      </div>
    </>
  );
}