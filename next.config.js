/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: '**.andy-cinquin.fr',
				protocol: 'https',
			},
			{
				hostname: '**.forhives.fr',
				protocol: 'https',
			},
		],
	},
	reactStrictMode: true,
}

module.exports = nextConfig