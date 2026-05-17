import { Search as SearchIcon } from 'lucide-react';
import { User as ProfileIcon } from 'lucide-react';
import { Heart as WishListIcon } from 'lucide-react';
import { Handbag as BasketIcon } from 'lucide-react';
import styles from './UserActions.module.scss';
import Link from 'next/link';
import { ROUTES } from '@/shared/config';
import clsx from 'clsx';
import { BurgerButton } from '@/shared/ui';

interface IUserActions {
	isMobileMenuOpen: boolean;
	onToggleMenu: () => void;
}

export function UserActions({ isMobileMenuOpen, onToggleMenu }: IUserActions) {
	return (
		<div className={styles['user-actions-wrapper']}>
			<div className={styles['user-actions']}>
				<button
					type='button'
					aria-label='Пошук'
				>
					<SearchIcon
						width={24}
						height={24}
						aria-hidden={true}
					/>
				</button>
				<Link
					className='hidden-mobile'
					href={ROUTES.HOME}
					aria-label='Профіль'
				>
					<ProfileIcon
						width={24}
						height={24}
						aria-hidden={true}
					/>
				</Link>
				<Link
					className='hidden-mobile'
					href={ROUTES.HOME}
					aria-label='Обране'
				>
					<WishListIcon
						width={24}
						height={24}
						aria-hidden={true}
					/>
				</Link>
				<Link
					href={ROUTES.HOME}
					aria-label='Кошик'
				>
					<BasketIcon
						width={24}
						height={24}
						aria-hidden={true}
					/>
				</Link>
				<BurgerButton
					isMenuShow={isMobileMenuOpen}
					onClick={onToggleMenu}
				/>
			</div>
			<div className={clsx(styles.divider, 'hidden-tablet')} />
			<button
				className={clsx(styles['switch-language'], 'hidden-tablet')}
				type='button'
			>
				ua
			</button>
		</div>
	);
}
