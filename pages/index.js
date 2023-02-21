import Head from "next/head";
import CustomImage from "../components/Image";
import { Marker, Popup } from "react-leaflet";
import RegisterSW from "../components/RegisterSW";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("@/components/DynamicMap"), {
    ssr: false,
});

const HomePage = () => {

    return (
        <>
            <Head>
                <title>MAGALAPOLY - Landing</title>
            </Head>

            <RegisterSW/>
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

                    <DynamicMap
                        zoom={13}
                        height={400}
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
                </div>
            </div>
        </>
    );
};

export default HomePage;
