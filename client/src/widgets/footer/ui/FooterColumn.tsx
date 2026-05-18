import Link from 'next/link';

interface IFooterColumn {
	title: string;
	links: { label: string; href: string }[];
}

export function FooterColumn({ title, links }: IFooterColumn) {
	return (
		<div>
			<h3>{title}</h3>
			<ul>
				{links.map(link => (
					<li key={link.href}>
						<Link
							href={link.href}
							aria-label={link.label}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
