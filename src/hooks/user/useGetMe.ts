import type { UseQueryOptions } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '@/enums/mutation-key.enum'
import type { User } from '@/interfaces/user.interface'
import { getMe } from '@/services/user.service'

interface UseGetMeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request?: any
  options?: Omit<UseQueryOptions<User>, 'queryKey' | 'queryFn'>
}

const useGetMe = ({ request, options }: UseGetMeProps = {}) =>
  useQuery({
    queryKey: [QueryKey.GET_ME, request],
    queryFn: () => getMe(request),
    refetchOnMount: 'always',
    ...options,
  })

export default useGetMe
