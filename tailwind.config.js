/** @type {import('tailwindcss').Config} */
/**
 * CommonJS config so Next.js / PostCSS always loads brand colors.
 * Keep hex values in sync with `constants/theme.ts`.
 */
const colors = {
  bgDark: '#070909',
  gold: '#C5A073',
  goldHover: '#B08D60',
  goldSoft: '#F1CC83',
  goldBright: '#E3AD4E',
  champagne: '#A37C44',
  btnSecondary: '#1F2222',
  btnSecondaryHover: '#282B2B',
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f5f3ee',
        surface: '#fffefb',
        soft: '#ece9e2',
        ink: '#191918',
        muted: '#77736b',
        line: '#ddd9d0',
        page: {
          dark: colors.bgDark,
        },
        gold: {
          DEFAULT: colors.gold,
          soft: colors.goldSoft,
          hover: colors.goldHover,
          bright: colors.goldBright,
        },
        champagne: {
          DEFAULT: colors.champagne,
        },
        btn: {
          secondary: colors.btnSecondary,
          'secondary-hover': colors.btnSecondaryHover,
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 50px -34px rgb(25 25 24 / 30%)',
        'card-hover': '0 30px 70px -36px rgb(25 25 24 / 42%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
