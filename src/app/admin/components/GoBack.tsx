'use client';
import { BootstrapIcon } from '@/components/Icons/Icon';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function GoBack() {
    const router = useRouter();
    console.log(router);


    const goBack = (event: React.MouseEvent) => {
        event.preventDefault();
        router.back();
    }

    return (
        <>
            <a href="/#" className='flex' onClick={goBack}>
                <BootstrapIcon icon="arrow-left" color="#fff" />
                <span className="futura font-500 white">Atrás</span>
            </a>

        </>
    )
}
