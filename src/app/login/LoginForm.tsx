"use client";
import HttpLocal from "@/services/http.local.service";
import React, { FormEvent } from "react";

export default function LoginForm(): JSX.Element {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const response = await HttpLocal.post("/api/auth/signup", {
            email: form.get("login_email"),
            password: form.get("login_password"),
        });

        console.log(response);
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="w1 flex acenter column gap-medium"
            >
                <input
                    className="w1"
                    type="email"
                    placeholder="abc@gmail.com"
                    name="login_email"
                    autoComplete="email"
                />
                <input
                    className="w1"
                    type="password"
                    placeholder="********"
                    name="login_password"
                    autoComplete="current-password"
                />

                <button className="w1" type="submit">
                    Login
                </button>
            </form>
        </>
    );
}
