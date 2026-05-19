import styles from './CatalogHeader.module.scss';
import clsx from 'clsx';
import { SortDropdown } from '@/features/catalog-sort';

export function CatalogHeader() {
	return (
		<div className={styles['catalog-header']}>
			<div className={clsx('container', styles['content-wrapper'])}>
				<h1 className={styles.title}>каталог взуття</h1>
				<div className='hidden-tablet'>
					<SortDropdown />
				</div>
			</div>
		</div>
	);
}
