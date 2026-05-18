import { Logo } from '@/shared/ui';
import styles from './FooterSocial.module.scss';

export function FooterSocial() {
	return (
		<div>
			<Logo />
			<p className={styles.text}>
				WOH — це синергія високих технологій та професійної майстерності. Ми
				перетворюємо складну конструкцію на легкість вашого танцю
			</p>
		</div>
	);
}
