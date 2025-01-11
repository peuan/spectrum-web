import { ethers } from 'ethers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { MethodNotAllowedException } from '@/server/errors/http-exceptions.error'
import { createDonationTransaction } from '@/server/services/donation-transaction.service'
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
    const customerName = String(body.get('customername'))
    const merchantId = body.get('merchantid')
    const productDetail = String(body.get('productdetail'))
    const total = Number(body.get('total'))
    const signature = body.get('signature')
    const referenceNo = String(body.get('referenceno'))

    console.log('customerName', customerName)
    console.log('referenceNo', referenceNo)

    const usdRate = 35
    const airDropStreamer = 10
    const airDropDonator = 5

    if (
      merchantId !== '72600138' ||
      signature !== 'mnXSHypdDVApP1k8MuURZo9aztNTf3MjNU'
    ) {
      throw new MethodNotAllowedException('Incorrect merchantId')
    }

    const { slug, donatorWalletAddress, text } = splitAddress(productDetail)

    const streamer = await getUserBySlug(slug)

    const textDecoded = Buffer.from(text, 'base64').toString('utf8')
    // store donation transaction
    createDonationTransaction({
      amount: total,
      userId: streamer.id,
      referenceNo,
      text: textDecoded,
      donator: customerName,
      donatorWalletAddress,
    })

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
      postDonationMessage({
        donorName: 'จ่อย',
        donorMessage: textDecoded,
        amount: total,
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
