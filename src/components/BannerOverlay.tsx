import { Box, Button, Container, Grid2, Stack, Typography } from '@mui/material'
import Image from 'next/image'

interface BannerProps {
  title: string
  description: string
  logo: string
  banner: string
  buttonText: string
}
const Banner: React.FC<BannerProps> = ({
  title,
  description,
  logo,
  banner,
  buttonText,
}) => (
    <Grid2
      container
      spacing={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundImage: `url(${  banner  })`,
        backgroundSize: 'cover',
        height: '439px',
        position: 'relative',
      }}
    >
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Container>
          <Stack
            height="439px"
            spacing={4}
            sx={{
              justifyContent: 'center',
              paddingX: 4,
            }}
          >
            <Typography variant="h3" color="gradient" fontWeight={600}>
              {title}
            </Typography>
            <Typography variant="subtitle2" color="grey.400">
              {description}
            </Typography>
            <Button variant="contained" sx={{ width: 'fit-content', px: 8 }}>
              {buttonText}
            </Button>
          </Stack>
        </Container>
      </Grid2>
      <Grid2
        size={{ xs: 12, md: 6 }}
        sx={{
          display: {
            xs: 'none',
            md: 'block',
          },
        }}
      >
        <Box sx={{ position: 'absolute', right: 0, top: '-111px' }}>
          <Image src={logo} alt={title} width={406} height={550} />
        </Box>
      </Grid2>
    </Grid2>
  )

export default Banner
