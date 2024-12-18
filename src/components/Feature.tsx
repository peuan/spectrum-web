import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface FeatureProps {
  icon: string
  title: string
  description: string
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <Box
      sx={{
        color: '#fff',
        width: '100%',
        textAlign: {
          xs: 'center',
          sm: 'left',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: 2,
          justifyContent: {
            xs: 'center',
            sm: 'left',
          },
        }}
      >
        <Image src={icon} alt={title} width={64} height={64} />
      </Box>

      {/* Title */}
      <Typography
        variant="h6"
        fontWeight="bold"
        fontSize={'20px'}
        gutterBottom
        sx={{ color: '#fff' }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography variant="body2" fontSize={'16px'} color="grey">
        {description}
      </Typography>
    </Box>
  )
}

export default Feature
