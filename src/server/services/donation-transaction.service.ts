import type { CreateDonationTransactionDto } from '../dtos/create-donation-transaction.dto'
import prisma from '../libs/prisma/db'

import { getUserById } from './user.service'

export const createDonationTransaction = async (
  createDonationTransactionDto: CreateDonationTransactionDto
) => {
  const { amount, userId, referenceNo, text, donator, donatorWalletAddress } =
    createDonationTransactionDto

  const user = await getUserById(userId)

  return prisma.donationTransaction.create({
    data: {
      amount,
      userId: user.id,
      referenceNo,
      text,
      donator,
      donatorWalletAddress,
    },
  })
}
