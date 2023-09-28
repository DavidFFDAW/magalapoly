import React from 'react'
import { prisma } from '@/lib/db';

async function getRoles() {
    return await prisma.role.findMany();
}

export default async function UserRolesPage() {
    const roles = await getRoles();

    return (
        <div>
            {JSON.stringify(roles)}
        </div>
    )
}
