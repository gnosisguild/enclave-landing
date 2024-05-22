import { colors } from './src/constants/colors'

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans'],
        serif: ['DM Serif Text', 'serif'],
        display: ['DM Serif Display', 'serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
