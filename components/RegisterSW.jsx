import { useEffect, useState } from 'react'

export default function RegisterSW() {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [subscription, setSubscription] = useState(null);
    const [registration, setRegistration] = useState(null);

    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            "serviceWorker" in navigator &&
            window.workbox !== undefined
        ) {
            // run only in browser
            navigator.serviceWorker.ready.then((reg) => {
                reg.pushManager.getSubscription().then((sub) => {
                    if (
                        sub &&
                        !(
                            sub.expirationTime &&
                            Date.now() > sub.expirationTime - 5 * 60 * 1000
                        )
                    ) {
                        setSubscription(sub);
                        setIsSubscribed(true);
                    }
                });
                setRegistration(reg);
            });
        }
    }, []);

    const subscribeButtonOnClick = async (event) => {
        event.preventDefault();
        const sub = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: base64ToUint8Array(
                process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY
            ),
        });
        // TODO: you should call your API to save subscription data on server in order to send web push notification from server
        setSubscription(sub);
        setIsSubscribed(true);
        console.log("web push subscribed!");
        console.log(sub);
    };

    const unsubscribeButtonOnClick = async (event) => {
        event.preventDefault();
        await subscription.unsubscribe();
        // TODO: you should call your API to delete or invalidate subscription data on server
        setSubscription(null);
        setIsSubscribed(false);
        console.log("web push unsubscribed!");
    };

    const sendNotificationButtonOnClick = async (event) => {
        event.preventDefault();
        if (subscription == null) {
            console.error("web push not subscribed");
            return;
        }

        await fetch("/api/notification", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                subscription,
            }),
        });
    };
};
