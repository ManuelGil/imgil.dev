/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff6b00',
          dark: '#cc5500',
          light: '#ff8533',
          50: '#fff5eb',
          100: '#ffe6cc',
          200: '#ffc999',
          300: '#ffad66',
          400: '#ff9033',
          500: '#ff6b00',
          600: '#cc5500',
          700: '#994000',
          800: '#662a00',
          900: '#331500',
        },
        accent: {
          DEFAULT: '#0066cc',
          dark: '#004c99',
          light: '#3385d6',
          50: '#e6f0fa',
          100: '#cce0f5',
          200: '#99c2eb',
          300: '#66a3e0',
          400: '#3385d6',
          500: '#0066cc',
          600: '#004c99',
          700: '#003366',
          800: '#001933',
          900: '#000c19',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.zinc.300'),
            a: {
              color: theme('colors.primary.DEFAULT'),
              textDecoration: 'none',
              fontWeight: '500',
              '&:hover': {
                color: theme('colors.accent.DEFAULT'),
              },
            },
            h1: {
              color: theme('colors.white'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.white'),
              fontWeight: '700',
            },
            h3: {
              color: theme('colors.white'),
              fontWeight: '600',
            },
            h4: {
              color: theme('colors.white'),
              fontWeight: '600',
            },
            blockquote: {
              color: theme('colors.zinc.300'),
              borderLeftColor: theme('colors.primary.500'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.primary.500'),
            },
            'ol > li::before': {
              color: theme('colors.primary.500'),
            },
            hr: {
              borderColor: theme('colors.zinc.700'),
            },
            strong: {
              color: theme('colors.white'),
              fontWeight: '600',
            },
            code: {
              color: theme('colors.primary.DEFAULT'),
              backgroundColor: theme('colors.zinc.800'),
              borderRadius: theme('borderRadius.md'),
              padding: `${theme('spacing[0.5]')} ${theme('spacing[1.5]')}`,
            },
            pre: {
              backgroundColor: theme('colors.zinc.800'),
              borderRadius: theme('borderRadius.lg'),
              padding: theme('spacing.4'),
              boxShadow: theme('boxShadow.lg'),
            },
            img: {
              borderRadius: theme('borderRadius.lg'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
  future: {
    hoverOnlyWhenSupported: true,
  },
  experimental: {
    optimizeUniversalDefaults: true,
  },
  corePlugins: {
    touchAction: false,
    container: true,
  },
  safelist: ['hidden', 'block', 'flex', 'grid', 'md:flex', 'md:hidden', 'md:grid'],
}
