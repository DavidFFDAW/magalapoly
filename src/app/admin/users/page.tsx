import React from 'react'
import { prisma } from '@/lib/db';

async function getUsers() {
    return await prisma.users.findMany();
}

export default async function UserListPage() {
    const users = await getUsers();

    return (
        <div>
            {JSON.stringify(users)}
        </div>
    )
}
