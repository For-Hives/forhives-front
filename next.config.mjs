import nextMDX from '@next/mdx'

import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'

const withMDX = nextMDX({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins,
		rehypePlugins,
		recmaPlugins,
	},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
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
}

export default withMDX(nextConfig)
