'use client'

import React from 'react'
import {
  Avatar,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Rating,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'

interface ReviewsProps {
  score: number
  comment: string
  profilePic: string
  name: string
}

const ReviewsCard: React.FC<ReviewsProps> = ({
  score,
  comment,
  profilePic,
  name,
}) => {
  return (
    <Card
      sx={{
        width: 376,
        height: 295,
        bgcolor: '#1C1D1F',
        borderRadius: '0px',
        alignContent: 'center',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          margin: '0px 16px',
        }}
      >
        {/* rating */}
        <Rating
          name="feedback"
          value={score}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        />

        <Box
          sx={{
            width: 315,
            height: 132,
          }}
        >
          {/* text */}
          <Typography variant="body2" color="white" fontSize="16px">
            {comment}
          </Typography>
        </Box>

        {/* profile */}
        <Stack
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              width: 50,
              height: 50,
              borderRadius: '100px',
            }}
            src={profilePic}
          ></Avatar>

          <Typography
            component="span"
            sx={{
              textAlign: 'left',
              marginLeft: '20px',
              color: 'white',
            }}
          >
            {name}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ReviewsCard
