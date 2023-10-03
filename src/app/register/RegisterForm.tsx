'use client';
import { FormErrorMessage } from '@/components/Form';
import HttpLocal from '@/services/http.local.service';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';

export default function RegisterForm(): JSX.Element {
    const router = useRouter();
    const [error, setError] = React.useState<string | null>('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        if (!form.get('login_email') || !form.get('login_password')
            || !form.get('login_name') || !form.get('login_lastname') || !form.get('login_username'))
            return setError('Por favor, ingrese los datos');

        try {
            const response = await HttpLocal.post('/api/auth/signup', {
                email: form.get('login_email')?.toString().trim(),
                password: form.get('login_password')?.toString().trim(),
                name: form.get('login_name')?.toString().trim(),
                lastname: form.get('login_lastname')?.toString().trim(),
                username: form.get('login_username')?.toString().trim(),
            });

            console.log({ response });

            if (response?.error) return setError(response.error as string);
            if (!Boolean(response?.error)) return router.push('/');
        } catch (error: any) {
            setError(error.message as string);
        }
    };

    return (
        <>
            {error && <FormErrorMessage message={error} setError={setError} />}

            <h2 className="monopoly font-700 upper">Solicitar Beta</h2>

            <form onSubmit={handleSubmit} className="w1 flex acenter column gap-medium">
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
                <input
                    className="w1 input"
                    type="text"
                    placeholder="Nombre"
                    name="login_name"
                    autoComplete="name"
                />

                <input
                    className="w1 input"
                    type="text"
                    placeholder="Apellidos"
                    name="login_lastname"
                    autoComplete="lastname"
                />

                <input
                    className="w1 input"
                    type="text"
                    placeholder="Nombre de usuario"
                    name="login_username"
                    autoComplete="username"
                />

                <div className="w1 flex children between gap">
                    <button className="btn futura font-300" type="reset">
                        Borrar
                    </button>
                    <button className="btn cta futura font-700" type="submit">
                        Solicitar
                    </button>
                </div>
            </form>
        </>
    );
}
