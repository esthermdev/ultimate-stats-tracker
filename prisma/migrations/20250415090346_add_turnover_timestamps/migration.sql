/*
  Warnings:

  - You are about to drop the column `turnovers` on the `Player` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "turnovers";

-- CreateTable
CREATE TABLE "Turnover" (
    "id" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "timestamp" TEXT,
    "type" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Turnover_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Turnover" ADD CONSTRAINT "Turnover_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
