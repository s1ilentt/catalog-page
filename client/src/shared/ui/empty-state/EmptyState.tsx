interface Props {
	title?: string;
}

export function EmptyState({ title = 'Нічого не знайдено' }: Props) {
	return (
		<div>
			<p className='error-message'>{title}</p>
		</div>
	);
}
