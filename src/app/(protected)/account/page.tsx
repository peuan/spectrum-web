'use client'

import EmailPhoneForm from '@/components/EmailPhoneForm'
import TheMainSidebar from '@/components/layouts/TheMainSidebar'
import PageLoading from '@/components/PageLoading'
import useGetPlanList from '@/hooks/plan/useGetPlanList'
import { EmailPhoneFormValues } from '@/interfaces/account.interface'
import { Card, Grid2 } from '@mui/material'

const AccountPage = () => {
  const getPlanListHook = useGetPlanList()

  const plans = getPlanListHook.data

  const handleSubmitEmailPhone = (formValues: EmailPhoneFormValues) => {
    console.log('formValues', formValues)
  }

  if (getPlanListHook.isLoading || !plans) {
    return <PageLoading />
  }

  return (
    <TheMainSidebar title="Account">
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Card variant="primaryGradient">In formation here</Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Card variant="haftGradient">
            <EmailPhoneForm
              defaultValues={{
                phone: '0889988998',
              }}
              onSubmit={handleSubmitEmailPhone}
            />
          </Card>
        </Grid2>
      </Grid2>
    </TheMainSidebar>
  )
}

export default AccountPage
