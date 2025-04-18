/*
  Warnings:

  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `team` to the `Player` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_playerId_fkey";

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "team" TEXT NOT NULL;

-- DropTable
DROP TABLE "Team";
