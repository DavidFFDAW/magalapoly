import "@/styles/styles.css";
import { makeCookieObject } from "@/utils/cookie.parser";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <title>MagalaPoly</title>
            <Component {...pageProps} cookies={pageProps.cookies} />;
        </>
    );
};

export function getServerSideProps(context) {
    const cookies = makeCookieObject(context.req.headers.cookie || "");

    return {
        props: {
            cookies,
        },
    };
}

export default MyApp;
