import { AuthErrorCode } from '@/enums/auth.enum'

export const AUTH_ERROR_MESSAGES: Record<AuthErrorCode, string> = {
  [AuthErrorCode.NO_TOKEN]: 'No authorization token provided',
  [AuthErrorCode.INVALID_TOKEN]: 'Invalid or expired token',
  [AuthErrorCode.USER_NOT_FOUND]: 'User not found',
  [AuthErrorCode.ROLE_NOT_DEFINED]: 'User role not defined',
  [AuthErrorCode.INSUFFICIENT_PERMISSIONS]: 'Insufficient permissions',
  [AuthErrorCode.INTERNAL_ERROR]: 'Internal Server Error',
}
