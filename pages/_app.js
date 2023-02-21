import { layouts } from "../styles/Layouts";
import { globals } from "../styles/Globals";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <style jsx global>
                {layouts}
            </style>
            <style jsx global>
                {globals}
            </style>
            <title>MagalaPoly</title>
            <Component {...pageProps} />;
        </>
    );
};

export default MyApp;
