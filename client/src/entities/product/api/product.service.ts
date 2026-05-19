import { api } from '@/shared/api';
import { type IProductsResponse } from '../model/types';
import { ICatalogSearchParams } from '@/shared/types';
import { formatQueryParams } from '../lib/formatQueryParams';

class ProductService {
	private baseUrl = 'api/v1/products';

	async getProducts(params?: ICatalogSearchParams) {
		const { data } = await api.get<IProductsResponse>(this.baseUrl, { params });
		return data;
	}
}

export const productService = new ProductService();
