import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		qualities: [75, 80],
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '8000',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
