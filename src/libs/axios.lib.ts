import axios from 'axios'

import { getSession } from 'next-auth/react'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
  // Add other configurations like interceptors if needed
})

axiosClient.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (config: any) => {
    const session = await getSession()

    if (session) {
      // Add authorization headers or other request configurations here
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  (response) => {
    // Handle responses or errors globally
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosClient
