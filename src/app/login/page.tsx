'use client';

import React, { FormEvent } from 'react';

export default function LoginPage() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        const email = form.get('login_email');
        const password = form.get('login_password');

        console.log({ email, password });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="abc@gmail.com" name="login_email" />
                <input type="password" placeholder="********" name="login_password" />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}
