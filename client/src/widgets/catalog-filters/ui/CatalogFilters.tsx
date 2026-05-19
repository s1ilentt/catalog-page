'use client';

import { useGetFilters } from '@/entities/filter';

export function CatalogFilters() {
	const { filters } = useGetFilters();
	return (
		<div
			className='hidden-tablet'
			style={{ height: '900px', backgroundColor: 'black' }}
		></div>
	);
}
