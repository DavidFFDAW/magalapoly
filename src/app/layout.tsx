import "@/styles/styles.css";
import type { Metadata } from "next";
import AuthSession from "@/components/Providers/AuthSession";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es">
            <body>
                <main className="main-app-wrapper">
                    <AuthSession>{children}</AuthSession>
                </main>
            </body>
        </html>
    );
}
