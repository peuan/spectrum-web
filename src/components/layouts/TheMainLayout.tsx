import { Stack } from '@mui/material'
import { PropsWithChildren } from 'react'
import TheMainHeader from './TheMainHeader'

const TheMainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack minHeight="100vh">
      <TheMainHeader />
      <Stack flex={1}>{children}</Stack>
    </Stack>
  )
}

export default TheMainLayout
