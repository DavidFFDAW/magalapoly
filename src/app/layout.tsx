import '../styles/globals.css';
import AuthSession from '../components/AuthSession';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <head />
            <body>
                <AuthSession>{children}</AuthSession>
            </body>
        </html>
    );
}
