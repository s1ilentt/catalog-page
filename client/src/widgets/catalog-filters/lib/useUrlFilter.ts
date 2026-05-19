'use client';

import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const MULTI_VALUE_FILTERS = new Set(['colors', 'sizes']);

export function useUrlFilter() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const getValues = useCallback(
		(name: string): string[] => {
			const raw = searchParams.get(name);
			if (!raw) return [];
			return MULTI_VALUE_FILTERS.has(name) ? raw.split(',') : [raw];
		},
		[searchParams],
	);

	const getValue = useCallback(
		(name: string): string | null => searchParams.get(name),
		[searchParams],
	);

	const toggleValue = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());

			if (MULTI_VALUE_FILTERS.has(name)) {
				const current = params.get(name)?.split(',') ?? [];

				const next = current.includes(value)
					? current.filter(v => v !== value)
					: [...current, value];

				if (next.length === 0) {
					params.delete(name);
				} else {
					params.set(name, next.join(','));
				}
			} else {
				if (params.get(name) === value) {
					params.delete(name);
				} else {
					params.set(name, value);
				}
			}

			params.delete('page');
			router.push(`${pathname}?${params.toString()}`);
		},
		[router, pathname, searchParams],
	);

	const setRange = useCallback(
		(
			name: 'price',
			min: number,
			max: number,
			absMin: number,
			absMax: number,
		) => {
			const params = new URLSearchParams(searchParams.toString());
			const minKey = `min_${name}`;
			const maxKey = `max_${name}`;

			if (min === absMin) {
				params.delete(minKey);
			} else {
				params.set(minKey, String(min));
			}

			if (max === absMax) {
				params.delete(maxKey);
			} else {
				params.set(maxKey, String(max));
			}

			params.delete('page');
			router.push(`${pathname}?${params.toString()}`);
		},
		[router, pathname, searchParams],
	);

	const clearFilter = useCallback(
		(name: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.delete(name);
			params.delete(`min_${name}`);
			params.delete(`max_${name}`);
			params.delete('page');
			router.push(`${pathname}?${params.toString()}`);
		},
		[router, pathname, searchParams],
	);

	const resetAll = useCallback(() => {
		router.push(pathname);
	}, [router, pathname]);

	return { getValues, getValue, toggleValue, setRange, clearFilter, resetAll };
}
