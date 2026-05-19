'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';
import { useDropdown } from '../lib/useDropdown';
import styles from './FilterDropdown.module.scss';
import { ChevronDown } from 'lucide-react';

interface IFilterDropdown {
	label: string;
	activeCount?: number;
	children: ReactNode;
}

export function FilterDropdown({
	label,
	activeCount,
	children,
}: IFilterDropdown) {
	const { ref, isOpen, toggle } = useDropdown();

	return (
		<div
			className={styles.wrapper}
			ref={ref}
		>
			<button
				type='button'
				className={clsx(styles.button)}
				onClick={toggle}
			>
				<span className={styles.label}>
					{label}
					{!!activeCount && <span className={styles.badge}>{activeCount}</span>}
				</span>
				<ChevronDown
					className={clsx(styles.arrow, isOpen && styles['arrow--open'])}
					width={16}
					height={16}
				/>
			</button>

			{isOpen && <div>{children}</div>}
		</div>
	);
}
