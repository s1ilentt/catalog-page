'use client';

import { ProductCard } from '@/entities/product';
import styles from './ProductList.module.scss';
import { CatalogPagination } from '@/features/catalog-pagination';
import { ICatalogSearchParams } from '@/shared/types';
import { LoadMoreButton } from '@/features/catalog-load-more';
import { useGetProducts } from '@/entities/product/model/useGetPorducts';
import { EmptyState, ErrorState, Loader } from '@/shared/ui';

const BASE_LIMIT = 24;

export function ProductList({
	searchParams,
}: {
	searchParams: ICatalogSearchParams;
}) {
	const { products, totalProduct, isError, refetch, isPending } =
		useGetProducts(searchParams);

	const totalPages = Math.ceil((totalProduct ?? 0) / BASE_LIMIT);
	const limit = Number(searchParams.limit) || 24;
	const currentPage = Number(searchParams.page) || 1;
	const skippedProducts = (currentPage - 1) * BASE_LIMIT;
	const remainingProductsOnPage =
		(totalProduct ?? 0) - skippedProducts - (products?.length ?? 0);

	console.log(remainingProductsOnPage);

	const hasMore = remainingProductsOnPage > 0;

	if (isPending) return <Loader />;
	if (isError) return <ErrorState onRetry={refetch} />;
	if (!products?.length) return <EmptyState />;

	return (
		<div>
			<div className={styles['product-list']}>
				{products.map(product => (
					<ProductCard
						product={product}
						key={product.id}
					/>
				))}
			</div>
			{hasMore && (
				<div className={styles['button-load-more-wrapper']}>
					<LoadMoreButton currentLimit={limit} />
				</div>
			)}
			<CatalogPagination
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</div>
	);
}
