import Head from "next/head";

export default function PageWrapper({ title, replace = false, children }) {
    const titleText = replace ? title : `MagalaPoly | ${title}`;

    return (
        <>
            <Head>
                <title>{titleText}</title>
            </Head>
            <div className="page-wrapper">{children}</div>
        </>
    );
}
