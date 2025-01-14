import type { UseQueryOptions } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '@/enums/mutation-key.enum'
import type { User } from '@/interfaces/user.interface'
import { getUserByLiveSlug } from '@/services/user.service'

interface UseGetUserBySlugProps {
  request: {
    slug: string
  }
  options?: Omit<UseQueryOptions<User>, 'queryKey' | 'queryFn'>
}

const useGetUserLiveBySlug = (
  { request, options }: UseGetUserBySlugProps = { request: { slug: '' } }
) =>
  useQuery({
    queryKey: [QueryKey.GET_USER_BY_LIVE_SLUG, request],
    queryFn: () => getUserByLiveSlug(request.slug),
    enabled: !!request.slug,
    refetchOnMount: 'always',
    ...options,
  })

export default useGetUserLiveBySlug
