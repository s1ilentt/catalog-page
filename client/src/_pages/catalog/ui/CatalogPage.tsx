import { ActiveFilters, CatalogFilters } from '@/widgets/catalog-filters';
import { CatalogHeader } from './CatalogHeader';
import clsx from 'clsx';
import styles from './CatalogPage.module.scss';
import { ProductList } from '@/widgets/product-list';
import { ICatalogSearchParams } from '@/shared/types';

export function CatalogPage({ searchParams }: ICatalogSearchParams) {
	return (
		<div>
			<CatalogHeader />
			<ActiveFilters />
			<div className={clsx(styles.body, 'container')}>
				<CatalogFilters />
				<ProductList searchParams={searchParams} />
			</div>
		</div>
	);
}
