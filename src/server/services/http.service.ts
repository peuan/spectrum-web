import axios from 'axios'

const engineUrlL3usd = process.env.ENGINE_URL_L3USD ?? ''
const engineUrlSpl = process.env.ENGINE_URL_SPL ?? ''
const engineCreateWalletUrl = process.env.ENGINE_CREATE_WALLET_URL ?? ''
const engineXBackendWalletAddress =
  process.env.ENGINE_X_BACKEND_WALLET_ADDRESS ?? ''
const engineAuthorizationToken = process.env.ENGINE_AUTHORIZATION_TOKEN ?? ''
const headers = {
  accept: 'application/json',
  'x-backend-wallet-address': engineXBackendWalletAddress,
  Authorization: `Bearer ${engineAuthorizationToken}`,
}

export const transferL3USD = async (toAddress: string, amount: number) => {
  try {
    const response = await axios.post(
      engineUrlL3usd,
      {
        toAddress,
        amount,
      },
      { headers }
    )
    return response.data
  } catch (error) {
    console.error('L3USD transfer error:', error)
    throw error // Rethrow to handle it in the calling function
  }
}

export const transferSPL = async (toAddress: string, amount: number) => {
  try {
    const response = await axios.post(
      engineUrlSpl,
      {
        toAddress,
        amount,
      },
      { headers }
    )
    return response.data
  } catch (error) {
    console.error('SPL transfer error:', error)
    throw error // Rethrow to handle it in the calling function
  }
}

export const createWallet = async () => {
  const localHeaders = {
    Authorization: `Bearer ${engineAuthorizationToken}`,
    'Content-Type': 'application/json',
  }

  try {
    const { data } = await axios.post(
      engineCreateWalletUrl,
      {},
      { headers: localHeaders }
    )
    return data.result.walletAddress
  } catch (error) {
    console.error('Wallet creation error:', error)
    throw error // Rethrow to handle it in the calling function
  }
}
