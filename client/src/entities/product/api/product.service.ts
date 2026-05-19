import { api } from '@/shared/api';
import { type IProductsResponse } from '../model/types';
import { ICatalogSearchParams } from '@/shared/types';
import { formatQueryParams } from '../lib/formatQueryParams';

class ProductService {
	private baseUrl = 'api/v1/products';

	async getProducts(params?: ICatalogSearchParams) {
		const formattedParams = formatQueryParams(params ?? {});
		console.log(formattedParams);

		const { data } = await api.get<IProductsResponse>(this.baseUrl, {
			params: formattedParams,
		});
		return data;
	}
}

export const productService = new ProductService();
