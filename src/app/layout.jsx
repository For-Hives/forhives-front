import { Source_Sans_3 } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'
import Script from 'next/script'

const sourceSans3 = Source_Sans_3({
	variable: '--font-source-sans',
	subsets: ['latin'],
	display: 'swap',
})

const jost = localFont({
	src: '../fonts/Jost.var.woff2',
	variable: '--font-jost',
	weight: '200 900',
	display: 'swap',
})

export const metadata = {
	openGraph: {
		images: [
			{
				url: 'https://forhives.com/og-image.svg',
				alt: 'ForHives Logo',
				width: 1200,
				height: 630,
			},
		],
		description:
			'A collaborative community to transform your ideas into concrete projects',
		title: 'ForHives - Bring Your Projects to Life',
		url: 'https://forhives.com',
		type: 'website',
	},
	description:
		"Join ForHives, the community where every hive is a project, every idea is a bee, and passion is the queen that governs them. Let's work together to bring your projects to life and change the world!",
	keywords: [
		'ForHives',
		'collaborative projects',
		'innovation',
		'community',
		'project development',
	],
	title: 'ForHives - Collaborative Project Community',
}

export default function RootLayout({ children }) {
	return (
		<html
			className={clsx(
				'h-full antialiased',
				sourceSans3.variable,
				jost.variable
			)}
			lang="fr"
			suppressHydrationWarning
		>
			<Script
				async
				src="https://umami.wadefade.fr/script.js"
				strategy={'afterInteractive'}
				data-website-id="94a58ce1-c90b-4492-ae25-d3e894084c44"
			/>
			<body className="flex min-h-full flex-col bg-white dark:bg-gray-950">
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
