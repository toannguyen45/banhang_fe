'use server'

import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";

export async function handleGoogleSignin() {
    await signIn("google", { redirectTo: "/dashboard" });
}

export async function handleSignOut() {
    await signOut();
}

export async function handleCredentialsSignin({ email, password }: {
    email: string,
    password: string
}) {
    try {
        await signIn("credentials", { email, password, redirectTo: "/dashboard" });
    } catch (error) {
        console.log('loi  ne', error)
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return {
                        message: 'Invalid credentials',
                    }
                default:
                    return {
                        message: 'Something went wrong.',
                    }
            }
        }
        throw error;
    }
}