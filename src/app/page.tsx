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
      'Setting up my donation page was incredibly easy! I was up and running in just minutes, and my viewers love how simple it is to support me now.',
    profilePic: '/avatar.png',
    name: 'Alex Carter',
  },
  {
    score: 4,
    comment:
      'The platform works great and looks professional. My only suggestion would be to add more customization options for the donation page.',
    profilePic: '/avatar.png',
    name: 'Jessica Martinez',
  },
  {
    score: 5,
    comment:
      'I’ve tried other donation systems, but this is by far the best. The notifications are instant, and it integrates perfectly with my Twitch stream!',
    profilePic: '/avatar.png',
    name: 'Michael Zhang',
  },
  {
    score: 3,
    comment:
      'The setup process was smooth, but I had some issues with the payment gateway at first. Support was helpful, though, and resolved it quickly.',
    profilePic: '/avatar.png',
    name: 'Emily Watson',
  },
  {
    score: 4,
    comment:
      'I really like how secure this platform feels compared to others I’ve used. Would love to see PayPal as an additional payment option in the future.',
    profilePic: '/avatar.png',
    name: 'Daniel Green',
  },
  {
    score: 5,
    comment:
      'This platform has made such a difference for me as a small streamer. I’ve already received so much support from my viewers!',
    profilePic: '/avatar.png',
    name: 'Sophia Reed',
  },
  {
    score: 4,
    comment:
      'Great platform overall! The real-time notifications are a nice touch. My only wish is for more themes to match my channel branding.',
    profilePic: '/avatar.png',
    name: 'Chris Johnson',
  },
  {
    score: 5,
    comment:
      'The DDoS protection gives me peace of mind. My donation page has been rock solid, even during high-traffic streams.',
    profilePic: '/avatar.png',
    name: 'Anna Taylor',
  },
  {
    score: 3,
    comment:
      'It works fine, but I had some trouble linking it to my YouTube channel. Support eventually helped me out, but it took longer than expected.',
    profilePic: '/avatar.png',
    name: 'Mark Allen',
  },
  {
    score: 5,
    comment:
      'Absolutely love this! My viewers keep telling me how easy it is to donate. It’s been a game-changer for my content creation journey.',
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
              ox.[your link here]
            </Typography>
            <Button variant="contained">Get Your Link</Button>
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
          Why Choose SPECTRUM?
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
              description="Get started with donations in just a few minutes, thanks to our fast and hassle-free setup process."
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
              description="We use cutting-edge, reliable systems to ensure a seamless experience for you and your supporters."
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
              description="Feel secure with advanced cyberattack protection that keeps your donation system safe at all times."
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
              description="Our dedicated team is always ready to assist you, so you can focus on streaming without any worries."
            />
          </Grid2>
        </Grid2>
      </Container>

      <Container sx={{ pb: 8, pt: 10 }}>
        <Banner
          title="Unlock Your Gaming Full Potential"
          description="Step into a world where your gaming journey knows no limits. Whether you're a casual player or a pro, our platform is designed to level up your experience. From seamless integration to advanced tools, we provide everything you need to elevate your stream and connect with your community."
          logo="/avatar.png"
          banner="/bg-banner.png"
          buttonText="Level Up Now"
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
          title="Power Your Streams with Cutting-Edge Technology"
          description="Experience the ultimate in speed and reliability with our state-of-the-art servers. Designed to handle high-demand streaming, we ensure seamless performance for your audience and peace of mind for you."
          buttonText="Explore Features"
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
