const { addDynamicIconSelectors } = require('@iconify/tailwind');

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
					300: '#EFF0F6',
					500: '#a0a3bd',
					600: '#6E7191',
				}
			},
			fontFamily: {
        Inter: "Inter",
      },
		},
	},
	plugins: [
		addDynamicIconSelectors()
	],
}
