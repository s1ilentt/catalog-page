'use client';

import clsx from 'clsx';
import styles from './RecommendedProducts.module.scss';
import { useGetProducts } from '@/entities/product/model/useGetPorducts';
import { IProduct, ProductCard } from '@/entities/product';

export function RecommendedProducts() {
	//! const { products, totalProduct, isError, isPending } = useGetProducts({
	// 	limit: 6,
	// });

	const products: IProduct[] = [
		{
			id: 1,
			name: 'Scarlett Pump',
			category: 'Pumps',
			description: 'Elegant pump for evening events',
			image: '/images/placeholder.png',
			price: 2499,
			sizes: [36, 37, 38, 39, 40],
			colors: ['black', 'red'],
			heelParams: '10 см (Professional)',
			material: 'Leather',
		},
		{
			id: 2,
			name: 'Luna Stiletto',
			category: 'Stilettos',
			description: 'Classic stiletto with pointed toe',
			image: '/images/placeholder.png',
			price: 3199,
			sizes: [36, 37, 38, 39],
			colors: ['beige', 'black'],
			heelParams: '12 см (Professional)',
			material: 'Suede',
		},
		{
			id: 3,
			name: 'Nova Mule',
			category: 'Mules',
			description: 'Comfortable mule for everyday wear',
			image: '/images/placeholder.png',
			price: 1899,
			sizes: [37, 38, 39, 40, 41],
			colors: ['white', 'brown'],
			heelParams: '5 см (Casual)',
			material: 'Leather',
		},
		{
			id: 4,
			name: 'Aurora Sandal',
			category: 'Sandals',
			description: 'Light sandal for summer days',
			image: '/images/placeholder.png',
			price: 1599,
			sizes: [36, 37, 38, 39, 40],
			colors: ['gold', 'silver'],
			heelParams: '7 см (Casual)',
			material: 'Synthetic',
		},
		{
			id: 5,
			name: 'Stella Boot',
			category: 'Boots',
			description: 'Elegant ankle boot for autumn',
			image: '/images/placeholder.png',
			price: 4299,
			sizes: [37, 38, 39, 40],
			colors: ['black', 'brown'],
			heelParams: '8 см (Professional)',
			material: 'Leather',
		},
		{
			id: 6,
			name: 'Iris Flat',
			category: 'Flats',
			description: 'Comfortable flat for daily use',
			image: '/images/placeholder.png',
			price: 1299,
			sizes: [36, 37, 38, 39, 40, 41],
			colors: ['black', 'nude'],
			heelParams: '1 см (Casual)',
			material: 'Leather',
		},
	];

	return (
		<section className={clsx(styles['recommended-section'], 'container')}>
			<div className={styles.header}>
				<h4 className={styles['header-subtitle']}>Our selection</h4>
				<h2 className={styles['header-title']}>Рекомендовані товари</h2>
			</div>
			{(products?.length ?? []) > 0 ? (
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
