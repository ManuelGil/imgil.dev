import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import compress from 'astro-compress'

export default defineConfig({
  site: 'https://imgil.dev',
  base: '/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    compress({
      css: true,
      html: true,
      img: true,
      js: true,
      svg: true,
    }),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets',
    assetsPrefix: '/_astro',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            astro: ['astro:content', 'astro:transitions'],
            vendor: ['date-fns'],
          },
        },
      },
      minify: 'terser',
      terserOptions: {
        ecma: 2020,
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
    },
    ssr: {
      noExternal: ['date-fns'],
    },
    optimizeDeps: {
      exclude: ['date-fns'],
    },
  },
  experimental: {
    clientPrerender: false,
  },
})
