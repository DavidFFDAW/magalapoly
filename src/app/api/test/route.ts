import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ message: 'GET method not allowed' }, { status: 200 });
}

export function POST(request: Request) {
    return NextResponse.json({ message: 'POST method has been called' }, { status: 200 });
}