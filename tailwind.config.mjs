/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b00',
          dark: '#cc5500',
        },
        accent: {
          DEFAULT: '#0066cc',
          dark: '#004c99',
        },
      },
    },
  },
  plugins: [],
}
