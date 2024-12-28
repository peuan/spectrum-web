'use client'

import EmailPhoneForm from '@/components/EmailPhoneForm'
import TheMainSidebar from '@/components/layouts/TheMainSidebar'
import PageLoading from '@/components/PageLoading'
import useGetPlanList from '@/hooks/plan/useGetPlanList'
import { Card, Grid2 } from '@mui/material'

const DashboardPage = () => {
  const getPlanListHook = useGetPlanList()

  const plans = getPlanListHook.data

  if (getPlanListHook.isLoading || !plans) {
    return <PageLoading />
  }

  return (
    <TheMainSidebar title="Account">
      <Grid2 container spacing={2}>
        <Grid2 size={12}>In formation here</Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Card variant="haftGradient">
            <EmailPhoneForm />
          </Card>
        </Grid2>
      </Grid2>
    </TheMainSidebar>
  )
}

export default DashboardPage
