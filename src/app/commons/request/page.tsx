import React from 'react'
import { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Estado de tu solicitud",
    description: "Solicitud de beta tester",
};

export default function RequestedPage() {
    return (
        <div style={{ paddingTop: 25 }}>
            <h1 className='monopoly font-700'>Enhorabuena</h1>

            <p className='white line-height tstart' style={{ margin: '15px 0' }}>
                Tu solicitud ha sido enviada correctamente a un miembro de nuestro equipo.
            </p>

            <p className='white line-height tstart' style={{ margin: '15px 0' }}>
                Se te notificará el estado de tu solicitud por correo electrónico.
            </p>

            <Link href='/'>
                <button className='w1 down-small btn futura font-500 upper' type='button'>
                    Volver al inicio
                </button>
            </Link>
        </div>
    );
}

