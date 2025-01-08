import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { withAuth } from '@/server/middlewares/auth.middleware'

export const GET = withAuth(async (req: NextRequest) => {
  const { user } = req

  return NextResponse.json(user)
})
