'use client'

import { Container, Grid2, Typography } from '@mui/material'

import TopUpForm from '@/components/TopUpForm'
import type { TopUpFormValues } from '@/interfaces/top-up.interface'

const TopUp = () => {
  const handleSubmitTopUp = (formValues: TopUpFormValues) => {
    console.log('formValues', formValues)
  }

  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        fontWeight={600}
        sx={{
          fontSize: {
            xs: '24px',
            lg: '36px',
          },
        }}
      >
        Top up your account credits for a more convenient monthly payment
        experience.
      </Typography>

      <Grid2 width="100%" container justifyContent="center">
        <Grid2 size={{ xs: 12, md: 6 }}>
          <TopUpForm onSubmit={handleSubmitTopUp} />
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default TopUp
