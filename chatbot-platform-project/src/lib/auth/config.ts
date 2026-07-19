import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/db/prisma";
import { edgeAuthConfig } from "@/lib/auth/edge-config";
import type { NextAuthConfig } from "next-auth";

/**
 * Poora config — sirf server-side (API routes) mein use hota hai.
 * Yahan Prisma/bcrypt allowed hai kyun ke ye Node runtime mein chalta hai.
 */
export const authConfig: NextAuthConfig = {
  ...edgeAuthConfig,
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.email as string | undefined;
        const password = credentials?.password as string | undefined;
        if (!email || !password) return null;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return null;

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return null;

        return { id: user.id, name: user.name, email: user.email };
      },
    }),
  ],
  callbacks: {
    ...edgeAuthConfig.callbacks,
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.id = token.id as string;
      return session;
    },
  },
};