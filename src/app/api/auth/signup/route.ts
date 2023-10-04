import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function GET() {
    return NextResponse.json(
        { message: "GET method not allowed" },
        { status: 415 }
    );
}

export async function POST(request: Request) {
    const { email, password, username, name, lastname } = await request.json();

    try {
        const foundUser = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });

        if (foundUser) {
            return NextResponse.json(
                { error: true, message: "Este correo ya está en uso" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const newUser = await prisma.users.create({
            data: {
                email: email,
                username: username,
                password: hashedPassword,
                name: name,
                lastname: lastname,
                role_id: 1,
                is_request: true,
                active: true,
            },
        });

        if (newUser) {
            return NextResponse.json(
                { error: false, message: "Se ha creado el usuario de forma correcta", user: newUser },
                { status: 200 }
            );
        }
    } catch (error: any) {
        return NextResponse.json({ error: true, message: error.message }, { status: 400 });
    }
}
