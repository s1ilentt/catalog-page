import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SORT_OPTIONS, SortValue } from '../model/constants';

export function useSortDropdown() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const ref = useRef<HTMLDivElement>(null);
	const [isOpen, setIsOpen] = useState(false);

	const currentValue = (searchParams.get('ordering') as SortValue) || 'default';
	const currentLabel =
		SORT_OPTIONS.find(o => o.value === currentValue)?.label ??
		SORT_OPTIONS[0].label;

	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};

		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setIsOpen(false);
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleEscape);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscape);
		};
	}, [isOpen]);

	const select = (value: SortValue) => {
		const params = new URLSearchParams(searchParams.toString());

		if (value === 'default') {
			params.delete('ordering');
		} else {
			params.set('ordering', value);
		}
		// When changing the sorting, reset to the first page
		params.delete('page');

		const query = params.toString();
		router.push(query ? `${pathname}?${query}` : pathname);
		setIsOpen(false);
	};

	return {
		ref,
		isOpen,
		currentValue,
		currentLabel,
		options: SORT_OPTIONS,
		toggle: () => setIsOpen(prev => !prev),
		select,
	};
}
