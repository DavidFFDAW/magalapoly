import Link from "next/link";
import React from "react";

export default function WPAdminPage() {
    return (
        <div>
            <h1 className="monopoly">Admin</h1>

            <div className="w1 flex column center astart">
                <Link href="/admin/users/roles">
                    Roles
                </Link>

                <Link href="/admin/users">
                    Usuarios
                </Link>
            </div>
        </div>
    );
}
