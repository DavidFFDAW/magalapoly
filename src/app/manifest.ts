import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "MagalaPoly",
        short_name: "MagalaPoly",
        description: "El monopoly más real en Málaga",
        scope: "/",
        start_url: "/",
        display: "standalone",
        background_color: "#782528",
        theme_color: "#591c1e",
        lang: "es",
        icons: [
            {
                src: "/monopoly-icon.png",
                sizes: "any",
                type: "image/x-icon maskable",
            },
            {
                src: "/monopoly-icon.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/monopoly-icon.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}
