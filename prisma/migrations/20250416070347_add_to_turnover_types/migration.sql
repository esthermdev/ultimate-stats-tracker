/*
  Warnings:

  - You are about to drop the column `execTo` on the `Player` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "execTo",
ADD COLUMN     "receiverErr" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "throwerErr" INTEGER NOT NULL DEFAULT 0;
