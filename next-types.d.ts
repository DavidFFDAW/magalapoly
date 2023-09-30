import webpush from "@/app/api/web.push";

declare global {
    var subscription: webpush.PushSubscription;
}
