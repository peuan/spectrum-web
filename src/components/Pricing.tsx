'use client'

import React from 'react'
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Divider,
  Icon,
  Chip,
  IconButton,
} from '@mui/material'
import CheckIcon from './icons/CheckIcon'

interface PricingProps {
  isSpecial?: boolean
  isBordered?: boolean
  title: string
  price: string
  description: string
  features: { label: string; active: boolean }[]
}

const Pricing: React.FC<PricingProps> = ({
  isSpecial,
  isBordered,
  title,
  price,
  description,
  features,
}) => {
  return (
    <Card
      sx={{
        width: "100%",
        backgroundColor: '#1a1a1a',
        color: '#fff',
        textAlign: 'center',
        borderRadius: 3,
        padding: 2,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        borderStyle: isBordered ? 'solid' : 'none',
        borderWidth: isBordered ? 1 : 0,
        borderColor: isBordered ? 'secondary.main' : 'transparent',
      }}
    >
      <CardContent>
        {/* Title */}
        <Box mb={2}>
          <Chip
            label={title}
            color={isSpecial ? 'secondary' : 'default'}
            sx={{
              width: '100%',
            }}
          />
        </Box>

        {/* Price */}
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold', color: '#fff' }}
          gutterBottom
        >
          {price}
          <Typography
            variant="subtitle1"
            fontWeight={600}
            component="span"
            color="primary.main"
          >
            /Month
          </Typography>
        </Typography>

        {/* Description */}
        <Typography variant="body2" color="#fff" fontWeight={600} mb={2}>
          {description}
        </Typography>

        <Divider sx={{ borderColor: '#444', mb: 2 }} />

        {/* Features */}
        <Stack spacing={1} mb={2} alignItems="start">
          {features.map((feature, index) => {
            return (
              <Box key={index} display="flex" alignItems="center" gap={1}>
                <IconButton
                  size="small"
                  color={feature.active ? 'primary' : 'default'}
                >
                  <Icon component={CheckIcon} />
                </IconButton>

                <Typography
                  variant="body2"
                  color={feature.active ? '#fff' : '#ADB7BE'}
                >
                  {feature.label}
                </Typography>
              </Box>
            )
          })}
        </Stack>

        <Button variant="contained" fullWidth>
          Get {title} Plan
        </Button>
      </CardContent>
    </Card>
  )
}

export default Pricing
