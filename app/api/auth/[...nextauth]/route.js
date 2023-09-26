import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            authorize(credentials) {
                console.log({ credentials });

                const user = {
                    id: 1,
                    name: 'John Smith',
                    email: 'abc@gm',
                };

                return user;
            },
        }),
    ],
    pages: {
        signIn: '/auth/signin',
        signOut: '/auth/signout',
        error: '/auth/error',
        verifyRequest: '/auth/verify-request',
        newUser: null,
    },
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt(token, user, account, profile, isNewUser) {
            console.log({ token, user, account, profile, isNewUser });

            return token;
        },
        async session(session, token) {
            console.log({ session, token });

            return session;
        },
    },
});

export { handler as GET, handler as POST }