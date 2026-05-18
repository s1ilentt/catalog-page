import { api } from '@/shared/api';
import { type IProductsResponse } from '../model/types';

export interface IProductParams {
	category?: string;
	colors?: string[];
	minPrice?: number;
	maxPrice?: number;
	page?: number;
	limit?: number;
}

class ProductService {
	private baseUrl = 'api/v1/products';

	async getProducts(params?: IProductParams) {
		const { data } = await api.get<IProductsResponse>(this.baseUrl, { params });
		return data;
	}
}

export const productService = new ProductService();
