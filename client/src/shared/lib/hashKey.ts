import type { QueryKey } from '@tanstack/react-query';

export function hashKey(queryKey: QueryKey): string {
	return JSON.stringify(queryKey, (_, value) => {
		if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
			// Сортируем ключи объекта алфавитно
			return Object.keys(value)
				.sort()
				.reduce<Record<string, unknown>>((acc, key) => {
					acc[key] = (value as Record<string, unknown>)[key];
					return acc;
				}, {});
		}
		return value;
	});
}
