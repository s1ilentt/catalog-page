import { Button } from '../button/Button';
import styles from './ErrorState.module.scss';

interface Props {
	title?: string;
	description?: string;
	onRetry?: () => void;
}

export function ErrorState({
	title = 'Сталася помилка',
	description = 'Спробуйте ще раз пізніше',
	onRetry,
}: Props) {
	return (
		<div className={styles.wrapper}>
			<p className='error-message'>{title}</p>
			<p className={styles.description}>{description}</p>
			{onRetry && (
				<Button
					isBlackButton
					onClick={onRetry}
				>
					Повторити
				</Button>
			)}
		</div>
	);
}
