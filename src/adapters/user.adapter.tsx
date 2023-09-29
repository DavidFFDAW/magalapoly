interface StorableUser {
    id: number;
    name: string | null;
    lastname: string | null;
    username: string;
    password: string;
    email: string;
    role_id: number;
    role: {
        id: number;
        name: string;
        createdAt: Date | null;
        updatedAt: Date | null;
    };
    createdAt: Date | null;
    updatedAt: Date | null;
}

export const StorableUserAdapter = (user: StorableUser) => {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        username: user.username,
        role_id: user.role_id,
        role: user.role.name,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    };
};
