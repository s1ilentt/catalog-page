import type { Metadata } from 'next';
import { Montserrat, Golos_Text } from 'next/font/google';
import '@app/styles/globals.scss';
import clsx from 'clsx';
import { QueryProvider } from './providers';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700', '800'],
	display: 'swap',
	style: ['normal'],
	fallback: ['sans-serif'],
});

const golosText = Golos_Text({
	variable: '--font-golos-text',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700'],
	display: 'swap',
	style: ['normal'],
	fallback: ['sans-serif'],
});

export const metadata: Metadata = {
	title: 'WOH',
	description: 'Online store',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='uk'>
			<body className={clsx(montserrat.variable, golosText.variable)}>
				<QueryProvider>{children}</QueryProvider>
			</body>
		</html>
	);
}
