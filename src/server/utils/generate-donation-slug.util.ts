export const generateDonationSlug = (
  providerId: string,
  length = 5
): string => {
  // Take the first 3 characters of the providerId
  const prefix = providerId.slice(0, 3)

  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let randomSuffix = ''

  // Generate 5 random characters
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomSuffix += characters[randomIndex]
  }

  // Combine the prefix and the random suffix
  return prefix + randomSuffix
}
