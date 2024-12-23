import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
			  primary: {
				DEFAULT: '#EE7300',
				light: '#FF8F1F',
				dark: '#D66600'
			  },
			  secondary: {
				DEFAULT: '#1957FF',
				light: '#3D71FF',
				dark: '#0040FF'
			  }
			}
		  },
	},

	plugins: []
} satisfies Config;
