import React from "react";
import RegisterForm from "./RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
    description: "Login page",
};

export default function LoginPage() {
    return (
        <div style={{ paddingTop: 25 }}>
            <RegisterForm />
        </div>
    );
}
