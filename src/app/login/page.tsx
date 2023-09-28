import React from "react";
import LoginForm from "./LoginForm";

export const metadata = {
    title: "Login",
    description: "Login page",
};

export default function LoginPage() {
    return (
        <div style={{ paddingTop: 25 }}>
            <LoginForm />
        </div>
    );
}
