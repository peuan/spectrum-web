import { isAxiosError } from 'axios'

import type { User } from '@/interfaces/user.interface'
import axiosClient from '@/libs/axios.lib'

export const getMe = async () => {
  try {
    const { data } = await axiosClient.get<User>('/auth/me')

    return data
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data
    }

    throw error
  }
}

export const getUserBySlug = async (slug: string) => {
  try {
    const { data } = await axiosClient.get<User>(`/users/slugs/${slug}`)

    return data
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data
    }

    throw error
  }
}

export const getUserByLiveSlug = async (slug: string) => {
  try {
    const { data } = await axiosClient.get<User>(`/users/slugs/lives/${slug}`)

    return data
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data
    }

    throw error
  }
}
