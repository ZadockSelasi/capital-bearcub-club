import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const programs = await prisma.program.findMany({
            orderBy: { createdAt: "desc" },
        });
        return NextResponse.json(programs);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch programs" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, description, category, image } = body;

        if (!title || !description || !category) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const program = await prisma.program.create({
            data: { title, description, category, image },
        });

        return NextResponse.json(program);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create program" }, { status: 500 });
    }
}
