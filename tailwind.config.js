/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/atoms/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}', './src/containers/**/*.{ts,tsx}', './src/layout/**/*.{ts,tsx}', './src/pages/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
