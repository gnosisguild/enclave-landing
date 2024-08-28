import { colors } from './src/constants/colors.ts'

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sans: ['Barlow', 'sans'],
        serif: ['serif'],
        display: ['sans'],
        mono: ['monospace'],
      },
    },
  },
}
export default config
