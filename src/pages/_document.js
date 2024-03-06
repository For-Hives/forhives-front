import {Html, Head, Main, NextScript} from 'next/document'

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
                <link rel="icon" href="/ForHives.webp"/>
                <Script
                    async
                    strategy={'afterInteractive'}
                    src="https://umami.wadefade.fr/script.js"
                    data-website-id="94a58ce1-c90b-4492-ae25-d3e894084c44"
                ></Script>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
