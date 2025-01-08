import { Box, Container, Grid2, Typography } from '@mui/material'

import Pricing from '@/components/Pricing'
import { getPlanList } from '@/services/plan.service'

export const dynamic = 'force-dynamic'

const Page = async () => {
  const plans = await getPlanList()

  return (
    <Box
      component={Container}
      justifyContent={{ lg: 'center', xs: 'flex-start' }}
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        paddingTop: {
          xs: '80px',
          md: 0,
          lg: 0,
        },
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        fontWeight={600}
        sx={{
          fontSize: {
            xs: '24px',
            lg: '36px',
          },
        }}
      >
        Support the Platform Easily by Subscribing to a Plan!
      </Typography>
      <Grid2 spacing={2} container>
        {plans.map((plan) => (
          <Grid2
            key={plan.id}
            size={{
              xs: 12,
              md: 6,
              lg: 3,
            }}
          >
            <Pricing
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isBordered={plan.isBordered}
              isSpecial={plan.isSpecial}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default Page
