'use client';

import { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useUrlFilter } from '../lib/useUrlFilter';
import styles from './PriceFilter.module.scss';

interface IPriceFilter {
	min: number;
	max: number;
}

export function PriceFilter({ min, max }: IPriceFilter) {
	const { getValue, setRange } = useUrlFilter();

	const urlMin = Number(getValue('min_price')) || min;
	const urlMax = Number(getValue('max_price')) || max;

	const [range, setLocalRange] = useState<[number, number]>([urlMin, urlMax]);

	useEffect(() => {
		setLocalRange([urlMin, urlMax]);
	}, [urlMin, urlMax]);

	const apply = () => setRange('price', range[0], range[1], min, max);

	const reset = () => {
		setLocalRange([min, max]);
		setRange('price', min, max, min, max);
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.inputs}>
				<input
					type='number'
					min={min}
					max={range[1]}
					value={range[0]}
					onChange={e => setLocalRange([Number(e.target.value), range[1]])}
					className={styles.input}
				/>
				<span className={styles.separator}>—</span>
				<input
					type='number'
					min={range[0]}
					max={max}
					value={range[1]}
					onChange={e => setLocalRange([range[0], Number(e.target.value)])}
					className={styles.input}
				/>
			</div>

			<Slider
				range
				min={min}
				max={max}
				value={range}
				onChange={value => setLocalRange(value as [number, number])}
				className={styles.slider}
			/>

			<div className={styles.actions}>
				<button
					type='button'
					onClick={apply}
					className={styles.apply}
				>
					Застосувати
				</button>
				<button
					type='button'
					onClick={reset}
					className={styles.reset}
				>
					Скинути
				</button>
			</div>
		</div>
	);
}
