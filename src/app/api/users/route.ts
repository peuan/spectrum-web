import { NextResponse } from 'next/server'

import { createClient } from '@/utils/supabase/server.util'

export const GET = async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  return NextResponse.json([user])
}
