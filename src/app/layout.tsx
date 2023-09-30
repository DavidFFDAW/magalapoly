import "@/styles/styles.css";
import type { Metadata } from "next";
import "bootstrap-icons/font/bootstrap-icons.css";
import AuthSession from "@/components/Providers/AuthSession";
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
            <body>
                <RegisterWorker />
                <main className="main-app-wrapper">
                    <AuthSession>{children}</AuthSession>
                </main>
            </body>
        </html>
    );
}
