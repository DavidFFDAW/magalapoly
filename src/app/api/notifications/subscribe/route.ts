import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const subscription = await request.json();
    global.subscription.push(subscription);

    return NextResponse.json(
        {
            message: 'Push sent',
        },
        {
            status: 200,
        },
    );
}
