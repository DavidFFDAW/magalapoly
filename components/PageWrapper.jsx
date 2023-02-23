import Head from "next/head";
import AuthRedirector from "./AuthRedirector";

export default function PageWrapper({ title, replace = false,  auth, children }) {
    const titleText = replace ? title : `MagalaPoly | ${title}`;

    const Auth0 = Boolean(auth) ? (
        <AuthRedirector>
            <div className="page-wrapper">{children}</div>
        </AuthRedirector>
    ) : (
        <div className="page-wrapper">{children}</div>
    );

    return (
        <>
            <Head>
                <title>{titleText}</title>
            </Head>
            { Auth0 }
        </>
    );
}
