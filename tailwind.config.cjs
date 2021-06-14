module.exports = {
	mode: 'jit',
	// you dont need `purge: enabled: production` because you are using jit
	purge: [
		'./src/**/*.svelte',
		// may also want to include HTML files
		'./src/**/*.html'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-100': '#f1faee',
				'primary-300': '#a8dadc',
				'primary-500': '#457b9d',
				'primary-700': '#1d3557',
				secondary: '#e63946'
			}
		}
	},
	variants: {},
	plugins: []
};
