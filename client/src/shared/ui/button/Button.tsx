import clsx from 'clsx';
import styles from './Button.module.scss';

interface IButton {
	isBlackButton?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
}

export function Button({ isBlackButton = false, children, onClick }: IButton) {
	return (
		<button
			type='button'
			className={clsx(styles.button, isBlackButton && styles['button--black'])}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
