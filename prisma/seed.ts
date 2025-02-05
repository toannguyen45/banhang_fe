import { hashPassword } from "../lib/auth.utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await hashPassword("123123");

  const user1 = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@example.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      name: "Regular User",
      email: "user@example.com",
      password: hashedPassword,
      role: "USER",
    },
  });

  console.log("Seed admin successfully", user1, user2);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
