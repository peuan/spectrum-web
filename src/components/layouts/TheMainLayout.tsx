'use client'
import { Stack } from '@mui/material'
import { usePathname } from 'next/navigation'
import type { PropsWithChildren } from 'react'

import TheMainFooter from './TheMainFooter'
import TheMainHeader from './TheMainHeader'

const TheMainLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname()
  return pathname.startsWith('/live') ? (
    children
  ) : (
    <Stack minHeight="100vh">
      <TheMainHeader />
      <Stack flex={1}>{children}</Stack>
      <TheMainFooter />
    </Stack>
  )
}

export default TheMainLayout
