import Link from 'next/link';
import styles from './Breadcrumbs.module.scss';
import clsx from 'clsx';

export interface IBreadcrumbItem {
	label: string;
	href?: string;
}

interface IBreadcrumbs {
	items: IBreadcrumbItem[];
}

export function Breadcrumbs({ items }: IBreadcrumbs) {
	return (
		<nav
			aria-label='Хлібні крихти'
			className={clsx(styles.breadcrumbs, 'container')}
		>
			<ol className={styles.list}>
				{items.map((item, index) => {
					const isLast = index === items.length - 1;

					return (
						<li
							key={index}
							className={styles.item}
						>
							{isLast || !item.href ? (
								<span aria-current='page'>{item.label}</span>
							) : (
								<Link href={item.href}>{item.label}</Link>
							)}
							{!isLast && (
								<span
									className={styles.separator}
									aria-hidden='true'
								>
									/
								</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}
