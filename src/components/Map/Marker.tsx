'use client';
import React from 'react';
import { Icon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

interface MapMarkerProps {
    lat: number;
    lng: number;
    text: string;
}

export default function MapMarker({ lat, lng, text }: MapMarkerProps) {
    // const map = useMapEvents({
    //     click: (e) => {
    //         const { lat, lng } = e.latlng;
    //         console.log({ lat, lng });
    //     }
    // });

    return (
        <Marker
            icon={
                new Icon({
                    iconUrl: '/285659_marker_map_icon.svg',
                    iconSize: [25, 25],
                })
            }
            position={[lat, lng]}
        >
            <Popup>{text}</Popup>
        </Marker>
    );
}
