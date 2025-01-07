import prisma from '@/server/libs/prisma/db'

import { generateDonationSlug } from '../utils/generate-donation-slug.util'

export const createUserIfNotExists = async ({
  providerId,
  email,
}: {
  providerId: string
  email?: string
}) => {
  const user = await prisma.user.findFirst({
    where: {
      providerId,
    },
  })

  if (!user) {
    await prisma.user.create({
      data: {
        donationSlug: generateDonationSlug(providerId),
        providerId,
        email,
      },
    })
  }
}
