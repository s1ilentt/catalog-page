import clsx from 'clsx';
import styles from './BurgerButton.module.scss';

interface IBurgerButton {
	onClick: () => void;
	isMenuShow: boolean;
}

export function BurgerButton({ onClick, isMenuShow }: IBurgerButton) {
	return (
		<button
			type='button'
			onClick={onClick}
			className={clsx(
				styles.menuBurgerIcon,
				isMenuShow && styles.menuBurgerIconActive,
				'visible-tablet',
			)}
			aria-label={isMenuShow ? 'Закрити меню' : 'Відкрити меню'}
			aria-expanded={isMenuShow}
		>
			<span></span>
		</button>
	);
}
