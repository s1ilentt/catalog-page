export const getPageNumbers = (
	currentPage: number,
	totalPages: number,
): { value: number | 'dots'; label: string }[] => {
	const formatPage = (page: number) => String(page).padStart(2, '0');

	const pages: (number | 'dots')[] = [];

	if (totalPages <= 4) {
		for (let i = 1; i <= totalPages; i++) pages.push(i);
	} else {
		pages.push(1);

		if (currentPage > 1 && currentPage < totalPages - 1) {
			pages.push(currentPage, currentPage + 1);
		} else if (currentPage === 1) {
			pages.push(2, 3);
		} else {
			pages.push(currentPage - 1, currentPage);
		}

		const lastBeforeEnd = pages[pages.length - 1] as number;
		if (lastBeforeEnd < totalPages - 1) pages.push('dots');
		if (lastBeforeEnd !== totalPages) pages.push(totalPages);
	}

	return pages.map(page => ({
		value: page,
		label: page === 'dots' ? '...' : formatPage(page),
	}));
};
