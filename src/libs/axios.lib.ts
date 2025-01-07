import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json',
  },
  // Add other configurations like interceptors if needed
})

axiosClient.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (config: any) => 
    // Add authorization headers or other request configurations here

     config
  ,
  (error) => Promise.reject(error)
)

axiosClient.interceptors.response.use(
  (response) => 
    // Handle responses or errors globally
     response
  ,
  (error) => Promise.reject(error)
)

export default axiosClient
