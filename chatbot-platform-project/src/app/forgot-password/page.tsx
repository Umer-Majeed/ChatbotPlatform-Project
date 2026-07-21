"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Magnetic } from "@/components/ui/magnetic";
import { AuthVisual } from "@/components/features/auth/auth-visual";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();

    setMessage(data.message ?? data.error);
    setLoading(false);
  }

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      <AuthVisual />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center px-6 py-16"
      >
        <div className="w-full max-w-sm">
          <Link href="/" className="font-display text-xl italic text-foreground md:hidden">
            Repixm
          </Link>

          <h1 className="mt-8 font-display text-3xl italic text-foreground md:mt-0">
            Reset your password.
          </h1>
          <p className="mt-2 text-sm text-muted">
            Enter your email and we&apos;ll send you a reset link.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {message && <p className="text-sm text-muted">{message}</p>}

            <Magnetic strength={0.15}>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send reset link"}
                <ArrowRight size={15} />
              </Button>
            </Magnetic>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            <Link href="/login" className="text-foreground underline underline-offset-4">
              Back to sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}