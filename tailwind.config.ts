import type { Config } from 'tailwindcss';

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
      colors: {
        White: '#FFFFFF', // White (Background)
        Grey: '#F8F8F8', // Grey for tables/bookings
        Text: '#202020', // Text
        Red: '#C0272D', // Red
        Yellow: '#FFFF00', // Yellow (minimal use)
      },
    },
  },
  plugins: [],
};
export default config;
