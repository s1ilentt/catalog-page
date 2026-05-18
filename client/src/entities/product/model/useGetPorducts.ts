import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { IProductParams, productService } from '../api/product.service';

export const useGetProducts = (params?: IProductParams) => {
	const { data, isError, isPending } = useQuery({
		queryKey: ['products', params],
		queryFn: () => productService.getProducts(params),
		staleTime: 1000 * 300,
		placeholderData: keepPreviousData,
	});

	return {
		products: data?.data,
		totalPages: data?.totalPages,
		isError,
		isPending,
	};
};
