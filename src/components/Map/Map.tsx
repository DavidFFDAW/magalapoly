'use client';
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
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {children}
        </MapContainer>
    );
}
