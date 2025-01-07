'use client'

import { Typography } from '@mui/material'

import TheMainSidebar from '@/components/layouts/TheMainSidebar'
import PageLoading from '@/components/PageLoading'
import useGetPlanList from '@/hooks/plan/useGetPlanList'

const DashboardPage = () => {
  const getPlanListHook = useGetPlanList()

  const plans = getPlanListHook.data

  if (getPlanListHook.isLoading || !plans) {
    return <PageLoading />
  }

  return (
    <TheMainSidebar title="Welcome back Rosaria Rose">
      <Typography>Dashboard content here</Typography>
    </TheMainSidebar>
  )
}

export default DashboardPage
