'use client'

import React from 'react'
import { Avatar, Typography, Card, CardContent, Stack } from '@mui/material'
import CustomLoginButton from './CustomLoginButton'

const LoginCard: React.FC = () => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: 572,
        bgcolor: '#1C1D1F',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 3,
      }}
    >
      {/* Logo */}

      <Avatar
        sx={{
          width: '100%',
          maxWidth: 258,
          height: '100%',
          maxHeight: 258,
        }}
        src="/icons/full-logo.svg"
      ></Avatar>

      {/* Content */}
      <CardContent
        sx={{
          width: '100%',
        }}
      >
        <Typography mt={-4} variant="body2">
          Sign in to your Account
        </Typography>

        {/* Buttons */}
        <Stack spacing={2} mt={2}>
          <CustomLoginButton
            logo="/icons/google-logo.svg"
            text="Continue with Google"
          />
          <CustomLoginButton
            logo="/icons/apple-logo.svg"
            text="Continue with Apple"
          />
        </Stack>
      </CardContent>
    </Card>
  )
}

export default LoginCard
