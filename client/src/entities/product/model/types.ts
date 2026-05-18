export interface IProduct {
	id: number;
	name: string;
	category: string;
	description: string;
	image: string;
	price: number;
	sizes: number[];
	colors: string[];
	oldPrice?: number;
	discountPercent?: number;
	heelParams: string;
	material: string;
}

export interface IProductsResponse {
	data: IProduct[];
	totalPages: number;
}
