/*
  Warnings:

  - You are about to drop the column `user` on the `Expense` table. All the data in the column will be lost.
  - Added the required column `trip` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "user",
ADD COLUMN     "trip" INTEGER NOT NULL;
