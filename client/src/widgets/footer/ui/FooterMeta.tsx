import { ROUTES } from '@/shared/config';
import styles from './FooterMeta.module.scss';
import clsx from 'clsx';

export function FooterMeta() {
	return (
		<div className={clsx('container', styles.wrapper)}>
			<a
				className={styles.copyright}
				href={ROUTES.HOME}
				aria-label='ВСІ ПРАВА ЗАХИЩЕНІ'
			>
				© 2026 World of heels. ВСІ ПРАВА ЗАХИЩЕНІ
			</a>
			<div className={styles.legal}>
				<a
					href={ROUTES.HOME}
					aria-label='Публічна оферта'
				>
					Публічна оферта
				</a>
				<a
					href={ROUTES.HOME}
					aria-label='Політика конфіденційності'
				>
					Політика конфіденційності
				</a>
				<span>Розробка та підтримка сайту: KeyKey</span>
			</div>
		</div>
	);
}
