import { colors } from './src/constants/colors.ts'

const config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    './components/**/*.{js,jsx,ts,tsx,mdx}',
    './pages/**/*.{js,jsx,ts,tsx,mdx}',
    './*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sans: ['Gramercy', 'serif'],
        serif: ['Gramercy', 'serif'],
        display: ['Inter', 'sans-serif'],
        mono: ['monospace'],
      },
    },
  },
}
export default config
