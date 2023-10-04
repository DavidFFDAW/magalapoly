'use client';
import React from 'react'

export default function AdminClass() {
    React.useEffect(() => {
        document.body.classList.add('admin');
        return () => {
            document.body.classList.remove('admin');
        }
    }, []);

    return (<></>)
}
