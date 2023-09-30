"use client";
import React, { useEffect } from "react";

export default function Geolocation() {
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log(position);
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }, []);

    return <div>Geolocation</div>;
}
