'use client'

import { createClient } from '@/utils/supabase/client.util'
import { Button, Container } from '@mui/material'

const SignInPage = () => {
  const handleSignIn = async () => {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    })
  }

  return (
    <Container sx={{ pt: 10, textAlign: 'center' }}>
      <Button onClick={handleSignIn}>Sign in</Button>
    </Container>
  )
}

export default SignInPage
