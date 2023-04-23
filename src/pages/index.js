import Image from 'next/image'
import { Head } from 'next/document'

export default function Home() {
	return (
		<>
			<main className={'relative h-screen w-screen'}>
				<Image
					src={'/ForHives.svg'}
					alt={'ForHives'}
					width={'250'}
					height={'250'}
					className={
						'fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'
					}
				/>
			</main>
		</>
	)
}
