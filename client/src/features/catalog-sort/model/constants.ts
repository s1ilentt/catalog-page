export const SORT_OPTIONS = [
	{ value: 'default', label: 'За замовчуванням' },
	{ value: 'price', label: 'За зростанням ціни' },
	{ value: '-price', label: 'За спаданням ціни' },
] as const;

export type SortValue = (typeof SORT_OPTIONS)[number]['value'];
