-- CreateTable
CREATE TABLE "Player" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "opp" INTEGER NOT NULL DEFAULT 0,
    "dpp" INTEGER NOT NULL DEFAULT 0,
    "touches" INTEGER NOT NULL DEFAULT 0,
    "goals" INTEGER NOT NULL DEFAULT 0,
    "assists" INTEGER NOT NULL DEFAULT 0,
    "defense" INTEGER NOT NULL DEFAULT 0,
    "hucks" INTEGER NOT NULL DEFAULT 0,
    "turnovers" INTEGER NOT NULL DEFAULT 0,
    "rzto" INTEGER NOT NULL DEFAULT 0,
    "hto" INTEGER NOT NULL DEFAULT 0,
    "execTo" INTEGER NOT NULL DEFAULT 0,
    "resetTo" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_name_key" ON "Player"("name");
