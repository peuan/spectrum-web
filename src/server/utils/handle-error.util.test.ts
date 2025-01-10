import { NextResponse } from 'next/server'

import { ErrorCode } from '@/enums/error-code.enum'
import { NotFoundException } from '@/server/errors/http-exceptions.error'

import { handleError } from './handle-error.util'

// Mock NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn().mockImplementation((body, init) => ({
      body,
      init,
    })),
  },
}))

describe('handleError', () => {
  it('should return a JSON response for a CustomError', () => {
    const error = new NotFoundException('User not found')
    const response = handleError(error)

    expect(response).toEqual(
      NextResponse.json(
        { code: error.code, message: error.message },
        { status: error.status }
      )
    )
  })

  it('should return a generic error response for non-CustomError', () => {
    const error = new Error('Some generic error')
    const response = handleError(error)

    expect(response).toEqual(
      NextResponse.json(
        { code: ErrorCode.INTERNAL_ERROR, message: 'Internal Server Error' },
        { status: 500 }
      )
    )
  })
})
