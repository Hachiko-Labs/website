/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					active: '#3027d9',
					DEFAULT: '#4a3aff',
				},
				secondary: {
					color3: '#7d42fb',
				},
				neutral: {
					DEFAULT: '#211f54',
					500: '#a0a3bd',
				}
			},
			fontFamily: {
        Inter: "Inter",
      },
		},
	},
	plugins: [],
}
