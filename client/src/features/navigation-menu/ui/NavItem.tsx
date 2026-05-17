import Link from 'next/link';
import styles from './NavItem.module.scss';

interface IMenuItem {
	href: string;
	onClick?: () => void;
	children: React.ReactNode;
}

export function NavItem({ href, children, onClick }: IMenuItem) {
	return (
		<Link
			className={styles['nav-link']}
			href={href}
			onClick={onClick}
		>
			{children}
		</Link>
	);
}
