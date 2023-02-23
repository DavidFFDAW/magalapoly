import UserContextProvider from "@/context/UserContext";
import "@/styles/styles.css";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <title>MagalaPoly</title>
            <UserContextProvider>
                <Component {...pageProps} cookies={pageProps.cookies} />;
            </UserContextProvider>
        </>
    );
};

export default MyApp;
