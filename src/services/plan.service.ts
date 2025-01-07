import { isAxiosError } from 'axios'

import type { Plan } from '@/interfaces/plan.interface'
import axiosClient from '@/libs/axios.lib'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getPlanList = async (request?: any) => {
  try {
    const { data } = await axiosClient.get<Plan[]>('/plans', {
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
