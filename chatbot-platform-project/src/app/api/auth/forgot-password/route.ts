import { NextResponse } from "next/server";
import crypto from "crypto";
import { Resend } from "resend";
import { prisma } from "@/lib/db/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email zaroori hai." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({ message: "Agar account exist karta hai, email bhej di gayi hai." });
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

    await prisma.passwordResetToken.create({
      data: { token, email, expiresAt },
    });

    const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/${token}`;

    const emailResult = await resend.emails.send({
      from: "Repixm <onboarding@resend.dev>",
      to: email,
      subject: "Apna password reset karein",
      html: `
        <p>Salaam ${user.name},</p>
        <p>Password reset karne ke liye ye link kholein (1 ghante ke liye valid hai):</p>
        <p><a href="${resetUrl}">${resetUrl}</a></p>
        <p>Agar aap ne ye request nahi ki, is email ko ignore kar dein.</p>
      `,
    });

    console.log("Resend result:", JSON.stringify(emailResult));

    return NextResponse.json({ message: "Agar account exist karta hai, email bhej di gayi hai." });
  } catch (err) {
    console.error("Forgot-password error:", err);
    return NextResponse.json({ error: "Kuch galat ho gaya." }, { status: 500 });
  }
}