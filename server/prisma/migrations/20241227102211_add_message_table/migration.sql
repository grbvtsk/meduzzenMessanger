/*
  Warnings:

  - You are about to drop the column `recipient_id` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `sender_id` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "recipient_id",
DROP COLUMN "sender_id",
ADD COLUMN     "recipient_name" TEXT NOT NULL DEFAULT 'Unknown Recipient',
ADD COLUMN     "sender_name" TEXT NOT NULL DEFAULT 'Unknown Sender';
