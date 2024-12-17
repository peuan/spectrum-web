'use client'

import QuestionAnswer from '@/components/QuestionAnswer'
import { Box, Button, Container, Grid2, Stack, Typography } from '@mui/material'

export default function Home() {
  return (
    <>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(/bg-1.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
            zIndex: 1,
          }}
        />

        <Container sx={{ position: 'relative', zIndex: 2, textAlign: 'left' }}>
          {/* Hero Text */}
          <Typography
            variant="h6"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            รับเงินโดเนทจากผู้ติดตามของคุณได้ง่ายกว่า เร็วกว่า และปลอดภัยกว่า
            ที่
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            gutterBottom
            sx={{
              background:
                'linear-gradient(180deg, #FFFFFF 50%, #999999 110.42%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            SPECTRUM
          </Typography>

          {/* Buttons */}
          <Box display="flex" justifyContent="center" gap={2}>
            <Button variant="contained">รับ Link ของคุณ</Button>
            <Button variant="outlined">ox.app</Button>
          </Box>
        </Container>
      </Box>
      <Container sx={{ py: 8 }}>
        <Stack gap={3}>
          <Typography variant="h3">Any questions?</Typography>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Stack gap={2}>
                <QuestionAnswer
                  question="What types of games can I host?"
                  answer="Hosting games can be a great way to bring people together and have fun. Here are some types of games you can consider hosting, depending on the preferences of your group and the available resources"
                />
                <QuestionAnswer
                  question="What types of games can I host?"
                  answer="Hosting games can be a great way to bring people together and have fun. Here are some types of games you can consider hosting, depending on the preferences of your group and the available resources"
                />
                <QuestionAnswer
                  question="What types of games can I host?"
                  answer="Hosting games can be a great way to bring people together and have fun. Here are some types of games you can consider hosting, depending on the preferences of your group and the available resources"
                />
              </Stack>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Stack gap={2}>
                <QuestionAnswer
                  question="What types of games can I host?"
                  answer="Hosting games can be a great way to bring people together and have fun. Here are some types of games you can consider hosting, depending on the preferences of your group and the available resources"
                />
                <QuestionAnswer
                  question="What types of games can I host?"
                  answer="Hosting games can be a great way to bring people together and have fun. Here are some types of games you can consider hosting, depending on the preferences of your group and the available resources"
                />
                <QuestionAnswer
                  question="What types of games can I host?"
                  answer="Hosting games can be a great way to bring people together and have fun. Here are some types of games you can consider hosting, depending on the preferences of your group and the available resources"
                />
              </Stack>
            </Grid2>
          </Grid2>
        </Stack>
      </Container>
    </>
  )
}
