-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "auth0id" TEXT NOT NULL,
    "name" TEXT,
    "picture" TEXT,
    "email" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_auth0id_key" ON "User"("auth0id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
