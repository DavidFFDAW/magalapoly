import { User } from "./user.model";

export interface Role {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    Users: User[];
}