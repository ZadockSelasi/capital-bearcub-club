import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const subscribers = await prisma.subscriber.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(subscribers);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch subscribers" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        const subscriber = await prisma.subscriber.upsert({
            where: { email },
            update: { active: true },
            create: { email },
        });

        return NextResponse.json(subscriber);
    } catch (error) {
        return NextResponse.json({ error: "Failed to process subscriber" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

        await prisma.subscriber.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete subscriber" }, { status: 500 });
    }
}
