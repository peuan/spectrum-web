import { NextResponse } from 'next/server'

import { getUserBySlug } from '@/server/services/user.service'
import { handleError } from '@/server/utils/handle-error.util'

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params
  try {
    return NextResponse.json(await getUserBySlug(slug))
  } catch (error) {
    return handleError(error)
  }
}
