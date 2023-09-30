"use client";
import React, { useEffect } from "react";
import { registerServiceWorker } from "./useRegistration";

export default function RegisterWorker() {
    useEffect(() => {
        if ("serviceWorker" in navigator) {
            registerServiceWorker();
        }
    }, []);

    return <></>;
}
