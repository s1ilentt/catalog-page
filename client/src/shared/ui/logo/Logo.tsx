import Image from 'next/image';
import logoSrc from '@/shared/assets/images/logo.svg';
import Link from 'next/link';
import { ROUTES } from '@/shared/config';

interface ILogo {
	priority?: boolean;
}

export function Logo({ priority = false }: ILogo) {
	return (
		<Link
			href={ROUTES.HOME}
			aria-label='Головна'
		>
			<Image
				src={logoSrc}
				alt='WOH'
				width={134}
				height={52}
				priority={priority}
			/>
		</Link>
	);
}
