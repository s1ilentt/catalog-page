interface IFilterValue {
	value: string | number;
	label: string;
	count: number;
	hex?: string;
}

interface IFilter {
	name: string;
	label: string;
	values?: IFilterValue[];
	min?: number;
	max?: number;
}

export interface IFiltersResponse {
	filters: IFilter[];
}
