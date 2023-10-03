import { PushSubscription } from "web-push";

let subscriptions: PushSubscription[] = [];

export function addSub(subscription: PushSubscription) {
    subscriptions = [...subscriptions, subscription];
}

export default {
    subs: subscriptions,
    addSubscription: addSub
}