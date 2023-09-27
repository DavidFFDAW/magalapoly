'use client';
import HttpLocal from '@/services/http.local.service';
import React, { FormEvent } from 'react'

export default function LoginForm(): JSX.Element {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);

        HttpLocal.post('/api/test', {
            email: form.get('login_email'),
            password: form.get('login_password'),
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="abc@gmail.com" name="login_email" autoComplete='email' />
                <input type="password" placeholder="********" name="login_password" autoComplete='current-password' />

                <button type="submit">Login</button>
            </form>

        </>
    )
}
