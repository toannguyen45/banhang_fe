import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "./lib/jwt";
import { JWTPayload } from "./types/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("auth-token")?.value;

  // Public paths that don't require authentication
  const publicPaths = [
    "/",
    "/about",
    "/products",
    "/contact",
    "/services",
    "/news",
  ];
  if (publicPaths.includes(pathname)) return NextResponse.next();

  // Auth paths - redirect if already logged in
  if (pathname.startsWith("/admin/signin")) {
    if (token) {
      const decoded = await verifyJWT<JWTPayload>(token);
      if (decoded) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }
    }
    return NextResponse.next();
  }

  // Protected paths - require authentication
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/admin/signin", request.url));
    }

    const decoded = await verifyJWT<JWTPayload>(token);
    if (!decoded || decoded.role.toLowerCase() !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/signin"],
};
