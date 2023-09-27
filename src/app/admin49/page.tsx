"use client";
import React from "react";
import { useSession } from "next-auth/react";

export default function WPAdminPage() {
    const { data: session, status } = useSession();

    console.log({ session, status });

    return (
        <div>
            <h1 className="monopoly">Admin</h1>
        </div>
    );
}
