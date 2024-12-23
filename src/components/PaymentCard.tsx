'use client'

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  Switch,
} from '@mui/material'

interface PaymentProps {
  title: string
  quote1: string
  quote2: string
}

const PaymentCard: React.FC<PaymentProps> = ({ title, quote1, quote2 }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <Card
      sx={{
        width: '100%',
        borderRadius: 2,
        backgroundImage: 'linear-gradient(to right,#212243 , #1C1D1F 56%)',
      }}
    >
      {/* title */}
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
        }}
      >
        <Chip
          sx={{
            width: 176,
            borderRadius: 10,
            bgcolor: '#FFFFFF0D',
            fontSize: '12px',
            fontWeight: 'light',
          }}
          label={title}
        />

        {/* Description */}
        <Typography variant="h4" fontWeight={500}>
          {quote1}
        </Typography>

        <Stack
          sx={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          {/* toggle-Switch */}
          <Stack>
            <Typography variant="body1" fontWeight={500}>
              {isChecked ? 'เปิดใช้งาน' : 'ปิดใช้งาน'}
            </Typography>
            <Typography variant="body2" fontWeight={500} color="#ADB7BE">
              {quote2}
            </Typography>
          </Stack>

          <Switch checked={isChecked} onChange={handleChange}></Switch>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PaymentCard
