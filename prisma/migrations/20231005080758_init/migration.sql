/*
  Warnings:

  - Added the required column `status` to the `Assignment1` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `assignment1` ADD COLUMN `status` VARCHAR(191) NOT NULL;
