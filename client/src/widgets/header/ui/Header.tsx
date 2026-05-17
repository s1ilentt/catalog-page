'use client';

import { Logo } from '@/shared/ui';
import styles from './Header.module.scss';
import { NavigationMenu } from '@/features/navigation-menu';
import clsx from 'clsx';
import { UserActions } from '@/features/user-actions';
import { useCallback, useState } from 'react';
import { MobileMenu } from './MobileMenu';

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);
	const closeMenu = useCallback(() => setIsMobileMenuOpen(false), []);

	return (
		<header className={styles.header}>
			<div className={clsx(styles['header-wrapper'], 'container')}>
				<Logo priority />
				<NavigationMenu />
				<UserActions
					isMobileMenuOpen={isMobileMenuOpen}
					onToggleMenu={toggleMenu}
				/>
			</div>
			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={closeMenu}
			/>
		</header>
	);
}
