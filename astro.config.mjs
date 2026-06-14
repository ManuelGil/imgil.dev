/**
 * Astro main configuration file for imgil.dev
 * - Integrates Tailwind CSS, MDX, and astro-compress for optimal performance
 * - Sets up build optimizations, asset handling, and code splitting
 * - All settings are tailored for maintainability and performance
 */
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://imgil.dev',
  base: '/',
  integrations: [mdx(), compress({ css: true, html: true, img: true, js: true, svg: true })],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    assets: '_astro',
    assetsPrefix: '/_astro',
    format: 'file',
    experimental: {
      optimizeHoistedScript: true,
    },
  },
  vite: {
    build: {
      cssCodeSplit: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            astro: ['astro:content', 'astro:transitions'],
            vendor: ['date-fns'],
          },
          assetFileNames: 'assets/[hash][extname]',
          chunkFileNames: 'assets/[hash].js',
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
      exclude: ['@resvg/resvg-js'],
    },
    plugins: [tailwindcss()],
  },
})
