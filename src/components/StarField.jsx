'use client'

import { useEffect, useId, useRef } from 'react'
import clsx from 'clsx'
import { animate, timeline } from 'motion'

const stars = [
	[4, 4, true, true],
	[4, 44, true],
	[36, 22],
	[50, 146, true, true],
	[64, 43, true, true],
	[76, 30, true],
	[101, 116],
	[140, 36, true],
	[149, 134],
	[162, 74, true],
	[171, 96, true, true],
	[210, 56, true, true],
	[235, 90],
	[275, 82, true, true],
	[306, 6],
	[307, 64, true, true],
	[380, 68, true],
	[380, 108, true, true],
	[391, 148, true, true],
	[405, 18, true],
	[412, 86, true, true],
	[426, 210, true, true],
	[427, 56, true, true],
	[538, 138],
	[563, 88, true, true],
	[611, 154, true, true],
	[637, 150],
	[651, 146, true],
	[682, 70, true, true],
	[683, 128],
	[781, 82, true, true],
	[785, 158, true],
	[832, 146, true, true],
	[852, 89],
]

const constellations = [
	[
		[247, 103],
		[261, 86],
		[307, 104],
		[357, 36],
	],
	[
		[586, 120],
		[516, 100],
		[491, 62],
		[440, 107],
		[477, 180],
		[516, 100],
	],
	[
		[733, 100],
		[803, 120],
		[879, 113],
		[823, 164],
		[803, 120],
	],
]

function Star({ point: [cx, cy, dim, blur], blurId }) {
	let groupRef = useRef(null)
	let ref = useRef(null)

	useEffect(() => {
		if (!groupRef.current || !ref.current) {
			return
		}

		let delay = Math.random() * 2

		let animations = [
			animate(groupRef.current, { opacity: 1 }, { duration: 4, delay }),
			animate(
				ref.current,
				{
					opacity: dim ? [0.2, 0.5] : [1, 0.6],
					scale: dim ? [1, 1.2] : [1.2, 1],
				},
				{
					duration: Math.random() * 2 + 2,
					direction: 'alternate',
					repeat: Infinity,
					delay,
				}
			),
		]

		return () => {
			for (let animation of animations) {
				animation.cancel()
			}
		}
	}, [dim])

	return (
		<g className="opacity-0" ref={groupRef}>
			<circle
				cx={cx}
				cy={cy}
				filter={blur ? `url(#${blurId})` : undefined}
				r={1}
				ref={ref}
				style={{
					transformOrigin: `${cx / 16}rem ${cy / 16}rem`,
					transform: `scale(${dim ? 1 : 1.2})`,
					opacity: dim ? 0.2 : 1,
				}}
			/>
		</g>
	)
}

function Constellation({ points, blurId }) {
	let ref = useRef(null)
	let uniquePoints = points.filter(
		(point, pointIndex) =>
			points.findIndex(p => String(p) === String(point)) === pointIndex
	)
	let isFilled = uniquePoints.length !== points.length

	useEffect(() => {
		if (!ref.current) {
			return
		}

		let sequence = [
			[
				ref.current,
				{ visibility: 'visible', strokeDashoffset: 0 },
				{ delay: Math.random() * 3 + 2, duration: 5 },
			],
		]

		if (isFilled) {
			sequence.push([
				ref.current,
				{ fill: 'rgb(255 255 255 / 0.02)' },
				{ duration: 1 },
			])
		}

		let animation = timeline(sequence)

		return () => {
			animation.cancel()
		}
	}, [isFilled])

	return (
		<>
			<path
				className="invisible"
				d={`M ${points.join('L')}`}
				fill="transparent"
				pathLength={1}
				ref={ref}
				stroke="white"
				strokeDasharray={1}
				strokeDashoffset={1}
				strokeOpacity="0.2"
			/>
			{uniquePoints.map((point, pointIndex) => (
				<Star blurId={blurId} key={pointIndex} point={point} />
			))}
		</>
	)
}

export function StarField({ className }) {
	let blurId = useId()

	return (
		<svg
			aria-hidden="true"
			className={clsx(
				'pointer-events-none absolute w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70',
				className
			)}
			fill="white"
			viewBox="0 0 881 211"
		>
			<defs>
				<filter id={blurId}>
					<feGaussianBlur in="SourceGraphic" stdDeviation=".5" />
				</filter>
			</defs>
			{constellations.map((points, constellationIndex) => (
				<Constellation
					blurId={blurId}
					key={constellationIndex}
					points={points}
				/>
			))}
			{stars.map((point, pointIndex) => (
				<Star blurId={blurId} key={pointIndex} point={point} />
			))}
		</svg>
	)
}
