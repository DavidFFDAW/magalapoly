import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/db';
import bcrypt from 'bcrypt';
import { StorableUserAdapter } from '@/adapters/user.adapter';

export const OPTIONS: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            id: 'credentials',

            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'jsmith',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: '********',
                },
            },
            async authorize(credentials): Promise<any> {
                const foundUser = await prisma.users.findUnique({
                    where: {
                        email: credentials?.email,
                        is_request: false,
                    },
                    include: {
                        role: true,
                    },
                });

                if (!foundUser) {
                    throw new Error('No se ha encontrado el usuario');
                }

                const passwordMatch = await bcrypt.compare(credentials!.password, foundUser.password);

                if (!passwordMatch) {
                    throw new Error('La contraseña no coincide');
                }

                const storableUser = StorableUserAdapter(foundUser);
                return storableUser;
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) token.user = user;

            return token;
        },
        session({ session, token }) {
            session.user = token.user as any;

            return session;
        },
    },
    pages: {
        signIn: '/login',
        error: '/login',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
}

const handler = NextAuth(OPTIONS);

export { handler as GET, handler as POST };
