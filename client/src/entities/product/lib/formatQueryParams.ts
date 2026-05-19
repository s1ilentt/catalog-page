import { ICatalogSearchParams } from '@/shared/types';

type FormattedParams = {
	[K in keyof ICatalogSearchParams]?: string;
};

export function formatQueryParams(
	params: ICatalogSearchParams,
): FormattedParams {
	const result: FormattedParams = {};

	for (const key in params) {
		const value = params[key as keyof ICatalogSearchParams];

		if (value === undefined || value === null || value === '') continue;

		result[key as keyof ICatalogSearchParams] = Array.isArray(value)
			? value.join(',')
			: value;
	}

	return result;
}
