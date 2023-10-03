'use client';
import { registerServiceWorker } from '@/components/ServiceWorker/useRegistration'
import React from 'react'

export default function SubscribeButton() {
    return (
        <button
            className="w1 btn cta futura font-700"
            type="button"
            onClick={registerServiceWorker}
        >
            Suscribirse
        </button>
    )
}
