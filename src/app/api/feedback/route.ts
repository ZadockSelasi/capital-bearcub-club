import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const feedback = await prisma.contact.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(feedback);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch feedback" }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    try {
        const body = await request.json();
        const { id, read } = body;

        const updated = await prisma.contact.update({
            where: { id },
            data: { read },
        });

        return NextResponse.json(updated);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update feedback" }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) return NextResponse.json({ error: "ID required" }, { status: 400 });

        await prisma.contact.delete({
            where: { id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete feedback" }, { status: 500 });
    }
}
