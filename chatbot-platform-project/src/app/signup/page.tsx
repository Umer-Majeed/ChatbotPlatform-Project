"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Magnetic } from "@/components/ui/magnetic";
import { AuthVisual } from "@/components/features/auth/auth-visual";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();

    if (!res.ok) {
     setError(data.error ?? "Something went wrong.");
      setLoading(false);
      return;
    }

    // Signup ke turant baad automatically login bhi kar do
    await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    router.push("/dashboard");
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
            Create your assistant.
          </h1>
          <p className="mt-2 text-sm text-muted">Takes about three minutes.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <Input
              label="Full name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
            <Input
              label="Email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
            <Input
              label="Password"
              type="password"
              autoComplete="new-password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Magnetic strength={0.15}>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating account..." : "Create account"}
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