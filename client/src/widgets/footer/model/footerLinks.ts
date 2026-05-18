import { ROUTES } from '@shared/config';

export const FOOTER_COLUMNS = [
	{
		title: 'Каталог',
		links: [
			{ label: 'High Heels', href: ROUTES.CATALOG, active: true },
			{ label: 'Одяг', href: ROUTES.CATALOG },
			{ label: 'Образи', href: ROUTES.CATALOG },
			{ label: 'Костюми', href: ROUTES.CATALOG },
			{ label: 'Шорти', href: ROUTES.CATALOG },
			{ label: 'Аксесуари', href: ROUTES.CATALOG },
		],
	},
	{
		title: 'Компанія',
		links: [
			{ label: 'Каталог товарів', href: ROUTES.CATALOG },
			{ label: 'Про нас', href: ROUTES.HOME },
			{ label: 'Співпраця', href: ROUTES.HOME },
			{ label: 'Оплата і Доставка', href: ROUTES.HOME },
			{ label: 'Гарантії і повернення', href: ROUTES.HOME },
			{ label: 'Контакти', href: ROUTES.HOME },
		],
	},
];
