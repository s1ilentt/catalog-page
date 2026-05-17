import clsx from 'clsx';
import styles from './Button.module.scss';

interface IButton {
	isBlackButton?: boolean;
	children: React.ReactNode;
}

export function Button({ isBlackButton = false, children }: IButton) {
	return (
		<button
			type='button'
			className={clsx(styles.button, isBlackButton && styles['button--black'])}
		>
			{children}
		</button>
	);
}
