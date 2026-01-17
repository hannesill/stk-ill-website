import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				// Primary brand color - Refined Orange
				primary: {
					DEFAULT: '#E85A1B',
					50: '#FFF8F5',
					100: '#FFEDE5',
					200: '#FFD4C2',
					300: '#FFB899',
					400: '#FF8F5C',
					500: '#E85A1B',
					600: '#D14A10',
					700: '#B03D0B',
					800: '#8C3209',
					900: '#6B2808',
					950: '#431805',
				},
				// Deep slate for trust & sophistication
				slate: {
					DEFAULT: '#1E293B',
					50: '#F8FAFC',
					100: '#F1F5F9',
					200: '#E2E8F0',
					300: '#CBD5E1',
					400: '#94A3B8',
					500: '#64748B',
					600: '#475569',
					700: '#334155',
					800: '#1E293B',
					900: '#0F172A',
					950: '#020617',
				},
				// Warm, sophisticated neutrals
				cream: {
					50: '#FEFDFB',
					100: '#FDFBF7',
					200: '#FAF7F0',
					300: '#F5F0E6',
				},
				// Accent - Deep navy for trust
				navy: {
					DEFAULT: '#1a365d',
					50: '#f0f4f8',
					100: '#d9e2ec',
					200: '#bcccdc',
					300: '#9fb3c8',
					400: '#829ab1',
					500: '#627d98',
					600: '#486581',
					700: '#334e68',
					800: '#243b53',
					900: '#1a365d',
					950: '#102a43',
				},
			},
			fontFamily: {
				display: ['Instrument Serif', 'Georgia', 'serif'],
				body: ['Satoshi', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				// Display sizes - Bold, confident headlines
				'display-2xl': ['5.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '400' }],
				'display-xl': ['4rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '400' }],
				'display-lg': ['3rem', { lineHeight: '1.12', letterSpacing: '-0.02em', fontWeight: '400' }],
				'display-md': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '400' }],
				'display-sm': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '400' }],
				// Body sizes
				'body-xl': ['1.25rem', { lineHeight: '1.7', fontWeight: '400' }],
				'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
				'body-md': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
				'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
				// Label sizes
				'label-lg': ['0.875rem', { lineHeight: '1.4', letterSpacing: '0.05em', fontWeight: '600' }],
				'label-md': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.06em', fontWeight: '600' }],
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'26': '6.5rem',
				'30': '7.5rem',
				'34': '8.5rem',
			},
			animation: {
				'fade-up': 'fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'fade-in': 'fadeIn 0.7s ease-out forwards',
				'fade-in-slow': 'fadeIn 1.2s ease-out forwards',
				'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'slide-down': 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'scale-in': 'scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'blur-in': 'blurIn 0.8s ease-out forwards',
				'float': 'float 8s ease-in-out infinite',
				'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
				'shimmer': 'shimmer 2.5s ease-in-out infinite',
				'gradient-shift': 'gradientShift 12s ease infinite',
				'line-grow': 'lineGrow 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'counter': 'counter 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
			},
			keyframes: {
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(60px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideDown: {
					'0%': { opacity: '0', transform: 'translateY(-30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				scaleIn: {
					'0%': { opacity: '0', transform: 'scale(0.92)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				blurIn: {
					'0%': { opacity: '0', filter: 'blur(10px)' },
					'100%': { opacity: '1', filter: 'blur(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-15px) rotate(2deg)' },
				},
				pulseSoft: {
					'0%, 100%': { opacity: '1', transform: 'scale(1)' },
					'50%': { opacity: '0.85', transform: 'scale(1.02)' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
				gradientShift: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				lineGrow: {
					'0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
					'100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
				},
				counter: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			boxShadow: {
				// Soft, elegant shadows
				'soft-xs': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
				'soft-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.06)',
				'soft': '0 4px 20px -4px rgba(0, 0, 0, 0.08)',
				'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.12)',
				'soft-xl': '0 20px 60px -15px rgba(0, 0, 0, 0.15)',
				// Glow effects
				'glow-orange': '0 0 50px -12px rgba(232, 90, 27, 0.35)',
				'glow-orange-lg': '0 0 80px -15px rgba(232, 90, 27, 0.4)',
				// Inner shadows for depth
				'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)',
				'inner-deep': 'inset 0 -20px 40px -20px rgba(0, 0, 0, 0.05)',
				// Card shadows
				'card': '0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06)',
				'card-hover': '0 4px 12px rgba(0, 0, 0, 0.06), 0 16px 40px rgba(0, 0, 0, 0.1)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%)',
				// Noise texture
				'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
				// Subtle dot pattern
				'dots': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='1' cy='1' r='1' fill='%23000' fill-opacity='0.05'/%3E%3C/svg%3E\")",
			},
			borderRadius: {
				'4xl': '2rem',
				'5xl': '2.5rem',
			},
			transitionTimingFunction: {
				'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
				'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
				'bounce-soft': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
			},
			transitionDuration: {
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
				'900': '900ms',
			},
			backdropBlur: {
				'xs': '2px',
				'3xl': '64px',
			},
		},
	},

	plugins: []
} satisfies Config;
