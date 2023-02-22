import { useRouter } from "next/router";
import { cookies } from "next/headers";
import cookieCutter from "cookie-cutter";
import React from "react";

export default function AuthRedirector({ children }) {
    const [authorized, setAuthorized] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const cookie = cookieCutter.get("Phpstorm-50b9282c");
        console.log("coquetas: ", cookie);

        // if (cookie.next_auth_token) {
        //     setAuthorized(true);
        // }
    }, []);

    return <>{authorized ? { children } : null}</>;
}
