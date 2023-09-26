import { Role } from "./role.model";

export interface User {
    id: number;
    email: string;
    password: string;
    username: string;
    name: string;
    lastname: string;
    roleId: number;
    role: Role;
    createdAt: string;
    updatedAt: string;
}