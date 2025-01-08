import { extractBearerToken, getAuthHeader } from './token.util'

describe('token utils', () => {
  describe('extractBearerToken', () => {
    it('should return null for undefined header', () => {
      expect(extractBearerToken(undefined)).toBeNull()
    })

    it('should return null for invalid format', () => {
      expect(extractBearerToken('invalid')).toBeNull()
      expect(extractBearerToken('Bearer')).toBeNull()
      expect(extractBearerToken('Bearer ')).toEqual('')
      expect(extractBearerToken('Token xyz')).toBeNull()
    })

    it('should extract token from valid Bearer header', () => {
      const token = 'xyz123'
      expect(extractBearerToken(`Bearer ${token}`)).toBe(token)
    })
  })

  describe('getAuthHeader', () => {
    it('should return null when no authorization header present', () => {
      const headers = new Headers()
      expect(getAuthHeader(headers)).toBeNull()
    })

    it('should return authorization header value when present', () => {
      const authValue = 'Bearer xyz123'
      const headers = new Headers({
        authorization: authValue,
      })
      expect(getAuthHeader(headers)).toBe(authValue)
    })
  })
})
