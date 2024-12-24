import { Route } from '@/enums/route.enum'
import { createClient } from '@/utils/supabase/server.util'
import { redirect } from 'next/navigation'
import { PropsWithChildren } from 'react'

const ProtectedLayout = async ({ children }: PropsWithChildren) => {
  const supabase = await createClient()

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (!user || !!error) {
    return redirect(Route.SIGN_IN)
  }

  return children
}

export default ProtectedLayout
