import Link from "next/link";

export default function Home() {
    return (
        <main className="main-app-wrapper">
            <h1 className="monopoly uppercase">Magalapolio</h1>

            <Link href="/login">Login</Link>
        </main>
    );
}
