'use client'

import { Box, Card, Grid2, Typography } from '@mui/material'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import DonateForm from '@/components/DonateForm'
import NotFound from '@/components/NotFound'
import PageLoading from '@/components/PageLoading'
import QrCodePopup from '@/components/QrCodePopup'
import useGetUserBySlug from '@/hooks/user/useGetUserBySlug'
import type { DonateFormValues } from '@/interfaces/donate.interface'
import { createClient } from '@/utils/supabase/client.util'

const supabase = createClient()

const SlugPage = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [qrData, setQrData] = useState('')
  const [qrMessage, setQrMessage] = useState('')
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [referenceNo, setReferenceNo] = useState('')
  const slug = String(params.slug)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    data: user,
    isError,
    isLoading,
  } = useGetUserBySlug({ request: { slug } })

  const handleSubmit = async (formValues: DonateFormValues) => {
    setIsSuccess(false)
    const referenceNo = String(Date.now()).slice(-6)
    setReferenceNo(referenceNo)
    const textEncoded = Buffer.from(formValues.message).toString('base64')
    const nameEncoded = Buffer.from(formValues.name).toString('base64')
    const combinedProductDetail = `${slug}/${textEncoded}/0xC3317062E170f5794825dC5D93D6b045f06Bf3a5/${nameEncoded}`
    // TODO: Get wallet from some where

    const payso: Record<string, string> = {
      merchantID: process.env.NEXT_PUBLIC_PAY_SOLUTIONS_MERCHANT_ID ?? '',
      productDetail: combinedProductDetail,
      customerEmail: 'dome@gmailc.om',
      customerName: 'dome',
      total: formValues.amount,
      referenceNo,
    }

    const url = `https://apis.paysolutions.asia/tep/api/v2/promptpaynew?${new URLSearchParams(
      payso
    ).toString()}`

    try {
      axios
        .post(url, '', {
          headers: {
            accept: 'application/json',
            authorization: `Bearer ${process.env.NEXT_PUBLIC_PAY_SOLUTIONS_API_KEY}`,
          },
        })
        .then((response) => {
          setQrData(response.data.data.image)
          setOpenPopup(true)
        })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleClosePopup = () => {
    setOpenPopup(false)
    setQrMessage('')
  }

  useEffect(() => {
    const subscription = supabase
      .channel('db-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'DonationTransaction',
          filter: `referenceNo=eq.${referenceNo}`,
        },
        () => {
          setOpenPopup(true)
          setQrData('')
          setQrMessage('Donation successful!')
          setIsSuccess(true)
          setReferenceNo('')
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(subscription)
    }
  }, [referenceNo])

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <PageLoading />
      </Box>
    )
  }

  if (isError || !user) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <NotFound />
      </Box>
    )
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          mb: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '250px',
            backgroundImage: 'url(/galaxy.jpeg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: {
              xs: 0,
              md: 12,
            },
          }}
        >
          <Box
            sx={{
              position: 'absolute',

              left: '50%',
              top: {
                xs: '75px',
                md: 'auto',
              },
              transform: 'translateX(-50%)',
              width: '150px',
              height: '150px',
              backgroundImage: 'url(/avatar.png)',
              backgroundSize: 'cover',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
            }}
          />
        </Box>

        {/* Main Content */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            mt: 2,
            px: 4,
          }}
        >
          <Grid2
            container
            spacing={3}
            sx={{
              minWidth: '100%',
            }}
          >
            <Grid2
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Card>
                <Typography variant="h6">Details</Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  Hello, thank you for your support!
                  <Typography component="span" color="secondary">
                    {' '}
                    {user.email}
                  </Typography>{' '}
                </Typography>
              </Card>
            </Grid2>

            <Grid2
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Card>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  Let&apos;s start donating with us
                </Typography>
                <DonateForm
                  defaultValues={{
                    name: user.email,
                    amount: '',
                    message: '',
                  }}
                  isLoading={loading}
                  isSuccess={isSuccess}
                  onSubmit={handleSubmit}
                />
              </Card>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
      <QrCodePopup
        open={openPopup}
        onClose={() => handleClosePopup()}
        qrCodeImageUrl={qrData}
        message={qrMessage}
      />
    </>
  )
}

export default SlugPage
