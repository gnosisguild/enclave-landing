import { colors } from './src/constants/colors.ts'

const config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Gramercy', 'serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        footer: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
    },
  },
}

export default config
