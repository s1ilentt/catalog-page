'use client';

import { ErrorState } from '@/shared/ui';

export default function CatalogPageError({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div className='container'>
			<ErrorState
				title='Щось пішло не так'
				description={error.message}
				onRetry={reset}
			/>
		</div>
	);
}
