import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Username",
                    type: "email",
                    placeholder: "jsmith",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "********",
                },
            },
            async authorize(credentials, req) {
                const foundUser = await prisma.users.findUnique({
                    where: {
                        email: credentials?.email,
                    },
                });

                if (!foundUser) {
                    throw new Error("Invalid credentials");
                }

                const passwordMatch = await bcrypt.compare(
                    credentials!.password,
                    foundUser.password
                );

                if (!passwordMatch) {
                    throw new Error("Invalid credentials");
                }

                return foundUser;
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
});

export { handler as GET, handler as POST };
