/* eslint-disable @typescript-eslint/no-unused-vars */
import { Typography } from '@mui/material'

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    gradient: true
  }
}
