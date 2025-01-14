'use client'

import { Box, Button, Card, Grid2, Icon, Typography } from '@mui/material'

import CopyIcon from '@/components/icons/CopyIcon'
import TheMainSidebar from '@/components/layouts/TheMainSidebar'
import PageLoading from '@/components/PageLoading'
import useGetMe from '@/hooks/user/useGetMe'

const WidgetsPage = () => {
  const getMeHook = useGetMe()
  const user = getMeHook.data
  if (getMeHook.isLoading || !user) {
    return <PageLoading />
  }

  const handleCopy = async (link: string) => {
    try {
      await navigator.clipboard.writeText(link)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <TheMainSidebar title="Widgets">
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Card
            variant="primaryGradient"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              '&.MuiPaper-root': {
                px: 2,
                py: 1,
              },
            }}
          >
            <Typography>ลิงก์สำหรับแสดงผลการบริจาคของคุณ</Typography>

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
                {process.env.NEXT_PUBLIC_BASE_URL}/live/{user.donationSlug}
              </Typography>
              <Button
                variant="contained"
                onClick={() =>
                  handleCopy(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/live/${user.donationSlug}`
                  )
                }
              >
                <Icon component={CopyIcon} />
                คัดลอก
              </Button>
            </Box>
          </Card>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Card variant="haftGradient" />
        </Grid2>
      </Grid2>
    </TheMainSidebar>
  )
}

export default WidgetsPage
