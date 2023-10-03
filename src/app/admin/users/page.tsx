import React from 'react'
import { AdminTitle } from '@/components/Title/AdminTitle';
import { DangerOption, DefaultOption, OptionsContainer, WarningOption } from '@/components/Options';
import { ContentOrNull } from '@/components/Loaders';
import { getAllUsers } from '@/lib/prisma/services/user.service';

export default async function UserListPage() {
    const users = await getAllUsers();


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
                        <div className={`table-row grid grid-row gap-medium relative ${user.is_request ? 'has_pending_request' : 'is_beta_or_admin'}`}>
                            <p>{user.id}</p>
                            <p>{user.email}</p>
                            <p className='hide-mobile'>{user.username}</p>
                            <p>{user.role.name as any}</p>
                            <p className='hide-mobile'>{user.createdAt?.toLocaleDateString()}</p>

                            <OptionsContainer>
                                <WarningOption icon='pencil-square' text='Editar usuario' to={`/admin/users/edit?userid=${user.id}`} />
                                <ContentOrNull condition={user.is_request}>
                                    <DefaultOption icon='eye' text='Ver solicitud' to={`/admin/users/request?userid=${user.id}`} />
                                </ContentOrNull>
                                <DangerOption text='Borrar Usuario' to={`/admin/users/delete?userid=${user.id}`} />
                            </OptionsContainer>
                        </div >
                    </>);
                })}
            </div >
        </>
    )
}
