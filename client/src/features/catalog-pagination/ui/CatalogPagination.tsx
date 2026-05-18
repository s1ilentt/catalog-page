'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import styles from './CatalogPagination.module.scss';
import { getPageNumbers } from '../lib/getPageNumbers';
import clsx from 'clsx';

interface ICatalogPagination {
	currentPage: number;
	totalPages: number;
}

export function CatalogPagination({
	currentPage,
	totalPages,
}: ICatalogPagination) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const paginationPages = getPageNumbers(currentPage, totalPages);

	const handlePageChange = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('page', String(page));
		params.delete('limit'); // сбрасываем подгрузку при переходе по страницам
		router.push(`?${params.toString()}`);
	};

	return (
		<div className={styles.pagination}>
			<button
				type='button'
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Попередня
			</button>
			<ul className={styles['page-list']}>
				{paginationPages.map((page, index) => (
					<li
						key={`${page.value}-${index}`}
						className={styles['page-list-item']}
					>
						{page.value === 'dots' ? (
							<span>{page.label}</span>
						) : (
							<button
								className={clsx(
									currentPage === page.value && styles['_active'],
								)}
								type='button'
								onClick={() => handlePageChange(page.value as number)}
								aria-current={currentPage === page.value ? 'page' : undefined}
							>
								{page.label}
							</button>
						)}
					</li>
				))}
			</ul>
			<button
				type='button'
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Наступна
			</button>
		</div>
	);
}
