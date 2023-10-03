import { Marker } from "@/components/Map";
import { registerServiceWorker } from "@/components/ServiceWorker/useRegistration";
import dynamic from "next/dynamic";
import Link from "next/link";
import SubscribeButton from "./SubscribeButton";
const Map = dynamic(() => import("../components/Map/Map"), { ssr: false });

export default function Home() {
    return (
        <section className="landing-page">
            {/* <Geolocation /> */}
            <header>
                <h1
                    style={{ fontSize: 35, margin: 0 }}
                    className="futura uppercase"
                >
                    <span>
                        Bienvenido a
                        <strong className="red monopoly"> MAGALAPOLY</strong>
                    </span>
                </h1>
            </header>

            <article>
                <div className="text-content" style={{ marginTop: 50 }}>
                    <p
                        className="white line-height tstart"
                        style={{ margin: "15px 0" }}
                    >
                        <strong className="red monopoly">MAGALAPOLY</strong> es
                        un juego de mesa basado en el famoso Monopoly, pero con
                        un toque de realismo.
                    </p>
                    <p
                        className="white line-height tstart"
                        style={{ margin: "15px 0" }}
                    >
                        En esta versión del juego podrás comprar propiedades en
                        la vida real y ¡en tu ciudad!, deberás pagar impuestos,
                        y podrás ganar dinero con ellas. Pero cuidado, si no
                        tienes dinero, podrás ir a la cárcel o algo peor...
                    </p>
                </div>
            </article>

            <article>
                <div className="warning-advertise-still-in-dev">
                    <p className="font-500">
                        Actualmente el juego está en fase de desarrollo, pero
                        estas son algunas de las propiedades que puedes
                        encontrar:
                    </p>
                </div>
            </article>

            <aside className="map">
                <Map zoom={14} height={400} style={{ marginBottom: 20 }}>
                    <Marker
                        lat={36.720107849297456}
                        lng={-4.419670375791611}
                        text="Basílica de la Encarnación (Catedral)"
                    />
                    <Marker
                        lat={36.734216876853004}
                        lng={-4.433079957962037}
                        text="Carrefour Rosaleda"
                    />
                </Map>
            </aside>

            <section className="account-page-section" style={{ marginTop: 60 }}>
                <div className="account-page-section-content">
                    <h2 className="monopoly font-700 upper flex">
                        No te pierdas nada</h2>
                    <p
                        className="white line-height tstart"
                        style={{ margin: "15px 0" }}
                    >
                        Subscribete pulsando el botón de abajo para y activa las notificaciones para recibir las últimas novedades del juego.
                    </p>

                    <div className="w1 flex center responsive acenter">
                        <SubscribeButton />
                    </div>
                </div>
            </section>


            <section className="account-page-section" style={{ marginTop: 80 }}>
                <div className="account-page-section-content">
                    <h2 className="monopoly font-700 upper">¿Quieres jugar?</h2>
                    <p
                        className="white line-height tstart"
                        style={{ margin: "15px 0" }}
                    >
                        Accede a la aplicación con tu cuenta o solicita entrar
                        en la beta cerrada para poder acceder y probar el juego.
                    </p>

                    <div className="flex between children responsive acenter">
                        <Link href="/register">
                            <button
                                className="w1 btn futura font-500 upper"
                                type="button"
                            >
                                Solicitar beta
                            </button>
                        </Link>
                        <Link href="/login">
                            <button
                                className="w1 btn cta futura font-700"
                                type="button"
                            >
                                Acceder
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* <Link href="/login">Login</Link> */}
        </section>
    );
}
