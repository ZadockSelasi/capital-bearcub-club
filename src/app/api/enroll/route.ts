import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, targetId, targetTitle, name, email, phone, message } = body;

        if (!type || !targetId || !targetTitle || !name || !email) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const enrollment = await prisma.enrollment.create({
            data: {
                type,
                targetId,
                targetTitle,
                name,
                email,
                phone: phone || null,
                message: message || null,
                status: "PENDING",
            },
        });

        return NextResponse.json({ success: true, enrollment });
    } catch (error: any) {
        console.error("Enrollment Error:", error);
        return NextResponse.json({ error: "Failed to submit enrollment" }, { status: 500 });
    }
}
