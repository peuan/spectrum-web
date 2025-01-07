import { Box, Button, Grid2, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

interface FeatureHighlightProps {
  title: string
  description: string
  buttonText: string
  highlightImage: string
  href?: string
}

const FeatureHighlight = ({
  title,
  description,
  buttonText,
  highlightImage,
  href,
}: FeatureHighlightProps) => (
    <Grid2 container spacing={{ xs: 2, md: 3, lg: 4 }}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Image
          src={highlightImage}
          alt={`${title}-highlight`}
          width={560}
          height={350}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <Stack spacing={4}>
          <Stack spacing={1}>
            <Typography variant="h3" color="gradient">
              {title}
            </Typography>
            <Typography color="grey.400">{description}</Typography>
          </Stack>
          <Box>
            <Button
              LinkComponent={Link}
              href={href}
              sx={{ minWidth: 230 }}
              variant="contained"
            >
              {buttonText}
            </Button>
          </Box>
        </Stack>
      </Grid2>
    </Grid2>
  )

export default FeatureHighlight
