import dynamic from "next/dynamic";
import CustomImage from "@/components/Image";
import RegisterSW from "@/components/RegisterSW";
import { useEffect, useState } from "react";
import NativeLink from "@/components/NativeLink";
import PageWrapper from "@/components/PageWrapper";
import { useUserContext } from "@/context/UserContext";

const HomePage = () => {
    const [ReadyMap, setReadyMap] = useState({ isReady: false, map: null });
    const { user } = useUserContext();
    // console.log("Landing User: ", user);

    useEffect((_) => {
        if (typeof window !== "undefined") {
            const tmp = dynamic(() => import("@/components/Map"), {
                ssr: false,
            });
            setReadyMap((_) => ({ isReady: true, map: tmp }));
        }
    }, []);

    const LoginButton = Boolean(user) ? (
        <NativeLink href="/user/data" className="login-button">
            {user.username}
        </NativeLink>
    ) : (
        <NativeLink href="/auth/login" className="login-button">
            Iniciar sesión
        </NativeLink>
    );

    return (
        <>
            <RegisterSW />
            <PageWrapper title={"Landing"}>
                <div
                    className="flex end al-end"
                    style={{ padding: "10px 20px" }}
                >
                    {LoginButton}
                </div>

                <div
                    className="flex center al-center"
                    style={{
                        height: "auto",
                        paddingBottom: 80,
                        paddingTop: 5,
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
                            <strong>MAGALAPOLY</strong> es un juego de mesa
                            basado en el famoso Monopoly, pero con un toque de
                            realismo.
                            <br /> <br />
                            En esta versión del juego podrás comprar propiedades
                            en la vida real y ¡en tu ciudad!, deberás pagar
                            impuestos, y podrás ganar dinero con ellas. <br />
                            <br />
                            Pero cuidado, si no tienes dinero, podrás ir a la
                            cárcel o algo peor...
                        </p>

                        <p className="space-up text" style={{ width: "100%" }}>
                            Actualmente el juego está en fase de desarrollo,
                            pero estas son algunas de las propiedades que puedes
                            encontrar:
                        </p>

                        {ReadyMap.isReady && (
                            <ReadyMap.map
                                zoom={13}
                                height={400}
                                style={{ marginBottom: 20 }}
                                markers={[
                                    {
                                        lat: 36.734216876853004,
                                        lng: -4.433079957962037,
                                        popup: "Carrefour Rosaleda",
                                    },

                                    {
                                        lat: 36.72017580418115,
                                        lng: -4.419454336166383,
                                        popup: "Catedral de Málaga",
                                    },
                                ]}
                            ></ReadyMap.map>
                        )}
                    </div>
                </div>
            </PageWrapper>
        </>
    );
};

export default HomePage;
