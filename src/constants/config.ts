export const MALAGA_COORDS: [number, number] = [36.7263744, -4.4302336];
export const DEFAULT_MAP_ZOOM = 14;

export const USER_ROLES = {
    ADMIN: "ADMIN",
    TESTER: "TESTER",
    PLAYER: "PLAYER",
};

export const PROTECTED_ROUTES = {
    ADMIN: "/admin",
    GAME: "/game",
};

export const STATIC_PAGES = {
    ABOUT: "/about",
    CONTACT: "/contact",
    PRIVACY: "/privacy",
    TERMS: "/terms",
    DENIED: "/denied",
};

export const envVapid: {
    email: string;
    server: string;
    public: string;
} = {
    email: process.env.NEXT_PUBLIC_PUSH_EMAIL || "",
    server: process.env.NEXT_PUBLIC_PUSH_SERVER_KEY || "",
    public: process.env.NEXT_PUBLIC_PUSH_PUBLIC_KEY || "",
};
