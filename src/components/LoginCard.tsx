'use client'

import React from 'react'
import {
  Avatar,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
} from '@mui/material'

const LoginCard: React.FC = () => {
  return (
    <Card
      sx={{
        width: 572,
        height: 482,
        borderRadius: '10px',
        bgcolor: '#1C1D1F',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Logo */}

      <Avatar
        sx={{
          width: 258,
          height: 258,
          mt: '-17px',
        }}
        src="/icons/full-logo.svg"
      ></Avatar>

      {/* Content */}
      <CardContent>
        <Typography
          marginTop="-35px"
          fontSize="16px"
          color="#ffffff"
          textAlign="left"
        >
          Sign in to your Account
        </Typography>

        {/* Buttons */}
        <Stack gap={2} marginTop={2}>
          <Button
            sx={{
              width: 461,
              height: 60,
              borderRadius: 10,
              bgcolor: '#303030',
              color: 'white',
              fontSize: '16px',
              fontWeight: '400',
              textTransform: 'none',
              '&:hover': { bgcolor: '#3A3A3C' },
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Avatar src="/icons/google-logo.svg"></Avatar>
            </Box>
            <Typography
              component="span"
              sx={{
                flexGrow: 1,
                textAlign: 'center',
                marginRight: '40px',
              }}
            >
              Continue with Google
            </Typography>
          </Button>

          <Button
            sx={{
              width: 461,
              height: 60,
              borderRadius: 10,
              bgcolor: '#303030',
              color: 'white',
              fontSize: '16px',
              fontWeight: '400',
              textTransform: 'none',
              '&:hover': { bgcolor: '#3A3A3C' },
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Avatar src="/icons/apple-logo.svg"></Avatar>
            </Box>
            <Typography
              component="span"
              sx={{
                flexGrow: 1,
                textAlign: 'center',
                marginRight: '40px',
              }}
            >
              Continue with Apple
            </Typography>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default LoginCard
