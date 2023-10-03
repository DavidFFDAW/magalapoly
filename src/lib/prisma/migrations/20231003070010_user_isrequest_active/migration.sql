-- AlterTable
ALTER TABLE `Users` ADD COLUMN `active` BOOLEAN NULL DEFAULT true,
    ADD COLUMN `is_request` BOOLEAN NULL DEFAULT true;
