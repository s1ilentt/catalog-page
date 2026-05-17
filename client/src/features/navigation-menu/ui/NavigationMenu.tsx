import { ROUTES } from '@/shared/config';
import { NavItem } from './NavItem';
import styles from './NavigationMenu.module.scss';
import clsx from 'clsx';

interface INavigationMenu {
	className?: string;
	isMobileMenu?: boolean;
	onItemClick?: () => void;
}

export function NavigationMenu({
	className,
	isMobileMenu = false,
	onItemClick,
}: INavigationMenu) {
	return (
		<nav className={clsx(!isMobileMenu && 'hidden-tablet')}>
			<ul className={clsx(className, styles['menu-list'])}>
				<li>
					<NavItem
						href={ROUTES.CATALOG}
						onClick={onItemClick}
					>
						Каталог
					</NavItem>
				</li>
				<li>
					<NavItem
						href={ROUTES.HOME}
						onClick={onItemClick}
					>
						колекції
					</NavItem>
				</li>
				<li>
					<NavItem
						href={ROUTES.HOME}
						onClick={onItemClick}
					>
						знижки
					</NavItem>
				</li>
				<li>
					<NavItem
						href={ROUTES.HOME}
						onClick={onItemClick}
					>
						Про нас
					</NavItem>
				</li>
				<li>
					<NavItem
						href={ROUTES.HOME}
						onClick={onItemClick}
					>
						співпраця
					</NavItem>
				</li>
			</ul>
		</nav>
	);
}
