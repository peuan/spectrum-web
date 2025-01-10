import { isAxiosError } from 'axios'

import type { User } from '@/interfaces/user.interface'
import axiosClient from '@/libs/axios.lib'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getMe = async (request?: any) => {
  try {
    const { data } = await axiosClient.get<User>('/auth/me', {
      params: request,
    })

    return data
  } catch (error) {
    if (isAxiosError(error)) {
      throw error.response?.data
    }

    throw error
  }
}
