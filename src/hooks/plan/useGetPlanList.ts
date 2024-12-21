import { QueryKey } from '@/enums/mutation-key.enum'
import { Plan } from '@/interfaces/plan.interface'
import { getPlanList } from '@/services/plan.service'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

interface UseGetPlanListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request?: any
  options?: Omit<UseQueryOptions<Plan[]>, 'queryKey' | 'queryFn'>
}

const useGetPlanList = ({ request, options }: UseGetPlanListProps = {}) => {
  return useQuery({
    queryKey: [QueryKey.GET_PLAN_LIST, request],
    queryFn: () => getPlanList(request),
    refetchOnMount: 'always',
    ...options,
  })
}

export default useGetPlanList
