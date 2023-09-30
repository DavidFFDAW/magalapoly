import { envVapid } from "@/constants/config";
import { urlBase64ToUint8Array } from "@/utils/push.utils";

export async function registerServiceWorker() {
    const timestamp = new Date().getTime();

    try {
        const registration: ServiceWorkerRegistration =
            await navigator.serviceWorker.register(
                `/custom-service-worker.js?v=${timestamp}`,
                {
                    scope: "/",
                }
            );

        if (registration.active) {
            const permission = await Notification.requestPermission();

            if (permission === "granted") {
                const subscription = await registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array(
                        envVapid.public
                    ),
                });

                fetch("/api/notifications/subscribe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(subscription),
                });
            }
        }
    } catch (error) {
        console.error(error);
    }
}
