import { Logo } from '@/shared/ui';
import styles from './FooterSocial.module.scss';
import { SocialLinks } from './SocialLinks';

export function FooterSocial() {
	return (
		<div className={styles.wrapper}>
			<Logo />
			<p className={styles.text}>
				WOH — це синергія високих технологій та професійної майстерності. Ми
				перетворюємо складну конструкцію на легкість вашого танцю
			</p>
			<SocialLinks />
		</div>
	);
}
