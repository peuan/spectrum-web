import Banner from '@/components/BannerOverlay'
import Feature from '@/components/Feature'
import FeatureHighlight from '@/components/FeatureHighlight'
import TheMainFooter from '@/components/layouts/TheMainFooter'
import QuestionAnswer from '@/components/QuestionAnswer'
import SwiperComponent from '@/components/Swiper'
import { Box, Button, Container, Grid2, Stack, Typography } from '@mui/material'

const reviews = [
  {
    score: 5,
    comment:
      'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.',
    profilePic: '/avatar.png',
    name: 'John Doe',
  },
  {
    score: 4,
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    profilePic: '/avatar.png',
    name: 'Jane Smith',
  },
  {
    score: 5,
    comment:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    profilePic: '/avatar.png',
    name: 'Robert Brown',
  },
  {
    score: 3,
    comment:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    profilePic: '/avatar.png',
    name: 'Emily Davis',
  },
  {
    score: 4,
    comment:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    profilePic: '/avatar.png',
    name: 'Michael Lee',
  },
  {
    score: 5,
    comment:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    profilePic: '/avatar.png',
    name: 'Sarah Wilson',
  },
  {
    score: 4,
    comment:
      'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.',
    profilePic: '/avatar.png',
    name: 'Chris Johnson',
  },
  {
    score: 5,
    comment:
      'Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.',
    profilePic: '/avatar.png',
    name: 'Anna Taylor',
  },
  {
    score: 3,
    comment:
      'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.',
    profilePic: '/avatar.png',
    name: 'Mark Allen',
  },
  {
    score: 5,
    comment:
      'Suspendisse potenti. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor.',
    profilePic: '/avatar.png',
    name: 'Olivia Harris',
  },
]
// Import Swiper core and required modules

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
              'linear-gradient(90deg, rgba(0,0,0,0.6), rgba(0,0,0,0.2))',
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
            Stream Smarter, Earn Faster: Simplify Donations Today!
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            fontWeight="bold"
            color="gradient"
          >
            SPECTRUM
          </Typography>

          <Typography
            variant="subtitle2"
            component="h1"
            fontWeight={500}
            gutterBottom
            maxWidth={419}
            color="grey.300"
          >
            Your one-stop solution to securely and easily receive donations from
            your fans. Fast, reliable, and hassle-free!
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
          variant="h3"
          fontWeight="bold"
          gutterBottom
          color="gradient"
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

      <Container sx={{ pb: 8, pt: 10 }}>
        <Banner
          title="Unlock Your Gaming Full Potential"
          description="Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum reprehenderit id cillum tempor cupidatat qui nisi proident nostrud dolore id do eiusmod. Lorem ipsum non labore."
          logo="/avatar.png"
          banner="/bg-banner.png"
          buttonText="Lorem ipsum"
        />
      </Container>

      <Container sx={{ py: 2 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          color="gradient"
        >
          Customer reviews
        </Typography>
      </Container>
      <Box>
        <SwiperComponent reviews={reviews} />
      </Box>

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
          <Typography variant="h3" color="gradient">
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
      <TheMainFooter />
    </>
  )
}
