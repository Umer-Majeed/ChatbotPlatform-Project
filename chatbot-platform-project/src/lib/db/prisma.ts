import { PrismaClient } from "@prisma/client";

/**
 * Next.js dev mode mein har file-save pe naya PrismaClient banta hai
 * jo connections leak kar sakta hai. Isliye ek hi instance globally
 * reuse karte hain.
 */
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}