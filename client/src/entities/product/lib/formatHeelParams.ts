export const formatHeelParams = (heelParams: string): string => {
	const match = heelParams.match(/\(([^)]+)\)/);
	if (!match) return heelParams;

	return `${match[1]} Line`;
};
