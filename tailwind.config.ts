// import GenerateNameClassSafelist from '@/utils/generateClassSafelist'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'text-blue-800',
    'bg-blue-100',
    'border-blue-100',
    'text-red-800',
    'bg-red-100',
    'border-red-100',
    'text-green-800',
    'bg-green-100',
    'border-green-100',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/aspect-ratio'),
  ],
}
export default config
