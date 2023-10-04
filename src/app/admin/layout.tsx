import { BootstrapIcon } from "@/components/Icons/Icon";
import Link from "next/link";
import React from "react";
import AdminClass from "./components/AdminClass";
import GoBack from "./components/GoBack";

interface Props {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: Props) {
    return <section className="admin-layout">
        <AdminClass />
        <header className="w1 admin-header flex between acenter">
            <GoBack />
            <Link href="/api/auth/signout" className="flex">
                <BootstrapIcon icon="box-arrow-right" color="#fff" />
                <span className="futura font-500 white">Cerrar sesión</span>
            </Link>
        </header>
        {children}
    </section>;
}
