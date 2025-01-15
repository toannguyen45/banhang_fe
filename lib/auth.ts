import { signInSchema } from "@/lib/zod";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Google,
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                let user = null;

                // validate credentials
                const parsedCredentials = signInSchema.safeParse(credentials);
                if (!parsedCredentials.success) {
                    console.error("Invalid credentials:", parsedCredentials.error.errors);
                    return null;
                }
                // get user

                user = {
                    id: '1',
                    name: 'Aditya Singh',
                    email: 'jojo@jojo.com',
                    role: "admin"
                }

                if (!user) {
                    console.log("Invalid credentials");
                    return null;
                }

                return user;
            }
        })
    ],
    callbacks: {
        authorized({ request: { nextUrl }, auth }) {
            const isLoggedIn = !!auth?.user;
            const { pathname } = nextUrl;
            const role = auth?.user.role || 'user';

            // Danh sách các trang công khai
            const publicPaths = ['/', '/about', '/contact'];

            // Cho phép truy cập vào các trang công khai
            if (publicPaths.includes(pathname)) {
                return true;
            }

            // Chặn người dùng đã đăng nhập truy cập trang signin
            if (pathname.startsWith('/admin/signin') && isLoggedIn) {
                return Response.redirect(new URL('/', nextUrl));
            }

            // Chặn người dùng không phải admin truy cập tất cả các trang trong /dashboard/
            if ((pathname === "/dashboard" || pathname.startsWith("/dashboard/")) && role !== "admin") {
                console.log("Redirecting to /");
                return Response.redirect(new URL('/', nextUrl));
            }

            // Mặc định chỉ cho phép khi đã đăng nhập
            return isLoggedIn;
        },
        jwt({ token, user, trigger, session }) {
            if (user) {
                token.id = user.id as string;
                token.role = user.role as string;
            }
            if (trigger === "update" && session) {
                token = { ...token, ...session };
            }
            return token;
        },
        session({ session, token }) {
            session.user.id = token.id;
            session.user.role = token.role;
            return session;
        }
    },
    pages: {
        signIn: "/admin/signin"
    }
})