import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '@/enums/mutation-key.enum'
import type { Plan } from '@/interfaces/plan.interface'
import { getPlanList } from '@/services/plan.service'

interface UseGetPlanListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request?: any
  options?: Omit<UseQueryOptions<Plan[]>, 'queryKey' | 'queryFn'>
}

const useGetPlanList = ({ request, options }: UseGetPlanListProps = {}) => useQuery({
    queryKey: [QueryKey.GET_PLAN_LIST, request],
    queryFn: () => getPlanList(request),
    refetchOnMount: 'always',
    ...options,
  })

export default useGetPlanList
