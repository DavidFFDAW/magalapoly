// 'use client';
import { getServerSession } from 'next-auth';
import Link from 'next/link'
import React from 'react'
import { OPTIONS } from './api/auth/[...nextauth]/route';


function getAccessData(role: string) {
    if (!role) {
        return {
            route: '/login',
            text: 'Iniciar sesión',
        }
    }

    const roleStr = role.trim().toLowerCase();
    return {
        route: roleStr === 'admin' ? '/admin' : '/game',
        text: roleStr === 'admin' ? 'Acceder' : 'Jugar',
    }
}


export default async function LogInButton() {
    const user = await getServerSession(OPTIONS);
    const datas = getAccessData(user?.user?.role as string);

    return (
        <Link href={datas.route}>
            <button
                className="w1 btn cta futura font-700"
                type="button"
            >
                {datas.text}
            </button>
        </Link>
    )
}
