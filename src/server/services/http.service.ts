import axios from 'axios'

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

export const transferL3USD = async (toAddress: string, amount: number) => {
  try {
    const response = await axios.post(
      urlL3usd,
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
      urlSpl,
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

export const postDonationMessage = async ({
  donorName,
  donorMessage,
  amount,
  clientSecret,
}: {
  donorName: string
  donorMessage: string
  amount: number
  clientSecret: string
}) => {
  const urlMsg = 'https://dream.tk9.us/api/donations'
  try {
    const response = await axios.post(urlMsg, {
      donorName,
      donorMessage,
      amount: parseFloat(amount.toFixed(2)),
      clientSecret,
    })
    return response.data
  } catch (error) {
    console.error('Message posting error:', error)
    throw error // Rethrow to handle it in the calling function
  }
}

export const createWallet = async () => {
  const url = 'https://dev-engine.dome.cloud/backend-wallet/create'
  const headers = {
    // TODO: replace with the actual authorization header via env
    Authorization:
      'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIweGI2QjlhM0E5ODQxYUE0MDE5MTdEYkFEMTZiNUI1ZUU1NTkwRkEzQjMiLCJzdWIiOiIweEMzMzE3MDYyRTE3MGY1Nzk0ODI1ZEM1RDkzRDZiMDQ1ZjA2QmYzYTUiLCJhdWQiOiJ0aGlyZHdlYi5jb20iLCJleHAiOjQ4ODg4MTM0OTAsIm5iZiI6MTczNTIxMzQ5MCwiaWF0IjoxNzM1MjEzNDkwLCJqdGkiOiJkYWYxN2E1My04Mzg4LTRkNTItOTYxNy03MzEyYzZmZDhlZmMiLCJjdHgiOnsicGVybWlzc2lvbnMiOiJBRE1JTiJ9fQ.MHg4NmYzM2Y5NDZkNjhiODM3MDQxYmM1ZjE2Yjc1MGUzMjUwZjNkZGVmMThhYzEwYTJjNmRiNjJkM2Q3MThkNDBhNTA4NzdkMjdmNmE4YTQxMmVlMTI0Mzg0NWI2NzdkNmFjN2M0MjA2NTBhOTgzMTY0YzUwODdhNTY3ZDg0ZWI3YTFj',
    'Content-Type': 'application/json',
  }

  try {
    const { data } = await axios.post(url, {}, { headers })
    return data.result.walletAddress
  } catch (error) {
    console.error('Wallet creation error:', error)
    throw error // Rethrow to handle it in the calling function
  }
}
