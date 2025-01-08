import type { Role } from '@prisma/client'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { AuthErrorCode } from '@/enums/auth.enum'
import { AUTH_ERROR_MESSAGES } from '@/server/constants/auth.constant'
import { getUserByProviderId } from '@/server/services/user.service'
import { createClient } from '@/utils/supabase/server.util'
import { extractBearerToken, getAuthHeader } from '@/utils/token.util'

type RouteHandler = (req: NextRequest) => Promise<NextResponse>

interface AuthOptions {
  roles?: Role[]
}

export const withAuth =
  (handler: RouteHandler, options: AuthOptions = {}) =>
  async (req: NextRequest) => {
    try {
      const supabase = await createClient()

      // Try to get token from header
      const authHeader = getAuthHeader(req.headers)
      const token = extractBearerToken(authHeader)

      if (!token) {
        return NextResponse.json(
          {
            error: {
              code: AuthErrorCode.NO_TOKEN,
              message: AUTH_ERROR_MESSAGES[AuthErrorCode.NO_TOKEN],
            },
          },
          { status: 401 }
        )
      }

      // Verify the token and get user
      const {
        data: { user: supabaseUser },
        error,
      } = await supabase.auth.getUser(token)

      if (error || !supabaseUser) {
        return NextResponse.json(
          {
            error: {
              code: AuthErrorCode.INVALID_TOKEN,
              message: AUTH_ERROR_MESSAGES[AuthErrorCode.INVALID_TOKEN],
            },
          },
          { status: 401 }
        )
      }

      const user = await getUserByProviderId(supabaseUser.id)

      if (!user) {
        return NextResponse.json(
          {
            error: {
              code: AuthErrorCode.USER_NOT_FOUND,
              message: AUTH_ERROR_MESSAGES[AuthErrorCode.USER_NOT_FOUND],
            },
          },
          { status: 404 }
        )
      }

      // Check role authorization if roles are specified
      if (options.roles && options.roles.length > 0) {
        if (!user.role) {
          return NextResponse.json(
            {
              error: {
                code: AuthErrorCode.ROLE_NOT_DEFINED,
                message: AUTH_ERROR_MESSAGES[AuthErrorCode.ROLE_NOT_DEFINED],
              },
            },
            { status: 403 }
          )
        }

        if (!options.roles.includes(user.role)) {
          return NextResponse.json(
            {
              error: {
                code: AuthErrorCode.INSUFFICIENT_PERMISSIONS,
                message:
                  AUTH_ERROR_MESSAGES[AuthErrorCode.INSUFFICIENT_PERMISSIONS],
              },
            },
            { status: 403 }
          )
        }
      }

      // Add user and token to the request context
      req.user = user
      req.accessToken = token

      // Call the original handler
      return handler(req)
    } catch (error) {
      console.error('Auth Middleware Error:', error)
      return NextResponse.json(
        {
          error: {
            code: AuthErrorCode.INTERNAL_ERROR,
            message: AUTH_ERROR_MESSAGES[AuthErrorCode.INTERNAL_ERROR],
          },
        },
        { status: 500 }
      )
    }
  }
