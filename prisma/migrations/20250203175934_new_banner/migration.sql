/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Banner` table. All the data in the column will be lost.
  - You are about to drop the column `bannerId` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_bannerId_fkey";

-- DropIndex
DROP INDEX "Category_bannerId_idx";

-- AlterTable
ALTER TABLE "Banner" DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "bannerId";
