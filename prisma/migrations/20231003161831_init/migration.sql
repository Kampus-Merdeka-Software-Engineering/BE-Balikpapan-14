/*
  Warnings:

  - You are about to drop the column `module` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `profile` DROP COLUMN `module`;

-- CreateTable
CREATE TABLE `Assignment1` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `assignment` VARCHAR(191) NOT NULL,
    `deadline` DATETIME(3) NOT NULL,
    `date_modified` DATETIME(3) NOT NULL,
    `grade` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
