"use client";
import { getCurrentPosition } from "@/services/geolocation.service";
import React, { useEffect } from "react";
import { Marker } from ".";
import { ContentOrNull } from "../Loaders";

interface State {
    lat: number;
    lng: number;
    show: boolean;
}

export default function CurrentPositionMarker() {
    const [marker, setMarker] = React.useState<State>({
        lat: 0,
        lng: 0,
        show: false,
    });

    useEffect(() => {
        const geolocated = getCurrentPosition();
        geolocated.then((position: GeolocationPosition) => {
            console.log(position);

            setMarker({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                show: true,
            });
        });
    }, []);

    return (
        <ContentOrNull condition={marker.show}>
            <Marker text="Located" lat={marker.lat} lng={marker.lng} />
        </ContentOrNull>
    );
}
