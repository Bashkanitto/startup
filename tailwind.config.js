/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#F0501E',
				},
				secondary: {
					DEFAULT: '#00000066',
				},
			},
		},
	},
	plugins: [],
}
