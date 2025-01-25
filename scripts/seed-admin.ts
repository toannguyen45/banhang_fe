import db from "@/lib/db";
import { hashPassword } from "@/lib/auth.utils";

async function main() {
    const hashedPassword = await hashPassword("admin123"); // Change this password

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

    console.log('Admin user created:', admin);
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await db.$disconnect();
    }); 