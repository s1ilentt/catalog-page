import { usePathname } from 'next/navigation';
import { ROUTE_LABELS } from '@/shared/config';
import { IBreadcrumbItem } from '@/shared/ui';

export function useBreadcrumbs() {
	const pathname = usePathname();
	const segments = pathname.split('/').filter(Boolean);

	const items: IBreadcrumbItem[] = [{ label: 'Головна', href: '/' }];

	segments.forEach((segment, index) => {
		const href = '/' + segments.slice(0, index + 1).join('/');
		const label = ROUTE_LABELS[segment] ?? segment;
		items.push({ label, href });
	});

	if (items.length > 1) {
		items[items.length - 1] = { label: items[items.length - 1].label };
	}

	return items;
}
