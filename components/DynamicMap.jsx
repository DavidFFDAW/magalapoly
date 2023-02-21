import dynamic from "next/dynamic";

export default function DynamicMap({ children, ...props }) {
    const ClientMap = dynamic(
        () => import("./Map"), // replace '@components/map' with your component's location
        { ssr: false } // This line is important. It's what prevents server-side render
    );
    return <ClientMap {...props}>{children}</ClientMap>;
}
