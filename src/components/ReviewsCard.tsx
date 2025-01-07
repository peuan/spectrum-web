'use client'

import StarIcon from '@mui/icons-material/Star'
import {
  Avatar,
  Box,
  Typography,
  Card,
  CardContent,
  Stack,
  Rating,
} from '@mui/material'
import React from 'react'

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
}) => (
    <Card
      sx={{
        width: '100%',
        bgcolor: 'grey.600',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          mr: 2,
          ml: 2,
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
            width: '100%',
          }}
        >
          {/* text */}
          <Typography variant="body2" color="common.white">
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
          <Avatar src={profilePic} />

          <Typography
            sx={{
              ml: 3,
              color: 'common.white',
            }}
          >
            {name}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )

export default ReviewsCard
