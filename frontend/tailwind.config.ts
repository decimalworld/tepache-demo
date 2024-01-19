import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
  safelist: [
    'bg-red-500',
    'text-red-500',
    'border-red-500',
    'bg-orange-100',
    'text-orange-100',
    'border-orange-100',
    'bg-fuchsia-500',
    'text-fuchsia-500',
    'border-fuchsia-500',
    'bg-emerald-500',
    'text-emerald-500',
    'border-emerald-500',
    'bg-yellow-400',
    'text-yellow-400',
    'border-yellow-400',
    'bg-sky-500',
    'text-sky-500',
    'border-sky-500',
    'bg-orange-500',
    'text-orange-500',
  ],
  plugins: [],
}
export default config
