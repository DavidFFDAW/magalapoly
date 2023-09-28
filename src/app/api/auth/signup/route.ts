import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

export async function GET() {
    return NextResponse.json({ message: 'GET method not allowed' }, { status: 200 });
}

export async function POST(request: Request) {
    const { email, password, username, name, lastname } = await request.json();
    console.log({ email, password, name, lastname });

    try {
        const foundUser = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });

        if (foundUser) {
            return NextResponse.json({ message: 'User already exists' }, { status: 400 });
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
            },
        });

        if (newUser) {
            return NextResponse.json({ message: 'User created', user: newUser }, { status: 200 });
        }
    } catch (error: any) {
        return NextResponse.json({ message: error.message }, { status: 400 });
    }
}
