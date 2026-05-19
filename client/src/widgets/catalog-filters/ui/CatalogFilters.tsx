'use client';

import { useGetFilters } from '@/entities/filter/model/useGetFilters';
import { useUrlFilter } from '../lib/useUrlFilter';
import { FilterDropdown } from './FilterDropdown';
import { CheckboxFilter } from './CheckboxFilter';
import { PriceFilter } from './PriceFilter';
import styles from './CatalogFilters.module.scss';
import { EmptyState } from '@/shared/ui';
import { SizeFilter } from './SizeFilter';
import { ColorFilter } from './ColorFilter';
import clsx from 'clsx';

export function CatalogFilters() {
	const { filters } = useGetFilters();
	const { getValues } = useUrlFilter();

	if (!filters?.length) return <EmptyState />;

	return (
		<div className={clsx(styles.wrapper, 'hidden-tablet')}>
			{filters.map(filter => {
				if (filter.values?.length) {
					const activeCount = getValues(filter.name).length;

					return (
						<FilterDropdown
							key={filter.name}
							label={filter.label}
							activeCount={activeCount}
						>
							{filter.name === 'size' ? (
								<SizeFilter
									name={filter.name}
									values={filter.values}
								/>
							) : filter.name === 'color' ? (
								<ColorFilter
									name={filter.name}
									values={filter.values}
								/>
							) : (
								<CheckboxFilter
									name={filter.name}
									values={filter.values}
								/>
							)}
						</FilterDropdown>
					);
				}

				if (filter.min !== undefined && filter.max !== undefined) {
					return (
						<FilterDropdown
							key={filter.name}
							label={filter.label}
						>
							<PriceFilter
								min={filter.min}
								max={filter.max}
							/>
						</FilterDropdown>
					);
				}
			})}
		</div>
	);
}
