'use client';

import { hashKey } from '@/shared/lib';
import {
	QueryCache,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			queryKeyHashFn: hashKey,
			refetchOnWindowFocus: false,
		},
	},
	queryCache: new QueryCache({
		onError: (error, query) => {
			console.error('[Query Error]', error, 'queryKey:', query.queryKey);
		},
	}),
});

export function QueryProvider({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
