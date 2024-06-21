import { useId } from 'react'

import { ThemeToggle } from '@/components/ThemeToggle'
import { StarField } from '@/components/StarField'
import { Intro } from '@/components/Intro'

function Timeline() {
	let id = useId()

	return (
		<div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
			<svg
				aria-hidden="true"
				className="absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0"
			>
				<defs>
					<pattern height="8" id={id} patternUnits="userSpaceOnUse" width="6">
						<path
							className="stroke-[#5C7E80]/40 xl:stroke-[#7CA6A8]/40 dark:stroke-[#7CA6A8]/40"
							d="M0 0H6M0 8H6"
							fill="none"
						/>
					</pattern>
				</defs>
				<rect fill={`url(#${id})`} height="100%" width="100%" />
			</svg>
		</div>
	)
}

function Glow() {
	let id = useId()

	return (
		<div className="absolute inset-0 -z-10 overflow-hidden bg-[#0B0F0F] lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
			<svg
				aria-hidden="true"
				className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
			>
				<defs>
					<radialGradient cx="100%" id={`${id}-desktop`}>
						<stop offset="0%" stopColor="rgba(124, 166, 168, 0.2)" />
						<stop offset="53.95%" stopColor="rgba(60, 78, 80, 0.6)" />
						<stop offset="100%" stopColor="rgba(44, 62, 64, 0)" />
					</radialGradient>
					<radialGradient cy="100%" id={`${id}-mobile`}>
						<stop offset="0%" stopColor="rgba(124, 166, 168, 0.2)" />
						<stop offset="53.95%" stopColor="rgba(60, 78, 80, 0.6)" />
						<stop offset="100%" stopColor="rgba(44, 62, 64, 0)" />
					</radialGradient>
				</defs>
				<rect
					className="hidden lg:block"
					fill={`url(#${id}-desktop)`}
					height="100%"
					width="100%"
				/>
				<rect
					className="lg:hidden"
					fill={`url(#${id}-mobile)`}
					height="100%"
					width="100%"
				/>
			</svg>
			<div className="absolute inset-x-0 bottom-0 right-0 h-px bg-[#7CA6A8] mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px" />
		</div>
	)
}

function FixedSidebar({ main }) {
	return (
		<div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
			<Glow />
			<div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
				<div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
					<div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
						<div className="relative">
							<StarField className="-right-44 top-14" />
							{main}
						</div>
					</div>
					<div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6"></div>
				</div>
			</div>
		</div>
	)
}

export function Layout({ children }) {
	return (
		<>
			<FixedSidebar main={<Intro />} />
			<ThemeToggle />
			<div className="relative flex-auto">
				<Timeline />
				<main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
					{children}
				</main>
			</div>
		</>
	)
}
