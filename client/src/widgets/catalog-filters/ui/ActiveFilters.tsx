'use client';

import { useUrlFilter } from '../lib/useUrlFilter';
import { useGetFilters } from '@/entities/filter/model/useGetFilters';
import styles from './ActiveFilters.module.scss';
import clsx from 'clsx';
import { SortDropdown } from '@/features/catalog-sort';
import { SlidersHorizontal } from 'lucide-react';

const FILTER_KEYS = [
	'category',
	'colors',
	'sizes',
	'materials',
	'heel_params',
	'material',
] as const;

export function ActiveFilters() {
	const { getValue, getValues, clearFilter, resetAll } = useUrlFilter();
	const { filters } = useGetFilters();

	const activeFilters = FILTER_KEYS.filter(
		name => getValues(name).length > 0,
	).map(name => ({
		name,
		label: filters?.find(f => f.name === name)?.label ?? name,
	}));

	const priceFilter = filters?.find(f => f.name === 'price');
	const hasPriceFilter = getValue('min_price') || getValue('max_price');

	return (
		<div className={styles['wrapper-border']}>
			<div className={clsx(styles['wrapper-all'], 'container')}>
				<div className={clsx(styles.wrapper, 'hidden-tablet')}>
					<span className={styles.title}>Фільтри:</span>

					{activeFilters?.length > 0 ? (
						<ul className={styles.list}>
							{activeFilters.map(({ name, label }) => (
								<li
									key={name}
									className={styles.chip}
								>
									<span className={styles.label}>{label}</span>
									<button
										type='button'
										onClick={() => clearFilter(name)}
										aria-label={`Видалити фільтр ${label}`}
										className={styles.remove}
									>
										×
									</button>
								</li>
							))}

							{hasPriceFilter && priceFilter && (
								<li className={styles.chip}>
									<span className={styles.label}>{priceFilter.label}</span>
									<button
										type='button'
										onClick={() => clearFilter('price')}
										aria-label='Видалити фільтр ціни'
										className={styles.remove}
									>
										×
									</button>
								</li>
							)}
						</ul>
					) : null}

					<button
						type='button'
						onClick={resetAll}
						className={styles.clearAll}
					>
						Очистити
					</button>
				</div>
				<div className={clsx(styles['mobile-actions'], 'visible-tablet')}>
					<button
						className={styles['show-filters']}
						type='button'
						onClick={resetAll}
					>
						<SlidersHorizontal
							width={16}
							height={16}
						/>
						<span>Фільтри</span>
					</button>
					<SortDropdown />
				</div>
			</div>
		</div>
	);
}
