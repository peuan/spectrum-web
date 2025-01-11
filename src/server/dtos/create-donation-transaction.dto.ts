import { z } from 'zod'

export const createDonationTransactionDto = z.object({
  amount: z.number().min(1),
  userId: z.number(),
  referenceNo: z.string(),
  text: z.string().optional(),
  donator: z.string().optional(),
  donatorWalletAddress: z.string().optional(),
})

export type CreateDonationTransactionDto = z.infer<
  typeof createDonationTransactionDto
>
