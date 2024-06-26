/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./{src,mdx}/**/*.{js,mjs,jsx,ts,tsx,mdx}'],
	darkMode: 'selector',
	theme: {
		extend: {
			fontSize: {
				'2xs': '.6875rem',
			},
			fontFamily: {
				sans: 'var(--font-source-sans)',
				display: 'var(--font-jost)',
			},
			opacity: {
				2.5: '0.025',
				7.5: '0.075',
				15: '0.15',
			},
		},
	},
	plugins: [],
}
