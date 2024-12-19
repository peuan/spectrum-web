'use client'

import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
  Switch,
  styled,
} from '@mui/material'

interface PaymentProps {
  title: string
  quote1: string
  quote2: string
}

const CustomSwitch = styled(Switch)(({}) => ({
  width: 50,
  height: 30,
  padding: 0,
  borderRadius: '99px',
  display: 'flex',
  '& .MuiSwitch-switchBase': {
    padding: 1,
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      transform: 'translateX(21px)',
      '& + .MuiSwitch-track': {
        backgroundColor: '#6A79FA',
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: 28,
    height: 28,
    backgroundColor: '#ffffff',
    boxShadow: '0 0 2px 0 rgba(0,0,0,0.5)',
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#78788029',
    opacity: 1,
  },
}))

const PaymentCard: React.FC<PaymentProps> = ({ title, quote1, quote2 }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked)
  }

  return (
    <Card
      sx={{
        width: 425,
        height: 150,
        borderRadius: '10px',
        backgroundImage: 'linear-gradient(to right,#212243 , #1C1D1F 56%)',
      }}
    >
      {/* title */}
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Chip
          sx={{
            width: 176,
            height: 29,
            borderRadius: '100px',
            bgcolor: '#FFFFFF0D',
            fontSize: '12px',
            fontWeight: 'light',
          }}
          label={title}
        />

        {/* Description */}
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
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
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 500,
                color: '#ffffff',
              }}
            >
              {isChecked ? 'เปิดใช้งาน' : 'ปิดใช้งาน'}
            </Typography>
            <Typography
              sx={{
                fontSize: '12px',
                fontWeight: 500,
                color: '#ADB7BE',
              }}
            >
              {quote2}
            </Typography>
          </Stack>

          <CustomSwitch
            checked={isChecked}
            onChange={handleChange}
          ></CustomSwitch>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PaymentCard
