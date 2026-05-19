'use client';
import { Breadcrumbs } from '@/shared/ui';
import { useBreadcrumbs } from '../lib/useBreadcrumbs';

export function BreadcrumbsWidget() {
	const items = useBreadcrumbs();

	if (items.length <= 1) return null;

	return <Breadcrumbs items={items} />;
}
