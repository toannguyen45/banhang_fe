import { auth } from "@/lib/auth"

export default auth((req) => {
    const user = req.auth?.user
    console.log("\n user in middleware:>> ", user)

    // if (!req.auth && req.nextUrl.pathname !== "/login") {
    //     const newUrl = new URL("/login", req.nextUrl.origin)
    //     return Response.redirect(newUrl)
    // }

    // const isAdminPage = req.nextUrl.pathname.startsWith("/dashboard")

    // if (isAdminPage && !req.auth?.user.role == "admin") {
    //     return Response.redirect(new URL("/", nextUrl))
    // }

    // return null
})

export const config = { matcher: ["/dashboard:path*"] };