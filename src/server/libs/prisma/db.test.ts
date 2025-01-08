jest.mock('@prisma/client', () => {
  const mockPrismaClient = jest.fn(() => ({
    $connect: jest.fn(),
    $disconnect: jest.fn(),
  }))

  return { PrismaClient: mockPrismaClient }
})

describe('Database Connection', () => {
  let mockPrismaClient: jest.Mock

  beforeEach(() => {
    jest.resetModules()
    const { PrismaClient } = require('@prisma/client') // Re-import mock after reset
    mockPrismaClient = PrismaClient as jest.Mock
    mockPrismaClient.mockClear()
  })

  it('should create a PrismaClient instance', () => {
    jest.isolateModules(() => {
      const prismaInstance = require('./db').default
      expect(prismaInstance).toBeDefined()
      expect(mockPrismaClient).toHaveBeenCalledTimes(1) // Track constructor calls
    })
  })

  it('should reuse the same PrismaClient instance', () => {
    jest.isolateModules(() => {
      const { getPrismaClient } = require('./db')
      const prisma1 = getPrismaClient()
      const prisma2 = getPrismaClient()

      // Assertions
      expect(prisma1).toBe(prisma2) // Singleton behavior
    })
  })
})
