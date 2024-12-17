import { Box, Stack } from '@mui/material'
import { PropsWithChildren } from 'react'
import TheMainHeader from './TheMainHeader'

const TheMainLayout = ({ children }: PropsWithChildren) => {
  return (
    <Stack minHeight="100vh">
      <TheMainHeader />
      <Box flex={1}>{children}</Box>
    </Stack>
  )
}

export default TheMainLayout
