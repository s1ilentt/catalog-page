'use client';

import Image, { type StaticImageData } from 'next/image';
import { formatHeelParams } from '../lib/formatHeelParams';
import { IProduct } from '../model/types';
import styles from './ProductCard.module.scss';
import { Heart as WishListIcon } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import placeholderImage from '@/shared/assets/images/placeholder-image.webp';
import Link from 'next/link';
import { ROUTES } from '@/shared/config';

interface IProductCard {
	product: IProduct;
	isSmall?: boolean;
}

export function ProductCard({ product, isSmall = false }: IProductCard) {
	const [isWishlist, setIsWishlist] = useState(false);
	const [imgSrc, setImgSrc] = useState<string | StaticImageData>(product.image);

	return (
		<Link
			className={styles['card-link']}
			href={ROUTES.HOME}
		>
			<article className={clsx(isSmall && styles['card-wrapper--small'])}>
				<div className={styles['card-image-wrapper']}>
					<Image
						alt={product.name}
						src={imgSrc}
						width={357}
						height={449}
						loading='lazy'
						quality={80}
						onError={() => {
							if (imgSrc !== placeholderImage) {
								setImgSrc(placeholderImage);
							}
						}}
					/>
					<button
						type='button'
						onClick={e => {
							e.preventDefault();
							setIsWishlist(prev => !prev);
						}}
						aria-label={
							isWishlist ? 'Видалити з обраного' : 'Додати до обраного'
						}
						aria-pressed={isWishlist}
					>
						<WishListIcon
							aria-hidden={true}
							className={clsx(
								styles['wishlist-icon'],
								isWishlist && styles['_active'],
							)}
						/>
					</button>
					{!!product.discountPercent && (
						<div className={styles['discount-label']}>
							{`${product.discountPercent}% OFF`}
						</div>
					)}
				</div>
				<div
					className={styles['card-content']}
					lang='en'
				>
					<div className={styles['card-text']}>
						<h3 className={styles['card-title']}>{product.name}</h3>
						<p className={styles['card-description']}>
							{`${product.category} / ${formatHeelParams(product.heelParams)}`}
						</p>
					</div>
					{product.oldPrice ? (
						<div className={styles['discount-price']}>
							<div
								className={styles['old-price']}
							>{`${product.oldPrice} ₴`}</div>
							<div className={styles['new-price']}>{`${product.price} ₴`}</div>
						</div>
					) : (
						<div className={styles.price}>{`${product.price} ₴`}</div>
					)}
				</div>
			</article>
		</Link>
	);
}
