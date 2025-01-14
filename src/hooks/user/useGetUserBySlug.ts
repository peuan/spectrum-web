import type { User } from '@prisma/client'
import type { UseQueryOptions } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '@/enums/mutation-key.enum'
import { getUserBySlug } from '@/services/user.service'

interface UseGetUserBySlugProps {
  request: {
    slug: string
  }
  options?: Omit<UseQueryOptions<User>, 'queryKey' | 'queryFn'>
}

const useGetUserBySlug = (
  { request, options }: UseGetUserBySlugProps = { request: { slug: '' } }
) =>
  useQuery({
    queryKey: [QueryKey.GET_USER_BY_SLUG, request],
    queryFn: () => getUserBySlug(request.slug),
    enabled: !!request.slug,
    refetchOnMount: 'always',
    ...options,
  })

export default useGetUserBySlug
