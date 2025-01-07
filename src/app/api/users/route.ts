import { createClient } from '@/utils/supabase/server.util'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()
  return NextResponse.json([user])
}
