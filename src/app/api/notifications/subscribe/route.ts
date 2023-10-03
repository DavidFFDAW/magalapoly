import { NextResponse } from 'next/server';
import subscriptor from '../subscriptions';

export async function POST(request: Request) {
    const subscription = await request.json();
    subscriptor.addSubscription(subscription);
    console.log({ subscriptors: subscriptor.subs });



    return NextResponse.json(
        {
            message: 'Push sent',
            subscriptor,
        },
        {
            status: 200,
        },
    );
}
