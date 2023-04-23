import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="fr">
			<Head title={'ForHives'}>
				<meta
					name="description"
					content="Rejoignez ForHives, La communauté où chaque ruche est un projet, chaque idée est une abeille,
					et la passion est la reine qui les gouverne. Travaillons ensemble pour donner vie à vos projets et changer le monde !"
				/>
				{/*	ico */}
				<link rel="icon" href="/ForHives.webp" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
