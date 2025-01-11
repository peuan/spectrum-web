import { ethers } from 'ethers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { MethodNotAllowedException } from '@/server/errors/http-exceptions.error'
import { createDonationTransaction } from '@/server/services/donation-transaction.service'
import { transferL3USD, transferSPL } from '@/server/services/http.service'
import { getUserBySlug } from '@/server/services/user.service'
import { handleError } from '@/server/utils/handle-error.util'

interface AddressPair {
  slug: string
  donatorWalletAddress: string
  text: string
  customerName: string
}

function splitAddress(addressString: string): AddressPair {
  const [slug, text, donatorWalletAddress, customerName] =
    addressString.split('/')
  return { slug, text, donatorWalletAddress, customerName }
}

function isValidEthereumAddress(address: string): boolean {
  return ethers.utils.isAddress(address)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.formData()
    const merchantId = body.get('merchantid')
    const productDetail = String(body.get('productdetail'))
    const total = Number(body.get('total'))
    const signature = body.get('signature')
    const referenceNo = String(body.get('refno'))
    const status = String(body.get('status'))

    const usdRate = 35
    const airDropStreamer = 10
    const airDropDonator = 5

    if (status !== 'CP') {
      throw new MethodNotAllowedException('Incorrect status')
    }

    if (
      merchantId !== process.env.NEXT_PUBLIC_PAY_SOLUTIONS_MERCHANT_ID ||
      signature !== process.env.PAY_SOLUTIONS_SIGNATURE
    ) {
      throw new MethodNotAllowedException('Incorrect merchantId')
    }

    const { slug, donatorWalletAddress, text, customerName } =
      splitAddress(productDetail)

    const streamer = await getUserBySlug(slug)

    const textDecoded = Buffer.from(text, 'base64').toString('utf8')
    const customerNameDecoded = Buffer.from(customerName, 'base64').toString(
      'utf8'
    )
    // store donation transaction
    createDonationTransaction({
      amount: total,
      userId: streamer.id,
      referenceNo,
      text: textDecoded,
      donator: customerNameDecoded,
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

    console.log('Post created successfully')

    return NextResponse.json(
      { message: 'Post created successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('General error:', error)
    return handleError(error)
  }
}
