import { Stack } from '@mui/material'
import type { PropsWithChildren } from 'react'

import TheMainFooter from './TheMainFooter'
import TheMainHeader from './TheMainHeader'

const TheMainLayout = ({ children }: PropsWithChildren) => (
    <Stack minHeight="100vh">
      <TheMainHeader />
      <Stack flex={1}>{children}</Stack>
      <TheMainFooter />
    </Stack>
  )

export default TheMainLayout
