"use client";
import { FormErrorMessage } from "@/components/Form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

export default function LoginForm(): JSX.Element {
    const router = useRouter();
    const [error, setError] = React.useState<string | null>("");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        if (!form.get("login_email") || !form.get("login_password")) return setError("Por favor, ingrese su correo y contraseña");

        try {

            const response = await signIn("credentials", {
                email: form.get("login_email"),
                password: form.get("login_password"),
                redirect: false,
            });

            if (response?.error) return setError(response.error as string);
            if (Boolean(response?.error)) return router.push("/admin");
        } catch (error: any) {
            setError(error.message as string);
        }

    };

    return (
        <>
            {error && <FormErrorMessage message={error} setError={setError} />}

            <h2 className="monopoly font-700 upper">Iniciar sesión</h2>

            <form
                onSubmit={handleSubmit}
                className="w1 flex acenter column gap-medium"
            >
                <input
                    className="w1 input"
                    type="email"
                    placeholder="abc@gmail.com"
                    name="login_email"
                    autoComplete="email"
                />
                <input
                    className="w1 input"
                    type="password"
                    placeholder="********"
                    name="login_password"
                    autoComplete="current-password"
                />

                <div className="w1 flex children between gap">
                    <button className="btn futura font-300" type="reset">
                        Volver
                    </button>
                    <button className="btn cta futura font-700" type="submit">
                        Iniciar sesión
                    </button>
                </div>
            </form>


        </>
    );
}
