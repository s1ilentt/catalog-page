import type { Metadata } from 'next';
import { Montserrat, Golos_Text } from 'next/font/google';
import '@app/styles/globals.scss';
import clsx from 'clsx';
import { QueryProvider } from './providers';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

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
				<Header />
				<QueryProvider>
					<main>{children}</main>
				</QueryProvider>
				<Footer />
			</body>
		</html>
	);
}
