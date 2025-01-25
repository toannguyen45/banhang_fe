import { NextResponse } from "next/server";
import db from "@/lib/db";
import { hashPassword } from "@/lib/auth.utils";

export async function GET() {
    try {
        const hashedPassword = await hashPassword("admin123");
        
        const admin = await db.user.upsert({
            where: { email: 'admin@example.com' },
            update: {},
            create: {
                email: 'admin@example.com',
                name: 'Admin User',
                password: hashedPassword,
                role: 'ADMIN'
            }
        });

        return NextResponse.json({ 
            message: 'Admin created successfully',
            admin: {
                id: admin.id,
                email: admin.email,
                name: admin.name,
                role: admin.role
            }
        });
    } catch (error) {
        console.error('Setup error:', error);
        return NextResponse.json({ error: 'Failed to create admin' }, { status: 500 });
    }
} 