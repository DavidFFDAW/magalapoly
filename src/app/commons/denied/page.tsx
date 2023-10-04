import React from 'react'
import { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Denegado",
    description: "Acceso denegado",
};

export default function RequestedPage() {
    return (
        <div style={{ paddingTop: 25 }}>
            <h1 className='monopoly font-700'>Oops...</h1>

            <p className='white line-height tstart' style={{ margin: '15px 0' }}>
                No tienes permisos suficientes para acceder a este recurso o ha habido un problema.
            </p>

            <Link href='/'>
                <button className='w1 down-small btn futura font-500 upper' type='button'>
                    Volver al inicio
                </button>
            </Link>
        </div>
    );
}

