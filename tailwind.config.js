/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
			},
			boxShadow: {
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			},
		},
	},
	plugins: [],
};
