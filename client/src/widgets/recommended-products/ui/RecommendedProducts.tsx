'use client';

import clsx from 'clsx';
import styles from './RecommendedProducts.module.scss';
import { ProductCard, useGetProducts } from '@/entities/product';
import { EmptyState, ErrorState, Loader } from '@/shared/ui';

export function RecommendedProducts() {
	const { products, totalProduct, isError, isPending, refetch } =
		useGetProducts({
			limit: '6',
		});

	if (isPending) return <Loader />;
	if (isError) return <ErrorState onRetry={refetch} />;
	if (!products?.length) return <EmptyState />;

	return (
		<section className={clsx(styles['recommended-section'], 'container')}>
			<div className={styles.header}>
				<h4 className={styles['header-subtitle']}>Our selection</h4>
				<h2 className={styles['header-title']}>Рекомендовані товари</h2>
			</div>
			{
				<div className={styles.carousel}>
					{products.map(product => (
						<div
							className={styles['carousel-item']}
							key={product.id}
						>
							<ProductCard
								isSmall
								product={product}
							/>
						</div>
					))}
				</div>
			}
		</section>
	);
}
