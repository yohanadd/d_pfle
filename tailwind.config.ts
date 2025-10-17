import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				'soft-green': 'hsl(var(--soft-green))',
				'warm-white': 'hsl(var(--warm-white))',
				'soft-lavender': 'hsl(var(--soft-lavender))',
				'light-sage': 'hsl(var(--light-sage))',
				'sunrise-peach': 'hsl(var(--sunrise-peach))',
				'steel-gray': 'hsl(var(--steel-gray))',
				'coral-red': 'hsl(var(--coral-red))',
				'sky-gray': 'hsl(var(--sky-gray))',
				'deep-navy': 'hsl(var(--deep-navy))',
				'compassionate-green': 'hsl(var(--compassionate-green))',
				'trust-green': 'hsl(var(--trust-green))',
				'accent-orange': 'hsl(var(--accent-orange))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(30px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"scale-in": {
					"0%": {
						opacity: "0",
						transform: "scale(0.9)",
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)",
					},
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0px)",
					},
					"50%": {
						transform: "translateY(-10px)",
					},
				},
				"pulse-soft": {
					"0%, 100%": {
						opacity: "1",
					},
					"50%": {
						opacity: "0.7",
					},
				},
				"slide-in-left": {
					"0%": {
						opacity: "0",
						transform: "translateX(-50px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"slide-in-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(50px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"bounce-in": {
					"0%": {
						opacity: "0",
						transform: "scale(0.3)",
					},
					"50%": {
						opacity: "1",
						transform: "scale(1.05)",
					},
					"70%": {
						transform: "scale(0.9)",
					},
					"100%": {
						opacity: "1",
						transform: "scale(1)",
					},
				},
				"gradient-shift": {
					"0%, 100%": {
						"background-position": "0% 50%",
					},
					"50%": {
						"background-position": "100% 50%",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in-up": "fade-in-up 0.6s ease-out",
				"scale-in": "scale-in 0.5s ease-out",
				"float": "float 3s ease-in-out infinite",
				"pulse-soft": "pulse-soft 2s ease-in-out infinite",
				"slide-in-left": "slide-in-left 0.6s ease-out",
				"slide-in-right": "slide-in-right 0.6s ease-out",
				"bounce-in": "bounce-in 0.8s ease-out",
				"gradient-shift": "gradient-shift 3s ease-in-out infinite",
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'card': 'var(--shadow-card)',
				'hero': 'var(--shadow-hero)',
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-warm': 'var(--gradient-warm)',
				'gradient-trust': 'var(--gradient-trust)',
				'gradient-compassion': 'var(--gradient-compassion)',
				'gradient-accent': 'var(--gradient-accent)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config
