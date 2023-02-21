import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";

function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
        click(event) {
            console.log(event.latlng);
            // map.locate();
        },
        locationfound(e) {
            setPosition(e.latlng);
            // console.log(e.latlng);
            // map.flyTo(e.latlng, map.getZoom());
        },
    });

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    );
}

export default function Map({ children, ...props }) {
    const malaga = [36.7263744, -4.4302336];

    return (
        <MapContainer
            center={malaga}
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
