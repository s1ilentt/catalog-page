import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { productService } from '../api/product.service';
import { ICatalogSearchParams } from '@/shared/types';

export const useGetProducts = (params?: ICatalogSearchParams) => {
	const { data, isError, refetch, isPending } = useQuery({
		queryKey: ['products', params],
		queryFn: () => productService.getProducts(params),
		staleTime: 1000 * 300,
		placeholderData: keepPreviousData,
	});

	return {
		products: data?.data,
		totalProduct: data?.total,
		isError,
		refetch,
		isPending,
	};
};
