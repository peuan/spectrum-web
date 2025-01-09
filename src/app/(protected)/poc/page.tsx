'use client'
import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'

const Page = () => {
  const [merchantId, setMerchantId] = useState('72600138')
  const [customerEmail, setCustomerEmail] = useState('dome@tel.co.th')
  const [customerName, setCustomerName] = useState(
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
  )
  const [total, setTotal] = useState('1.00')
  const [customerWallet, setCustomerWallet] = useState(
    '0xC3317062E170f5794825dC5D93D6b045f06Bf3a5'
  )
  const [steamerWallet, setSteamerWallet] = useState(
    '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'
  )
  const [encodedText, setEncodedText] = useState('')
  const [productDetail, setProductDetail] = useState(
    `${customerWallet}/${steamerWallet}/${encodedText}`
  )
  const [normalText, setNormalText] = useState('')
  const referenceNo = String(Date.now())
  const [response, setResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    setLoading(true)

    const encoded = Buffer.from(normalText).toString('base64')
    setEncodedText(encoded)

    const combinedProductDetail = `${customerWallet}/${steamerWallet}/${encoded}`
    setProductDetail(combinedProductDetail)

    const data = {
      merchantID: merchantId,
      productDetail: combinedProductDetail,
      customerEmail,
      customerName,
      total,
      referenceNo: referenceNo.slice(-6),
    }

    const url = `https://apis.paysolutions.asia/tep/api/v2/promptpaynew?${new URLSearchParams(
      data
    ).toString()}`

    try {
      axios
        .post(url, '', {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiIyIiwiZXhwIjozMzExNjY5MjA5LCJpYXQiOjE3MzQ4NjkyMDksImp0aSI6IjE3MzQ4NjkyMDk1MDMzYjI5ZjZkNjJhMmIwMjA4N2QxMTQ4Zjc5MjQ0MmU4MDZmYzA1ZTNiM2RiMmJhZTY2Mjg1MDc4ZDU0ZjIxNzZkZjI2IiwibmJmIjoxNzM0ODY5MjA5LCJzdWIiOiIxMzgifQ.CzU20gQPcK1RPpV-PXm2xE7iRFruFha18h3flmJgIaatPWkXreShxklPCep_-Z3IJAOHDORhbY51KMUk1mgS5hQk6gbHIkHh8wVZon4aJxNCpy228y154QA09ijwmsXomMkvpRNY0PoKcnSvLoD7ienHWtFZavWEEZt-dPducylF8A9L2RGtHKkJMPu0l7vlRW9ljlNPZz8priYqdcdNd_0A1mHRAdh-7WFKLFpo-QwPGDvkLHGTqat2roV_NTps-Jrz9SnTNCEQr4Yz7C15UB7l-os1qlg9Wdfez6VJsxCycCN3SoA6GnnOjwnYH72PPn1av-bvvl0Jydaa1_ssuQ',
          },
        })
        .then((response) => {
          console.log(response)
          setResponse(response.data.data.image)
        })
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          marginTop: 5,
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: 400,
            p: 3,
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Payment Form
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 2,
            }}
          >
            <TextField
              label="Merchant ID"
              value={merchantId}
              onChange={(e) => setMerchantId(e.target.value)}
              required
              sx={{ width: '48%' }}
            />
            <TextField
              label="Product Detail"
              value={productDetail}
              onChange={(e) => setProductDetail(e.target.value)}
              required
              sx={{ width: '48%' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 2,
            }}
          >
            <TextField
              label="Customer Email"
              type="email"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              required
              sx={{ width: '48%' }}
            />
            <TextField
              label="Customer Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
              sx={{ width: '48%' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 2,
            }}
          >
            <TextField
              label="Customer Wallet"
              value={customerWallet}
              onChange={(e) => setCustomerWallet(e.target.value)}
              required
              sx={{ width: '48%' }}
            />
            <TextField
              label="Steamer Wallet"
              value={steamerWallet}
              onChange={(e) => setSteamerWallet(e.target.value)}
              required
              sx={{ width: '48%' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 2,
            }}
          >
            <TextField
              label="Normal Text"
              value={normalText}
              onChange={(e) => setNormalText(e.target.value)}
              required
              sx={{ width: '100%' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 2,
            }}
          >
            <TextField
              label="Total"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              required
              sx={{ width: '48%' }}
            />
            <TextField
              label="Reference No"
              value={referenceNo}
              sx={{ width: '48%' }}
              disabled
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Submit'}
          </Button>
          {response && (
            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Image
                src={response}
                alt="Generated QR Code"
                style={{ maxWidth: '100%' }}
                height={200}
                width={200}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default Page
