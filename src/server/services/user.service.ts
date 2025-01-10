import { Role } from '@prisma/client'

import { ErrorCode } from '@/enums/error-code.enum'
import prisma from '@/server/libs/prisma/db'

import { ERROR_MESSAGES } from '../constants/error.constant'
import { NotFoundException } from '../errors/http-exceptions.error'
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
        role: Role.USER,
      },
    })
  }
}

export const getUserByProviderId = async (providerId: string) => {
  const user = await prisma.user.findFirst({
    where: {
      providerId,
    },
  })

  if (!user) {
    throw new NotFoundException(ERROR_MESSAGES[ErrorCode.USER_NOT_FOUND])
  }

  return user
}

export const getUserBySlug = async (slug: string) => {
  const user = await prisma.user.findFirst({
    where: {
      donationSlug: slug,
    },
  })

  if (!user) {
    throw new NotFoundException(ERROR_MESSAGES[ErrorCode.USER_NOT_FOUND])
  }

  return user
}
