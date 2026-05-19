'use client';

import clsx from 'clsx';
import styles from './RecommendedProducts.module.scss';
import { useGetProducts } from '@/entities/product/model/useGetPorducts';
import { ProductCard } from '@/entities/product';

export function RecommendedProducts() {
	const { products, totalProduct, isError } = useGetProducts({
		limit: '6',
	});

	return (
		<section className={clsx(styles['recommended-section'], 'container')}>
			<div className={styles.header}>
				<h4 className={styles['header-subtitle']}>Our selection</h4>
				<h2 className={styles['header-title']}>Рекомендовані товари</h2>
			</div>
			{(products?.length ?? 0) > 0 ? (
				<div className={styles.carousel}>
					{products?.map(product => (
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
			) : (
				<h3 className='error-message'>Продукти не знайдені</h3>
			)}
		</section>
	);
}
