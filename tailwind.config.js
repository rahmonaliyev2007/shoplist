/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			boxShadow: {
        'dark': '0 2px 8px rgba(255, 255, 255, 0.05)' 
      },
		},
	},
	plugins: [],
}
