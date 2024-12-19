'use client'

import Feature from '@/components/Feature'
import FeatureHighlight from '@/components/FeatureHighlight'
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
              'linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.2))',
            zIndex: 1,
          }}
        />

        <Container
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 2,
          }}
        >
          {/* Hero Text */}
          <Typography
            variant="h6"
            component="h1"
            fontWeight="bold"
            gutterBottom
            maxWidth={303}
          >
            รับเงินโดเนทจากผู้ติดตามของคุณได้ง่ายกว่า เร็วกว่า และปลอดภัยกว่า
            ที่
          </Typography>
          <Typography variant="h2" component="h1" fontWeight="bold" gradient>
            SPECTRUM
          </Typography>

          <Typography
            variant="subtitle2"
            component="h1"
            fontWeight={500}
            gutterBottom
            maxWidth={419}
            color="#ADB7BE"
          >
            Lorem ipsum dolor sit amet consectetur. Id posuere pretium diam enim
            proin sed sed nulla. Tortor felis.
          </Typography>
          {/* Buttons */}
          <Box
            sx={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '6px',
              paddingY: '8px',
              paddingX: '12px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            <Typography
              variant="subtitle2"
              component="h1"
              fontWeight="bold"
              gutterBottom
            >
              ox.testlink
            </Typography>
            <Button variant="contained">รับ Link ของคุณ</Button>
          </Box>
        </Container>
      </Box>

      <Container sx={{ py: 8 }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          fontSize={'36px'}
          gutterBottom
        >
          ทำไมต้องใช้ SPECTRUM ?{' '}
        </Typography>
        <Grid2
          spacing={4}
          container
          sx={{
            paddingTop: '1rem',
          }}
        >
          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 3,
            }}
          >
            <Feature
              icon="/icons/setup.png"
              title="Super Quick Setup"
              description="Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in."
            />
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 3,
            }}
          >
            <Feature
              icon="/icons/hardware.png"
              title="Premium Hardware"
              description="Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in."
            />
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 3,
            }}
          >
            <Feature
              icon="/icons/protect.png"
              title="DDos Protection"
              description="Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in."
            />
          </Grid2>
          <Grid2
            size={{
              xs: 12,
              md: 6,
              lg: 3,
            }}
          >
            <Feature
              icon="/icons/support.png"
              title="Fast Support"
              description="Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in."
            />
          </Grid2>
        </Grid2>
      </Container>

      <Container sx={{ py: 8 }}>
        <FeatureHighlight
          title="Lorem ipsum dolor sit amet consectetur."
          description="Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore."
          buttonText="Lorem ipsum"
          highlightImage="/highlight.png"
        />
      </Container>

      <Container sx={{ py: 8 }}>
        <Stack gap={3}>
          <Typography variant="h3" gradient>
            Any questions?
          </Typography>
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
