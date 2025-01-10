export interface User {
  id: number
  providerId: string
  donationSlug: string
  email: string
  createdAt: string
  updatedAt: string
  role: 'USER' | 'ADMIN' | 'SUPER_ADMIN'
}
