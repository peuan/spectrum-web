import { NextResponse } from 'next/server'

import { getUserByLiveSlug } from '@/server/services/user.service'
import { handleError } from '@/server/utils/handle-error.util'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params
  try {
    return NextResponse.json(await getUserByLiveSlug(slug))
  } catch (error) {
    return handleError(error)
  }
}
