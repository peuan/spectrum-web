import { generateDonationSlug } from './generate-donation-slug.util'

describe('generateDonationSlug', () => {
  it('should generate a slug with correct prefix from providerId', () => {
    const providerId = 'test123'
    const slug = generateDonationSlug(providerId)
    
    expect(slug.startsWith('tes')).toBe(true)
  })

  it('should generate a slug with total length of 8 characters', () => {
    const providerId = 'test123'
    const slug = generateDonationSlug(providerId)
    
    expect(slug.length).toBe(8)
  })

  it('should generate a slug with valid characters only', () => {
    const providerId = 'test123'
    const slug = generateDonationSlug(providerId)
    
    // Test if the slug contains only alphanumeric characters
    const validCharacterPattern = /^[A-Za-z0-9]+$/
    expect(validCharacterPattern.test(slug)).toBe(true)
  })

  it('should generate different slugs for same providerId', () => {
    const providerId = 'test123'
    const slug1 = generateDonationSlug(providerId)
    const slug2 = generateDonationSlug(providerId)
    
    expect(slug1).not.toBe(slug2)
  })
})
