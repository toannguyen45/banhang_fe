import { NextResponse } from "next/server";
import db from "@/lib/db";
import { hashPassword } from "@/lib/auth.utils";

export async function GET() {
  try {
    const hashedPassword = await hashPassword("123123");

    await db.user.upsert({
      where: { email: "admin@example.com" },
      update: {},
      create: {
        id: "admin-id",
        email: "admin@example.com",
        firstName: "Minh",
        lastName: "Toan",
        password: hashedPassword,
        role: "ADMIN",
        profileImage: "",
      },
    });

    return NextResponse.json({
      message: "Admin created successfully",
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json(
      { error: "Failed to create admin" },
      { status: 500 }
    );
  }
}
