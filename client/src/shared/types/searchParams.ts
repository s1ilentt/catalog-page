export interface ICatalogSearchParams {
	page?: string;
	limit?: string;
	category?: string | string[];
	colors?: string | string[];
	sizes?: string | string[];
	materials?: string | string[];
	minPrice?: string;
	maxPrice?: string;
}
