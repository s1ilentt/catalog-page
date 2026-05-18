import Image from 'next/image';
import styles from './SocialLinks.module.scss';
import instagramIcon from '@/shared/assets/icons/instagram-icon.svg';
import tiktokIcon from '@/shared/assets/icons/tiktok-icon.svg';
import facebookIcon from '@/shared/assets/icons/facebook-icon.svg';
import telegramIcon from '@/shared/assets/icons/telegram-icon.svg';

const socials = [
	{
		href: 'https://www.instagram.com/',
		icon: instagramIcon,
		label: 'Instagram',
	},
	{ href: 'https://www.facebook.com/', icon: facebookIcon, label: 'Facebook' },
	{ href: 'https://t.me/', icon: telegramIcon, label: 'Telegram' },
	{ href: 'https://www.tiktok.com/', icon: tiktokIcon, label: 'TikTok' },
];

export function SocialLinks() {
	return (
		<div className={styles.wrapper}>
			{socials.map(({ href, icon, label }) => (
				<a
					key={label}
					href={href}
					target='_blank'
					rel='noopener noreferrer'
					aria-label={label}
				>
					<Image
						src={icon}
						alt={label}
						height={26}
						width={26}
					/>
				</a>
			))}
		</div>
	);
}
