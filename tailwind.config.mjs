module.exports = {
	content: [
	  "./src/**/*.{html,js,astro}", // Adjust to your file paths
	],
	theme: {
	  extend: {
		keyframes: {
		  typing: {
			'from': { width: '0%' },
			'to': { width: '100%' },
		  },
		  blink: {
			'50%': { borderColor: 'transparent' },
		  },
		},
		animation: {
		  typing1: 'typing 3s steps(30, end), blink 0.6s step-end infinite',
		  typing2: 'typing 3s steps(30, end) 3s, blink 0.6s step-end infinite',
		},
	  },
	},
	plugins: [],
  };