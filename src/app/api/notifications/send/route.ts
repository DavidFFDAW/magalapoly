import { NextResponse } from "next/server";
import webpush from "../../web.push";

export async function GET() {
    const data = {
        title: "Hello from the server",
        message: "This is a push notification",
    };

    if (global.subscription) {
        webpush.sendNotification(global.subscription, JSON.stringify(data));
    }

    return NextResponse.json(
        {
            message: "Push sent",
        },
        {
            status: 200,
        }
    );
}

export async function POST(request: Request) {
    const { message, title } = await request.json();
    console.log({ global });

    if (global.subscription) {
        webpush.sendNotification(
            global.subscription,
            JSON.stringify({
                title,
                message,
            })
        );
    }

    return NextResponse.json(
        {
            message: "Push sent",
        },
        {
            status: 200,
        }
    );
}
