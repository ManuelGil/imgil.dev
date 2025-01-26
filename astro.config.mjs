import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://imgil.dev',
  base: '/',
  integrations: [tailwind()],
})
