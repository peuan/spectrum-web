'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Grid2,
  Card,
} from '@mui/material'
import axios from 'axios'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import IMaskInput from '@/components/IMaskInput'
import QrCodePopup from '@/components/QrCodePopup'
import { REQUIRED_ERROR } from '@/constants/message.constant'
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
    reset,
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
  const [qrMessage, setQrMessage] = useState('')
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
          reset()
          setReferenceNo('')
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(subscription)
    }
  }, [referenceNo, reset])

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          minHeight: '100vh',
          px: 4,
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

              left: '50%',
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
            <Grid2
              size={{
                xs: 12,
                md: 6,
              }}
            >
              <Card>
                <Typography variant="h6">รายละเอียด</Typography>
                <Typography variant="body1" sx={{ marginTop: 1 }}>
                  สวัสดีครับ
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
                      type="submit"
                      disabled={loading}
                    >
                      เปย์เลย
                    </Button>
                  </Stack>
                </form>
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
