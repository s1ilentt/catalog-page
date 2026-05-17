'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';
import { NavigationMenu } from '@/features/navigation-menu';
import styles from './MobileMenu.module.scss';

interface IMobileMenu {
	isOpen: boolean;
	onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: IMobileMenu) {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		const handleResize = () => {
			if (window.innerWidth > 1023) onClose();
		};

		document.addEventListener('keydown', handleKeyDown);
		window.addEventListener('resize', handleResize);
		document.body.style.overflow = 'hidden';

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('resize', handleResize);
			document.body.style.overflow = '';
		};
	}, [isOpen, onClose]);

	if (!mounted) return null;

	return createPortal(
		<div
			className={clsx(styles.menu, isOpen && styles.menuOpen, 'visible-tablet')}
			onClick={onClose}
		>
			<div
				className={styles.menuBody}
				onClick={e => e.stopPropagation()}
			>
				<NavigationMenu
					className={styles.mobileMenuList}
					isMobileMenu
					onItemClick={onClose}
				/>
			</div>
		</div>,
		document.body,
	);
}
