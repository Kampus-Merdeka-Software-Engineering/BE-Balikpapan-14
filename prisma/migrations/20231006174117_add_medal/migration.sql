/*
  Warnings:

  - Added the required column `medal` to the `Leaderboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `leaderboard` ADD COLUMN `medal` VARCHAR(191) NOT NULL;
