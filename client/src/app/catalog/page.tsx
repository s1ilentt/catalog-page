import { CatalogPage } from '@/_pages/catalog';
import { filtersService } from '@/entities/filter/api/filter.service';
import { productService } from '@/entities/product/api/product.service';
import { hashKey } from '@/shared/lib';
import { ICatalogSearchParams } from '@/shared/types';
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from '@tanstack/react-query';

export const revalidate = 180;

interface IProps {
	searchParams: Promise<ICatalogSearchParams>;
}

export default async function Page({ searchParams }: IProps) {
	const params = await searchParams;

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				queryKeyHashFn: hashKey,
			},
		},
	});

	await Promise.all([
		queryClient.prefetchQuery({
			queryKey: ['products', params],
			queryFn: () => productService.getProducts(params),
		}),
		queryClient.prefetchQuery({
			queryKey: ['products', { limit: '6' }],
			queryFn: () => productService.getProducts({ limit: '6' }),
		}),
		queryClient.prefetchQuery({
			queryKey: ['filters'],
			queryFn: () => filtersService.getFilters(),
		}),
	]);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<CatalogPage searchParams={params} />
		</HydrationBoundary>
	);
}
