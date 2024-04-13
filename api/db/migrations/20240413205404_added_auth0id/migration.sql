/*
  Warnings:

  - Added the required column `auth0id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "auth0id" TEXT NOT NULL,
ADD COLUMN     "picture" TEXT;
