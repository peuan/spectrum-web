'use client'

import { createClient } from '@/utils/supabase/client.util'
import { Button, Container } from '@mui/material'

const SignInPage = () => {
  const handleSignIn = async () => {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    })
    console.log('data', data)
    console.log('error', error)
  }

  return (
    <Container sx={{ pt: 10, textAlign: 'center' }}>
      <Button onClick={handleSignIn}>Sign in</Button>
    </Container>
  )
}

export default SignInPage
