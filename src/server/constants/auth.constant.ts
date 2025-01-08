export enum AuthErrorCode {
  NO_TOKEN = 'NO_TOKEN',
  INVALID_TOKEN = 'INVALID_TOKEN',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  ROLE_NOT_DEFINED = 'ROLE_NOT_DEFINED',
  INSUFFICIENT_PERMISSIONS = 'INSUFFICIENT_PERMISSIONS',
  INTERNAL_ERROR = 'INTERNAL_ERROR'
}

export interface AuthError {
  code: AuthErrorCode;
  message: string;
}

export const AUTH_ERROR_MESSAGES: Record<AuthErrorCode, string> = {
  [AuthErrorCode.NO_TOKEN]: 'No authorization token provided',
  [AuthErrorCode.INVALID_TOKEN]: 'Invalid or expired token',
  [AuthErrorCode.USER_NOT_FOUND]: 'User not found',
  [AuthErrorCode.ROLE_NOT_DEFINED]: 'User role not defined',
  [AuthErrorCode.INSUFFICIENT_PERMISSIONS]: 'Insufficient permissions',
  [AuthErrorCode.INTERNAL_ERROR]: 'Internal Server Error'
}
