import clsx from 'clsx';
import Link from 'next/link';
import styles from './FooterColumn.module.scss';

interface IFooterColumn {
	title: string;
	links: { label: string; href: string; active?: boolean }[];
}

export function FooterColumn({ title, links }: IFooterColumn) {
	return (
		<div className={styles['column']}>
			<h3 className={styles['column-title']}>{title}</h3>
			<ul className={styles['column-list']}>
				{links.map(link => (
					<li
						key={link.label}
						className={clsx(
							link.active && styles['_active'],
							styles['list-item'],
						)}
					>
						<Link
							href={link.href}
							aria-label={link.label}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
