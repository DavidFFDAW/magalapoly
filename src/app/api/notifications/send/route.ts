import { NextResponse } from 'next/server';
import webpush from '../../web.push';
import subscriptor from '../subscriptions';

export async function GET() {
    const data = {
        title: 'Hello from the server',
        message: 'This is a push notification',
    };

    console.log({ subscriptors: subscriptor.subs });


    if (subscriptor.subs.length > 0) {
        subscriptor.subs.forEach(sub => {
            webpush.sendNotification(sub, JSON.stringify(data));
        });
    }

    return NextResponse.json(
        {
            message: 'Push sent',
        },
        {
            status: 200,
        },
    );
}

export async function POST(request: Request) {
    const { message, title } = await request.json();
    console.log({ global });

    if (subscriptor.subs.length > 0) {
        subscriptor.subs.forEach(sub => {
            webpush.sendNotification(
                sub,
                JSON.stringify({
                    title,
                    message,
                }),
            );
        });
    }

    return NextResponse.json(
        {
            message: 'Push sent',
        },
        {
            status: 200,
        },
    );
}
