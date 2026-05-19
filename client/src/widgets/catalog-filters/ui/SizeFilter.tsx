'use client';

import clsx from 'clsx';
import { useUrlFilter } from '../lib/useUrlFilter';
import { ICheckboxFilter } from './CheckboxFilter';
import styles from './SizeFilter.module.scss';

export function SizeFilter({ name, values }: ICheckboxFilter) {
	const { getValues, toggleValue } = useUrlFilter();
	const selected = getValues(name);

	return (
		<ul className={styles.list}>
			{values.map(item => {
				const value = String(item.value);
				const checked = selected.includes(value);
				const isDisabled = item.count === 0;

				return (
					<li
						key={value}
						className={styles.item}
					>
						<button
							type='button'
							onClick={() => toggleValue(name, value)}
							disabled={isDisabled}
							aria-pressed={checked}
							aria-label={`Розмір ${item.label}${isDisabled ? ', недоступно' : ''}`}
							className={clsx(
								styles.button,
								checked && styles['button--active'],
								isDisabled && styles['button--disabled'],
							)}
						>
							{item.label}
						</button>
					</li>
				);
			})}
		</ul>
	);
}
