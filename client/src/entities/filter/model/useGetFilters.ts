import { useQuery } from '@tanstack/react-query';
import { filtersService } from '../api/filter.service';

export const useGetFilters = () => {
	const { data, isError, refetch, isPending } = useQuery({
		queryKey: ['filters'],
		queryFn: () => filtersService.getFilters(),
		staleTime: 1000 * 300,
	});

	return {
		filters: data?.filters,
		isError,
		refetch,
		isPending,
	};
};
