import clsx from 'clsx';
import styles from './Loader.module.scss';

interface ILoader {
	className?: string;
	size?: number;
}

export function Loader({ size = 30, className }: ILoader) {
	return (
		<div className={styles['loader-wrapper']}>
			<div
				style={{ width: size, height: size }}
				className={clsx(className, styles.loader)}
			/>
		</div>
	);
}
