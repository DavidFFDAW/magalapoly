import { prisma } from "@/lib/db";

export function getUserByID(userID: string | number) {
    return prisma.users.findUnique({
        where: {
            id: Number(userID),
        },
        include: {
            role: true,
        },
    });
}

export function getAllUsers() {
    return prisma.users.findMany({
        include: {
            role: true,
        },
    });
}

export function getActiveUsers() {
    return prisma.users.findMany({
        where: {
            active: true,
        },
        include: {
            role: true,
        },
    });
}

export function getRequestingUsers() {
    return prisma.users.findMany({
        where: {
            is_request: true,
        },
        include: {
            role: true,
        },
    });
}