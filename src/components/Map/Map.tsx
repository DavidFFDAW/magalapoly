"use client";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { MALAGA_COORDS } from "@/constants/config";
import "leaflet/dist/leaflet.css";

interface MapProps {
    height?: number | string;
    width?: number | string;
    cursor?: string;
    style?: React.CSSProperties;
    zoom?: number;
    children?: React.ReactNode;
}

export default function Map({ children, ...props }: MapProps) {
    const tileURL = "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}";

    return (
        <MapContainer
            center={MALAGA_COORDS}
            zoom={props.zoom || 13}
            scrollWheelZoom={true}
            style={{
                height: props.height || "100%",
                width: props.width || "100%",
                cursor: props.cursor || "default",
                ...props.style,
            }}
            key={Math.random()}
        >
            <TileLayer
                attribution={`&copy; <a href="${tileURL}">OpenStreetMap</a> contributors`}
                url={tileURL}
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
                maxZoom={50}
            />

            {children}
        </MapContainer>
    );
}
