import { useEffect, useState } from "react";
import Head from "next/head";
import CustomImage from "../components/Image";
import DynamicMap from "../components/DynamicMap";
import { Marker, Popup } from "react-leaflet";

const base64ToUint8Array = (base64) => {
    const padding = "=".repeat((4 - (base64.length % 4)) % 4);
    const b64 = (base64 + padding).replace(/-/g, "+").replace(/_/g, "/");

    const rawData = window.atob(b64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
};

const Index = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [subscription, setSubscription] = useState(null);
    const [registration, setRegistration] = useState(null);
    const [isMapReady, setIsMapReady] = useState(false);

    useEffect(() => {
        if (
            typeof window !== "undefined" &&
            "serviceWorker" in navigator &&
            window.workbox !== undefined
        ) {
            setIsMapReady(true);
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

    // const subscribeButtonOnClick = async (event) => {
    //     event.preventDefault();
    //     const sub = await registration.pushManager.subscribe({
    //         userVisibleOnly: true,
    //         applicationServerKey: base64ToUint8Array(
    //             process.env.NEXT_PUBLIC_WEB_PUSH_PUBLIC_KEY
    //         ),
    //     });
    //     // TODO: you should call your API to save subscription data on server in order to send web push notification from server
    //     setSubscription(sub);
    //     setIsSubscribed(true);
    //     console.log("web push subscribed!");
    //     console.log(sub);
    // };

    // const unsubscribeButtonOnClick = async (event) => {
    //     event.preventDefault();
    //     await subscription.unsubscribe();
    //     // TODO: you should call your API to delete or invalidate subscription data on server
    //     setSubscription(null);
    //     setIsSubscribed(false);
    //     console.log("web push unsubscribed!");
    // };

    // const sendNotificationButtonOnClick = async (event) => {
    //     event.preventDefault();
    //     if (subscription == null) {
    //         console.error("web push not subscribed");
    //         return;
    //     }

    //     await fetch("/api/notification", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             subscription,
    //         }),
    //     });
    // };

    return (
        <>
            <Head>
                <title>MAGALAPOLY - Landing</title>
            </Head>

            <div
                className="flex center al-center"
                style={{
                    height: "120vh",
                    paddingBottom: 80,
                    paddingTop: 80,
                }}
            >
                <div
                    className="flex start al-center gap column"
                    style={{ width: "75%" }}
                >
                    <CustomImage
                        src={"/icons/magalapoly.png"}
                        alt={"MAGALAPOLY"}
                        style={{ width: "65%", height: "auto" }}
                        className="space-up"
                    />

                    <h1 className="space-up text big">
                        Bienvenido a <strong>MAGALAPOLY</strong>
                    </h1>

                    <p className="space-up text" style={{ width: "100%" }}>
                        <strong>MAGALAPOLY</strong> es un juego de mesa basado
                        en el famoso Monopoly, pero con un toque de realismo.
                        <br /> <br />
                        En esta versión del juego podrás comprar propiedades en
                        la vida real y ¡en tu ciudad!, deberás pagar impuestos,
                        y podrás ganar dinero con ellas. <br />
                        <br />
                        Pero cuidado, si no tienes dinero, podrás ir a la cárcel
                        o algo peor...
                    </p>

                    <p className="space-up text" style={{ width: "100%" }}>
                        Actualmente el juego está en fase de desarrollo, pero
                        estas son algunas de las propiedades que puedes
                        encontrar:
                    </p>

                    {isMapReady && (
                        <DynamicMap
                            zoom={13}
                            height={"45%"}
                            style={{ marginBottom: 20 }}
                        >
                            <Marker
                                position={[
                                    36.734216876853004, -4.433079957962037,
                                ]}
                            >
                                <Popup>Carrefour Rosaleda</Popup>
                            </Marker>
                            <Marker
                                position={[
                                    36.72017580418115, -4.419454336166383,
                                ]}
                            >
                                <Popup>Catedral de Málaga</Popup>
                            </Marker>
                        </DynamicMap>
                    )}
                </div>
            </div>
        </>
    );
};

export default Index;
