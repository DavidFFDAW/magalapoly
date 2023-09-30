const installEvent = () => {
    self.addEventListener("install", (e) => {
        // Force the waiting service worker to become the active service worker.
        self.skipWaiting();

        e.waitUntil(
            caches.open("public").then((cache) => {
                console.log("cacheando");
                // Cache app public files
                return cache.addAll([
                    "/285659_marker_map_icon.svg",
                    "/next.svg",
                    "/vercel.svg",
                ]);
            })
        );
    });
};
installEvent();

const activateEvent = () => {
    self.addEventListener("activate", () => {
        // Remove old caches
        caches.keys().then((keys) => {
            return Promise.all(
                keys
                    .filter((key) => key !== "static")
                    .map((key) => caches.delete(key))
            );
        });

        // Force the waiting service worker to become the active service worker.
        self.clients.claim();
    });
};
activateEvent();

// Add push notification
self.addEventListener("push", (e) => {
    const data = e.data.json();

    const datas = {
        title: data.title || "Magalapoly Notification",
        body: data.body || "Magalapoly Notification Content",
        icon: "/monopoly-icon.png",
    };

    self.registration.showNotification(datas.title, {
        title: datas.title,
        body: datas.body,
        icon: datas.icon,
    });
});
