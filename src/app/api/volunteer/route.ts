import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, interest, message } = body;

        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and email are required" },
                { status: 400 }
            );
        }

        const volunteer = await prisma.volunteer.create({
            data: {
                name,
                email,
                interest: interest || "General Inquiry",
                message: message || null
            },
        });

        console.log("Volunteer signed up:", volunteer);

        return NextResponse.json({ success: true, volunteer });
    } catch (error) {
        console.error("Volunteer API Error:", error);
        return NextResponse.json(
            { error: "Failed to sign up as volunteer" },
            { status: 500 }
        );
    }
}
