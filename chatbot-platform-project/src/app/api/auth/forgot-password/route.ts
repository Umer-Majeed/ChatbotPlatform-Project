import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";
import { prisma } from "@/lib/db/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    // Privacy security: Generic message return karte hain taake email enumeration attack na ho
    if (!user) {
      return NextResponse.json({ 
        message: "If an account with that email exists, a password reset link has been sent." 
      });
    }

    // 1. Raw token link ke liye generate karein
    const rawToken = crypto.randomBytes(32).toString("hex");
    
    // 2. Hash token database mein save karne ke liye
    const hashedToken = crypto.createHash("sha256").update(rawToken).digest("hex");
    
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour expiration

    await prisma.passwordResetToken.create({
      data: { 
        token: hashedToken, 
        email, 
        expiresAt 
      },
    });

    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/${rawToken}`;

    const emailResult = await resend.emails.send({
      from: "Repixm <onboarding@resend.dev>",
      to: email,
      subject: "Reset your password",
      html: `
        <p>Hello ${user.name || "there"},</p>
        <p>You requested to reset your password. Click the link below to set a new password (valid for 1 hour):</p>
        <p><a href="${resetUrl}">${resetUrl}</a></p>
        <p>If you did not request this, please ignore this email.</p>
      `,
    });

    console.log("Resend result:", JSON.stringify(emailResult));

    return NextResponse.json({ 
      message: "If an account with that email exists, a password reset link has been sent." 
    });
  } catch (err) {
    console.error("Forgot-password error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}