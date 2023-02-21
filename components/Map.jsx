import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";


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
