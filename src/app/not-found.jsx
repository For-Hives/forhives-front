import { StarField } from '@/components/StarField'
import { IconLink } from '@/components/IconLink'

export default function NotFound() {
	return (
		<div className="relative isolate flex flex-auto flex-col items-center justify-center overflow-hidden bg-[#0B0F0F] text-center">
			<svg
				aria-hidden="true"
				className="absolute left-1/2 top-[-10vh] -z-10 h-[120vh] w-[120vw] min-w-[60rem] -translate-x-1/2"
			>
				<defs>
					<radialGradient cy="0%" id="gradient">
						<stop offset="0%" stopColor="rgba(124, 166, 168, 0.2)" />
						<stop offset="53.95%" stopColor="rgba(60, 78, 80, 0.6)" />
						<stop offset="100%" stopColor="rgba(44, 62, 64, 0)" />
					</radialGradient>
				</defs>
				<rect fill="url(#gradient)" height="100%" width="100%" />
			</svg>
			<StarField className="sm:-mt-16" />

			<p className="font-display text-4xl/tight font-light text-white">404</p>
			<h1 className="mt-4 font-display text-xl/8 font-semibold text-white">
				Page not found
			</h1>
			<p className="mt-2 text-sm/6 text-gray-300">
				Sorry, we couldn’t find the page you’re looking for.
			</p>
			<IconLink className="mt-4" href="/">
				Go back home
			</IconLink>
		</div>
	)
}
