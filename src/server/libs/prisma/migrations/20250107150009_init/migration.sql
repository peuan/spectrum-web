-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "providerId" UUID NOT NULL,
    "donationSlug" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
