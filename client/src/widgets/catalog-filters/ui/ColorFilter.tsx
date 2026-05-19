'use client';

import clsx from 'clsx';
import { useUrlFilter } from '../lib/useUrlFilter';
import { ICheckboxFilter } from './CheckboxFilter';
import styles from './ColorFilter.module.scss';

export function ColorFilter({ name, values }: ICheckboxFilter) {
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
							aria-label={`Колір ${item.label}${isDisabled ? ', недоступно' : ''}`}
							className={clsx(
								styles.button,
								isDisabled && styles['button--disabled'],
							)}
						>
							<span
								className={clsx(
									styles.color,
									checked && styles['color--active'],
								)}
								style={{ backgroundColor: item.hex }}
								aria-hidden='true'
							/>
							<span className={styles.label}>{item.label}</span>
						</button>
					</li>
				);
			})}
		</ul>
	);
}
