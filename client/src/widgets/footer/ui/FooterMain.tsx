import clsx from 'clsx';
import { FOOTER_COLUMNS } from '../model/footerLinks';
import { FooterAbout } from './FooterAbout';
import { FooterColumn } from './FooterColumn';
import styles from './FooterMain.module.scss';
import { FooterSocial } from './FooterSocial';

export function FooterMain() {
	return (
		<div className={clsx(styles['footer-content'], 'container')}>
			<FooterSocial />
			{FOOTER_COLUMNS.map(column => (
				<FooterColumn
					key={column.title}
					{...column}
				/>
			))}
			<FooterAbout />
		</div>
	);
}
