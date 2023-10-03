import React from 'react'
import { prisma } from '@/lib/db';
import { AdminTitle } from '@/components/Title/AdminTitle';
import { OptionsContainer } from '@/components/Options/Options';
import { OptionItem } from '@/components/Options/OptionItem';

async function getUsers() {
    return await prisma.users.findMany({
        include: {
            role: true
        }
    });
}

export default async function UserListPage() {
    const users = await getUsers();

    return (
        <>
            <AdminTitle
                icon="person"
                title="Usuario"
                description="Controla los usuarios de la aplicación"
            />

            <div className='down flex start astart column nogap table-appearance'>
                {users.map((user) => {
                    return (<>
                        <div className='table-row flex start gap'>
                            <p>{user.id}</p>
                            <p>{user.email}</p>
                            <p>{user.username}</p>
                            <p>{user.role.name as any}</p>
                            <p>{user.createdAt?.toLocaleDateString()}</p>

                            <OptionsContainer>
                                <OptionItem text='Borrar' type='success' />
                            </OptionsContainer>
                        </div>
                    </>);
                })}
            </div>
        </>
    )
}
