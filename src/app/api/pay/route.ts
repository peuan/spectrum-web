import axios from 'axios'
import { ethers } from 'ethers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const urlL3usd =
  'https://dev-engine.dome.cloud/contract/7117/0x899286C4378e5beed0d6310215756789f58aD740/erc20/transfer?simulateTx=false'
const urlSpl =
  'https://dev-engine.dome.cloud/contract/7117/0xCAebD72FC77B799c5A78ff7521AEa6E78704aefD/erc20/transfer?simulateTx=false'

const headers = {
  accept: 'application/json',
  'x-backend-wallet-address': '0x5A7eC19D2da0589aa1442086F9CA34bF4da15AC5',
  Authorization:
    'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIweDAxNjc1N2REZjJBYjZhOTk4YTQ3MjlBODBhMDkxMzA4ZDkwNTlFMTciLCJzdWIiOiIweEMzMzE3MDYyRTE3MGY1Nzk0ODI1ZEM1RDkzRDZiMDQ1ZjA2QmYzYTUiLCJhdWQiOiJ0aGlyZHdlYi5jb20iLCJleHAiOjE3MzYzMzc3MTUsIm5iZiI6MTczNjA3NzkwNiwiaWF0IjoxNzM2MDc4NTE1LCJqdGkiOiJlZTJlMjAwN2NlOGU0NGY1M2Y1N2M2ZTFiYmM5Y2UxZTkxM2YxZGY2YzNhZGY4NDAxNDI4NTdmYjgxMTE4N2VkIiwiY3R4Ijp7fX0.MHg4OTdjNjY5ZTA5ODBlZDJhNTJjNmFmNzZmM2I2ZWJmNGI2MjIxMDY2ZDY3YWZlNmM1ODM2ZjA4YTM5NDcyNmU4NmQ5N2E3Njg0MjUxNWExNzA2NjMzM2M3YzA1NjIwMjg1OTBiZmM0ODdlNGE0MWE5MmFhMmE0MGU1ODMxODFhMjFj',
  'Content-Type': 'application/json',
}

interface AddressPair {
  streamer: string
  donator: string
  text: string
}

function splitAddress(addressString: string): AddressPair {
  const [streamer, donator, text] = addressString.split('/')
  return { streamer, donator, text }
}

function isValidEthereumAddress(address: string): boolean {
  return ethers.utils.isAddress(address)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData()
    const customerEmail = body.get('customeremail')
    const merchantId = body.get('merchantid')
    const productDetail = body.get('productdetail')
    const total = body.get('total')
    const signature = body.get('signature')

    console.log('productDetail', productDetail)

    const usdRate = 35
    const airDropStreamer = 10
    const airDropDonator = 5

    if (
      merchantId !== '72600138' ||
      signature !== 'mnXSHypdDVApP1k8MuURZo9aztNTf3MjNU'
    ) {
      return NextResponse.json(
        { error: 'Incorrect merchantId' },
        { status: 405 }
      )
    }

    const { streamer, donator, text } = splitAddress(productDetail)

    // L3USD Transfer
    if (isValidEthereumAddress(streamer)) {
      try {
        await axios.post(
          urlL3usd,
          {
            toAddress: streamer,
            amount: total / usdRate,
          },
          { headers }
        )
      } catch (error) {
        console.error('L3USD transfer error:', error)
      }
    }

    // SPL Transfer for streamer
    if (isValidEthereumAddress(streamer)) {
      try {
        await axios.post(
          urlSpl,
          {
            toAddress: streamer,
            amount: total / usdRate / airDropStreamer,
          },
          { headers }
        )
      } catch (error) {
        console.error('SPL streamer transfer error:', error)
      }
    }

    // SPL Transfer for donator
    if (isValidEthereumAddress(donator)) {
      try {
        await axios.post(
          urlSpl,
          {
            toAddress: donator,
            amount: total / usdRate / airDropDonator,
          },
          { headers }
        )
      } catch (error) {
        console.error('SPL donator transfer error:', error)
      }
    }

    // Handle text message if present
    if (text.length > 0) {
      const urlMsg = 'https://dream.tk9.us/api/donations'
      const base64Decoded = Buffer.from(text, 'base64').toString('utf8')
      const numberInt = parseInt(total)

      console.log('base64Decoded', base64Decoded)

      try {
        await axios.post(urlMsg, {
          donorName: 'จ่อย',
          donorMessage: base64Decoded,
          amount: parseFloat(numberInt.toFixed(2)),
          clientSecret: 'roblox',
        })
      } catch (error) {
        console.error('Message posting error:', error)
      }
    }

    return NextResponse.json(
      { message: 'Post created successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('General error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}
