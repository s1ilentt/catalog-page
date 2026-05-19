import { api } from '@/shared/api';
import { type IFiltersResponse } from '../model/types';

class FiltersService {
	private baseUrl = 'api/v1/products/filters';

	async getFilters() {
		const { data } = await api.get<IFiltersResponse>(this.baseUrl);
		return data;
	}
}

export const filtersService = new FiltersService();
