import { AdminTitle } from '@/components/Title/AdminTitle';
import { getUserByID } from '@/lib/prisma/services/user.service';
import { redirect } from 'next/navigation';
import React from 'react'

interface Props {
    params: any;
    searchParams: {
        userid: string;
    };
}

export default async function UserEditPage({ searchParams }: Props) {
    const userID = searchParams.userid;
    if (!userID) return redirect('/admin/users');

    const user = await getUserByID(userID);
    if (!user) return redirect('/admin/users');
    console.log({ user });


    return (
        <div>
            <AdminTitle
                title='Edición de usuario'
                description='Modifica los datos guardados de este usuario'
                icon='pencil-square'
            />

            <div className='down flex start astart column nogap table-appearance'>
                <p style={{ color: 'white' }}>
                    {user.email} - {user.username} solicita ser beta tester
                </p>
            </div>

        </div >
    )
}
