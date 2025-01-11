import { NextResponse } from 'next/server'

import { ErrorCode } from '@/enums/error-code.enum'

import { ERROR_MESSAGES } from '../constants/error.constant'
import { CustomError } from '../errors/custom-error.error'

export const handleError = (error: unknown) => {
  if (error instanceof CustomError) {
    return NextResponse.json(
      { code: error.code, message: error.message },
      { status: error.status }
    )
  }

  return NextResponse.json(
    {
      code: ErrorCode.INTERNAL_ERROR,
      message: ERROR_MESSAGES[ErrorCode.INTERNAL_ERROR],
    },
    { status: 500 }
  )
}
