import { createClient } from '@/utils/supabase/server.util'
import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

const ProtectedLayout = async ({ children }: PropsWithChildren) => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/sign-in')
  }

  return children
}

export default ProtectedLayout
