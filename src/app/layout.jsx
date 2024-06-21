import { Source_Sans_3 } from 'next/font/google'
import localFont from 'next/font/local'
import clsx from 'clsx'

import { Providers } from '@/app/providers'

import '@/styles/tailwind.css'

const sourceSans3 = Source_Sans_3({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-source-sans',
})

const jost = localFont({
	src: '../fonts/Jost.var.woff2',
	display: 'swap',
	variable: '--font-jost',
	weight: '200 900',
})

export const metadata = {
	title: 'ForHives - Collaborative Project Community',
	description:
		"Join ForHives, the community where every hive is a project, every idea is a bee, and passion is the queen that governs them. Let's work together to bring your projects to life and change the world!",
	openGraph: {
		title: 'ForHives - Bring Your Projects to Life',
		description:
			'A collaborative community to transform your ideas into concrete projects',
		type: 'website',
		url: 'https://forhives.com',
		images: [
			{
				url: 'https://forhives.com/og-image.svg',
				width: 1200,
				height: 630,
				alt: 'ForHives Logo',
			},
		],
	},
	keywords: [
		'ForHives',
		'collaborative projects',
		'innovation',
		'community',
		'project development',
	],
}

export default function RootLayout({ children }) {
	return (
		<html
			lang="fr"
			className={clsx(
				'h-full antialiased',
				sourceSans3.variable,
				jost.variable
			)}
			suppressHydrationWarning
		>
			<body className="flex min-h-full flex-col bg-white dark:bg-gray-950">
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
