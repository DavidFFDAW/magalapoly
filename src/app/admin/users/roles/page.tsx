import React from "react";
import { prisma } from "@/lib/db";
import { AdminTitle } from "@/components/Title/AdminTitle";
import Link from "next/link";

async function getRoles() {
    return await prisma.role.findMany();
}

export default async function UserRolesPage() {
    const roles = await getRoles();

    return (
        <>
            <AdminTitle
                icon="key-fill"
                title="Roles de usuario"
                description="Controla los roles de los usuarios de la aplicación"
            />

            <div className="flex center down">
                {roles.length > 0 ? (
                    <p>Hay roles</p>
                ) : (
                    <p className="white monopoly">
                        No hay roles disponibles actualmente. Crea uno{" "}
                        <Link
                            href="/admin/users/roles/create"
                            className="monopoly underline"
                        >
                            aquí
                        </Link>
                    </p>
                )}
            </div>
        </>
    );
}
