import { ethers } from 'ethers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import {
  transferL3USD,
  transferSPL,
  postDonationMessage,
} from '@/server/services/http.service'
import { getUserBySlug } from '@/server/services/user.service'
import { handleError } from '@/server/utils/handle-error.util'

interface AddressPair {
  slug: string
  donatorWalletAddress: string
  text: string
}

function splitAddress(addressString: string): AddressPair {
  const [slug, text, donatorWalletAddress] = addressString.split('/')
  return { slug, text, donatorWalletAddress }
}

function isValidEthereumAddress(address: string): boolean {
  return ethers.utils.isAddress(address)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData()
    // const customerEmail = body.get('customeremail')
    const merchantId = body.get('merchantid')
    const productDetail = String(body.get('productdetail'))
    const total = Number(body.get('total'))
    const signature = body.get('signature')

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

    const { slug, donatorWalletAddress, text } = splitAddress(productDetail)

    const streamer = await getUserBySlug(slug)

    // L3USD Transfer
    if (
      streamer.walletAddress &&
      isValidEthereumAddress(streamer.walletAddress)
    ) {
      transferL3USD(streamer.walletAddress, total / usdRate)
    }

    // SPL Transfer for streamer
    if (
      streamer.walletAddress &&
      isValidEthereumAddress(streamer.walletAddress)
    ) {
      transferSPL(streamer.walletAddress, total / usdRate / airDropStreamer)
    }

    // SPL Transfer for donator
    if (isValidEthereumAddress(donatorWalletAddress)) {
      transferSPL(donatorWalletAddress, total / usdRate / airDropDonator)
    }

    // Handle text message if present
    if (text.length > 0) {
      const base64Decoded = Buffer.from(text, 'base64').toString('utf8')
      const numberInt = total

      postDonationMessage({
        donorName: 'จ่อย',
        donorMessage: base64Decoded,
        amount: numberInt,
        clientSecret: 'roblox',
      })
    }

    return NextResponse.json(
      { message: 'Post created successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('General error:', error)
    return handleError(error)
  }
}
