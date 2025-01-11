-- CreateTable
CREATE TABLE "DonationTransaction" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "text" TEXT,
    "donator" TEXT,
    "donatorWalletAddress" TEXT,
    "referenceNo" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DonationTransaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DonationTransaction" ADD CONSTRAINT "DonationTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
