'use client'

import LoginCard from '@/components/LoginCard'
import { createClient } from '@/utils/supabase/client.util'
import { Container } from '@mui/material'

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
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: 5,
      }}
    >
      <LoginCard onClickGoogle={handleSignIn} />
    </Container>
  )
}

export default SignInPage
