'use client';

import { useUrlFilter } from '../lib/useUrlFilter';
import styles from './CheckboxFilter.module.scss';

interface IFilterValue {
	value: string | number;
	label: string;
	count: number;
	hex?: string;
}

export interface ICheckboxFilter {
	name: string;
	values: IFilterValue[];
}

export function CheckboxFilter({ name, values }: ICheckboxFilter) {
	const { getValues, toggleValue } = useUrlFilter();
	const selected = getValues(name);

	return (
		<ul className={styles.list}>
			{values.map(item => {
				const value = String(item.value);
				const checked = selected.includes(value);

				return (
					<li
						key={value}
						className={styles.item}
					>
						<label className={styles.label}>
							<input
								type='checkbox'
								checked={checked}
								onChange={() => toggleValue(name, value)}
								className={styles.checkbox}
							/>
							{item.hex && (
								<span
									className={styles.color}
									style={{ backgroundColor: item.hex }}
									aria-hidden='true'
								/>
							)}
							<span className={styles.text}>
								{`${item.label} (${item.count})`}
							</span>
						</label>
					</li>
				);
			})}
		</ul>
	);
}
