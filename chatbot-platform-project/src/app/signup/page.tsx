"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Magnetic } from "@/components/ui/magnetic";
import { AuthVisual } from "@/components/features/auth/auth-visual";

export default function SignupPage() {
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
            Create your assistant.
          </h1>
          <p className="mt-2 text-sm text-muted">Takes about three minutes.</p>

          <form className="mt-8 space-y-4">
            <Input label="Full name" type="text" autoComplete="name" />
            <Input label="Email" type="email" autoComplete="email" />
            <Input label="Password" type="password" autoComplete="new-password" />
            <Magnetic strength={0.15}>
              <Button type="submit" className="w-full">
                Create account
                <ArrowRight size={15} />
              </Button>
            </Magnetic>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            Already have an account?{" "}
            <Link href="/login" className="text-foreground underline underline-offset-4">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}