import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import db from "@/lib/db";
import { signInSchema } from "@/lib/zod";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google,
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                const validatedCredentials = signInSchema.parse(credentials);

                const user = await db.user.findFirst({
                    where: {
                        email: validatedCredentials.email,
                    },
                });

                if (!user || !user.password) {
                    throw new Error("Invalid credentials.");
                }

                const isPasswordValid = await bcrypt.compare(validatedCredentials.password, user.password);

                if (!isPasswordValid) {
                    throw new Error("Invalid credentials.");
                }

                return {
                    id: user.id,
                    email: user.email,
                    role: user.role,
                };
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) token.role = user.role
            return token
        },
        session({ session, token }) {
            session.user.role = token.role
            return session
        }
    }
})