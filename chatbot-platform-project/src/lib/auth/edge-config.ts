import type { NextAuthConfig } from "next-auth";

/**
 * Edge-safe config — middleware isay use karta hai. Ismein Prisma
 * ya bcrypt jaisi Node-only cheezein NAHI honi chahiye, kyun ke
 * middleware Edge Runtime mein chalta hai jahan ye kaam nahi karte.
 * Ye sirf itna check karta hai: "kya user logged in hai?"
 */
export const edgeAuthConfig: NextAuthConfig = {
  pages: { signIn: "/login" },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isDashboard) return isLoggedIn;
      return true;
    },
  },
};