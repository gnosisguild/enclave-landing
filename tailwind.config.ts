import { colors } from './src/constants/colors.ts'

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sans: ['sans'],
        serif: ['serif'],
        display: ['sans'],
        mono: ['monospace'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
