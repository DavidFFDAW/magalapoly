import dynamic from "next/dynamic";

const Map = dynamic(
    () => import("/components/Map"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
);

export default function DynamicMap({ children, ...props }) {
    return <Map {...props}>{children}</Map>;
}
