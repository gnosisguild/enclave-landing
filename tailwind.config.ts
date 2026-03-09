import { colors } from './src/constants/colors.ts'

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        display: ['Gramercy', 'serif'],   // headings
        sans: ['Inter', 'system-ui', 'sans-serif'], // body
        footer: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
    },
  },
}

export default config
