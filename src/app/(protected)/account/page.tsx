'use client'

import TheMainSidebar from '@/components/layouts/TheMainSidebar'
import PageLoading from '@/components/PageLoading'
import useGetPlanList from '@/hooks/plan/useGetPlanList'
import { Box } from '@mui/material'

const DashboardPage = () => {
  const getPlanListHook = useGetPlanList()

  const plans = getPlanListHook.data

  if (getPlanListHook.isLoading || !plans) {
    return <PageLoading />
  }

  return (
    <TheMainSidebar title="Account">
      <Box>eiei</Box>
    </TheMainSidebar>
  )
}

export default DashboardPage
