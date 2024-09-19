/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		  custom: '50px',
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		  'custom-border': '#d9f509',
		},
		padding: {
		  custom: '13px 2px',
		},
		fontSize: {
		  custom: '24px',
		},
		fontWeight: {
		  custom: '600',
		},
		letterSpacing: {
		  custom: '1px',
		},
		boxShadow: {
		  'custom-hover': '0 0 10px 0 #d9f509',
		},
	  },
	},
	plugins: [
	  require("tailwindcss-animate"),
	  function({ addComponents }) {
		addComponents({
		  '.btn-custom': {
			backgroundColor: '#ffffff1c',
			border: '5px solid #767676',
			borderRadius: '50px',
			width: 'fit-content',
			color: '#fff',
			padding: '10px 50px',
			fontSize: '24px',
			fontWeight: '600',
			letterSpacing: '1px',
			transition: 'box-shadow 0.3s ease-in-out',
		  },
		//   '.btn-custom:hover': {
		// 	boxShadow: '0 0 10px 0 #d9f509',
		//   },
		  '.shadow-custom:hover': {
			boxShadow: '0 0 10px 0 #d9f509',
		  },
		});
	  },
	],
  }
  