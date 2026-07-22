import { NextResponse } from "next/server";
import { prisma } from "@/lib/db/prisma"; // Aap ke project ke path ke mutabiq

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Business Create karein
    const business = await prisma.business.create({
      data: body,
    });

    // 2. Business create hote hi background mein crawl shuru kar do
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/business/${business.id}/crawl`, {
      method: "POST",
    }).catch(() => {}); // fire-and-forget, user ko wait na karna pade

    // 3. Response return karein
    return NextResponse.json({ business }, { status: 201 });
  } catch (err) {
    console.error("Business creation error:", err);
    return NextResponse.json(
      { error: "Something went wrong while creating business." },
      { status: 500 }
    );
  }
}