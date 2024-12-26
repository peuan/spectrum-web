import { createClient } from '@/utils/supabase/client.util'
import { User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const useUser = () => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
      setIsLoading(false)
    }

    getUser()
  }, [supabase])

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  }
}

export default useUser
