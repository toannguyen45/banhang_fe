'use server'

import { signJWT, verifyJWT } from "@/lib/jwt";
import { cookies } from "next/headers";
import { z } from "zod";
import { signInSchema } from "@/lib/zod";
import db from "@/lib/db";
import { compare } from "bcryptjs";
import { redirect } from "next/navigation";
import { AuthResponse, JWTPayload, User } from "@/types/auth";

const AUTH_COOKIE = "auth-token";

export async function signIn(values: z.infer<typeof signInSchema>): Promise<AuthResponse> {
    try {
        const validatedFields = signInSchema.safeParse(values);
        if (!validatedFields.success) {
            return { error: "Invalid fields" };
        }

        const { email, password } = validatedFields.data;

        const user = await db.user.findUnique({
            where: { email }
        });

        if (!user?.password) {
            return { error: "Invalid credentials" };
        }

        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) {
            return { error: "Invalid credentials" };
        }

        // Create session token
        const token = await signJWT({
            id: user.id,
            email: user.email,
            role: user.role,
        } as JWTPayload);

        // Set HTTP-only cookie
        const cookieStore = await cookies();
        cookieStore.set(AUTH_COOKIE, token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // 1 day
        });

        return { success: true };
    } catch (error) {
        console.error("Sign-in error:", error);
        return { error: "Something went wrong" };
    }
}

export async function signOut(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(AUTH_COOKIE);
    redirect('/admin/signin');
}

export async function getCurrentUser(): Promise<User | null> {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get(AUTH_COOKIE)?.value;
        if (!token) return null;

        const decoded = await verifyJWT<JWTPayload>(token);
        if (!decoded) return null;

        const user = await db.user.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                email: true,
                name: true,
                role: true
            }
        });

        return user;
    } catch (error) {
        console.error("Get current user error:", error);
        return null;
    }
}