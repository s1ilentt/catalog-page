'use client';

import clsx from 'clsx';
import { Button } from '@/shared/ui';
import { useSortDropdown } from '../lib/useSortDropdown';
import styles from './SortDropdown.module.scss';

export function SortDropdown() {
	const { ref, isOpen, currentValue, currentLabel, options, toggle, select } =
		useSortDropdown();

	return (
		<div
			className={styles.wrapper}
			ref={ref}
		>
			<Button onClick={toggle}>
				Сортування: {currentLabel}
				<span className={clsx(styles.arrow)}>▾</span>
			</Button>

			{isOpen && (
				<ul className={styles.list}>
					{options.map(option => (
						<li
							key={option.value}
							className={clsx(
								styles.option,
								currentValue === option.value && styles['option--active'],
							)}
							onClick={() => select(option.value)}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
