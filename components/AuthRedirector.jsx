import React from "react";
import Router from "next/router";

export default function AuthRedirector({ children }) {
    const [authorized, setAuthorized] = React.useState(false);

    React.useEffect(() => {
        const hasToken = Boolean(window.localStorage.getItem("next_auth_token"));
        setAuthorized(hasToken);

        if (!hasToken) {
            Router.push("/auth/login");
        }
    }, []);

    return <>{authorized ? { children } : null}</>;
}
