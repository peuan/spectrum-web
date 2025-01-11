'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Typography, TextField, Button, Stack, Grid2 } from '@mui/material'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import IMaskInput from '@/components/IMaskInput'
import QrCodePopup from '@/components/QrCodePopup'
import { REQUIRED_ERROR } from '@/constants/message.constant'
import theme from '@/theme'
import { createClient } from '@/utils/supabase/client.util'

const schema = z.object({
  name: z
    .string({
      required_error: REQUIRED_ERROR,
      invalid_type_error: REQUIRED_ERROR,
    })
    .trim()
    .min(1, REQUIRED_ERROR),
  amount: z
    .string({
      required_error: REQUIRED_ERROR,
      invalid_type_error: REQUIRED_ERROR,
    })
    .trim()
    .min(1, REQUIRED_ERROR),
  message: z
    .string({
      required_error: REQUIRED_ERROR,
      invalid_type_error: REQUIRED_ERROR,
    })
    .trim()
    .min(1, REQUIRED_ERROR),
})

const supabase = createClient()

const SlugPage = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { name, amount, message },
    },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: 'Anonymous',
      amount: '',
      message: '',
    },
  })

  const [openPopup, setOpenPopup] = useState(false)
  const [qrData, setQrData] = useState('')
  const params = useParams()
  const [loading, setLoading] = useState(false)
  const [referenceNo, setReferenceNo] = useState('')
  const slug = params.slug
  const onSubmit = async (data: any) => {
    const referenceNo = String(Date.now()).slice(-6)
    setReferenceNo(referenceNo)
    const encoded = Buffer.from(data.message).toString('base64')
    const combinedProductDetail = `${slug}/${encoded}/0xC3317062E170f5794825dC5D93D6b045f06Bf3a5`

    const payso = {
      merchantID: '72600138',
      productDetail: combinedProductDetail,
      customerEmail: data.name,
      customerName: data.name,
      total: data.amount,
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

  useEffect(() => {
    const subscription = supabase
      .from('DonationTransaction')
      .on('INSERT', (payload) => {
        if (payload.new.referenceNo === referenceNo) {
          toast.success('Donation successful!')
        }
      })
      .subscribe()

    return () => {
      supabase.removeSubscription(subscription)
    }
  }, [referenceNo])

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          px: 3,
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
            marginTop: 8,
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: {
                xs: 'un',
                md: '-40px',
                lg: '-40px',
              },
              left: {
                xs: '50%',
                md: '10%',
                lg: '10%',
              },
              transform: 'translateX(-50%)',
              width: '150px',
              height: '150px',
              backgroundImage: 'url(/avatar.png)',
              backgroundSize: 'cover',
              borderRadius: '50%',
              border: `4px solid ${theme.palette.common.black}`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
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
            mt: 6,
          }}
        >
          <Grid2
            container
            spacing={3}
            sx={{
              minWidth: '100%',
            }}
          >
            {/* Left Section - รายละเอียด */}
            <Grid2
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  padding: 3,
                  border: '1px solid #444',
                  borderRadius: '8px',
                  backgroundColor: '#1A1A1A',
                }}
              >
                <Typography variant="h6">รายละเอียด</Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  สวัสดีครับ
                </Typography>
              </Box>
            </Grid2>

            {/* Right Section - Form */}
            <Grid2
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  padding: 3,
                  border: '1px solid #444',
                  borderRadius: '8px',
                  backgroundColor: '#1A1A1A',
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                  มาเริ่มต้นการเปย์กับเรา
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack spacing={2}>
                    <TextField
                      label="Your name / ชื่อของคุณ"
                      variant="outlined"
                      fullWidth
                      {...register('name')}
                      error={!!name}
                      helperText={name?.message}
                    />
                    <TextField
                      label="Amount / จำนวนเงิน"
                      variant="outlined"
                      fullWidth
                      {...register('amount')}
                      slotProps={{
                        input: {
                          inputComponent: IMaskInput,
                          inputProps: {
                            mask: Number,
                            min: 1,
                          },
                        },
                      }}
                      error={!!amount}
                      helperText={amount?.message}
                    />
                    <TextField
                      label="Message / ข้อความ"
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      error={!!message}
                      helperText={message?.message}
                      {...register('message')}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{
                        backgroundColor: '#536DFE',
                        color: '#FFF',
                        ':hover': { backgroundColor: '#304FFE' },
                      }}
                      type="submit"
                      disabled={loading}
                    >
                      เปย์เลย
                    </Button>
                  </Stack>
                </form>
              </Box>
            </Grid2>
          </Grid2>
        </Box>
      </Box>
      <QrCodePopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        qrCodeImageUrl={qrData}
      />
    </>
  )
}

export default SlugPage
