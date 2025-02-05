import { hash } from "bcryptjs";
import { cookies } from "next/headers";
import { verifyJWT } from "./jwt";
import { NextResponse } from "next/server";
import { JWTPayload } from "@/types/auth";

export async function hashPassword(password: string) {
  return await hash(password, 12);
}

const AUTH_COOKIE = "auth-token";

// 🔒 Helper function for authentication
export async function authenticateAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE)?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const decoded = await verifyJWT<JWTPayload>(token);

  if (!decoded || decoded.role !== "ADMIN") {
    return NextResponse.json(
      { error: "Forbidden: Admins only" },
      { status: 403 }
    );
  }

  return decoded; // Return decoded user if valid
}
