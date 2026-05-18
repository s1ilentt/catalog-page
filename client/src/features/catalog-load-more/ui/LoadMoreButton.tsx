'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/shared/ui';

interface ILoadMoreButton {
	currentLimit: number;
	step?: number;
}

export function LoadMoreButton({ currentLimit, step = 24 }: ILoadMoreButton) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleClick = () => {
		const params = new URLSearchParams(searchParams.toString());
		params.set('limit', String(currentLimit + step));
		router.push(`?${params.toString()}`);
	};

	return (
		<Button
			isBlackButton
			onClick={handleClick}
		>
			Показати ще 24 товари
		</Button>
	);
}
