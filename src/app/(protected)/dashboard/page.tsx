'use client'

import TheMainSidebar from '@/components/layouts/TheMainSidebar'
import PageLoading from '@/components/PageLoading'
import Pricing from '@/components/Pricing'
import useGetPlanList from '@/hooks/plan/useGetPlanList'
import { Box, Grid2, Typography } from '@mui/material'

const DashboardPage = () => {
  const getPlanListHook = useGetPlanList()

  const plans = getPlanListHook.data

  if (getPlanListHook.isLoading || !plans) {
    return <PageLoading />
  }

  return (
    <TheMainSidebar title="Welcome back Rosaria Rose">
      <Box>
        <Typography
          variant="h4"
          component="h1"
          textAlign={'center'}
          fontWeight={600}
        >
          สนับสนุนแพลตฟอร์มได้ง่ายๆเพียงแค่สมัครแพลน!
        </Typography>
        <Grid2
          spacing={2}
          container
          sx={{
            pt: 8,
            justifyContent: 'center',
          }}
        >
          {plans.map((plan) => (
            <Grid2
              key={plan.id}
              size={{
                xs: 12,
                md: 6,
                lg: 4,
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
    </TheMainSidebar>
  )
}

export default DashboardPage
