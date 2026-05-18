import Link from 'next/link';
import styles from './FooterAbout.module.scss';
import { ROUTES } from '@/shared/config';
import clsx from 'clsx';

export function FooterAbout() {
	return (
		<div>
			<h3 className={styles['column-title']}>Зв'язок</h3>
			<ul className={styles['column-list']}>
				<li className={styles['list-item']}>
					<a
						href='mailto:woh_support@gmail.com'
						aria-label='Написати на email'
					>
						woh_support@gmail.com
					</a>
				</li>
				<li className={styles['list-item']}>
					<a
						href='tel:+380679670163'
						aria-label='Зателефонувати'
					>
						+38 (067) 967 01 63
					</a>
				</li>
				<li className={clsx(styles['_active'], styles['list-item'])}>
					<Link
						href={ROUTES.HOME}
						aria-label='Замовити дзвінок'
					>
						Замовити дзвінок →
					</Link>
				</li>
			</ul>
		</div>
	);
}
