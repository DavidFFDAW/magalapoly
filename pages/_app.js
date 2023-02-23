import UserContextProvider from "@/context/UserContext";
import "@/styles/styles.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>MagalaPoly</title>
            </Head>
            <UserContextProvider>
                <Component {...pageProps} cookies={pageProps.cookies} />;
            </UserContextProvider>
        </>
    );
};

export default MyApp;
