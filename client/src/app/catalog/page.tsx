import { CatalogPage } from '@/_pages/catalog';

interface IProps {
	searchParams: Promise<{
		page?: string;
		category?: string;
		colors?: string;
		minPrice?: string;
		maxPrice?: string;
	}>;
}

export default async function Page({ searchParams }: IProps) {
	const params = await searchParams;

	return <CatalogPage searchParams={params} />;
}
