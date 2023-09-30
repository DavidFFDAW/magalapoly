import "@/styles/styles.css";
import type { Metadata } from "next";
import "bootstrap-icons/font/bootstrap-icons.css";
import AuthSession from "@/components/Providers/AuthSession";
import Head from "next/head";
import RegisterWorker from "@/components/ServiceWorker/RegisterWorker";

export const metadata: Metadata = {
    title: "Magalapoly",
    description: "Juego basado en el famoso Monopoly pero para en ciudad",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <Head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <body>
                <RegisterWorker />
                <main className="main-app-wrapper">
                    <AuthSession>{children}</AuthSession>
                </main>
            </body>
        </html>
    );
}
