---
title: 'Optimizing Astro Sites for Performance'
description: 'Learn how to improve Core Web Vitals and overall performance in your Astro projects'
pubDate: 2025-04-10
tags: ['astro', 'performance', 'web-dev']
author: 'Manuel Gil'
---

# Optimizing Astro Sites for Performance

Web performance is crucial for user experience and SEO. In this article, I'll share the techniques I've implemented to optimize Astro-based websites for maximum performance, with a focus on Core Web Vitals.

## Understanding Core Web Vitals

Core Web Vitals are a set of specific metrics that Google considers important for user experience:

- **Largest Contentful Paint (LCP)**: Measures loading performance
- **First Input Delay (FID)**: Measures interactivity
- **Cumulative Layout Shift (CLS)**: Measures visual stability

Let's explore how to optimize each of these in an Astro project.

## Configuration Optimizations

Astro provides several configuration options that can significantly improve performance.

```js
// astro.config.mjs
export default defineConfig({
  compressHTML: true,
  build: {
    assets: 'assets',
    assetsPrefix: '/static',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            astro: ['astro'],
          },
        },
      },
    },
  },
  integrations: [
    compress({
      html: true,
      css: true,
      js: true,
      img: true,
      svg: true,
    }),
  ],
})
```

## CSS Optimizations

### Optimizing Tailwind CSS

If you're using Tailwind, ensuring that you have proper purging set up is essential:

```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    // Add classes that might be generated dynamically
    'text-primary',
    'bg-primary',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Global CSS Optimizations

Add these optimizations to your global CSS:

```css
/* src/styles/global.css */
img,
video {
  max-width: 100%;
  height: auto;
  display: block;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.content-visibility-auto {
  content-visibility: auto;
}

.will-change-transform {
  will-change: transform;
}
```

## Image Optimizations

### Optimized Image Loading

Always specify width and height attributes to prevent layout shifts:

```html
<img src="/path/to/image.jpg" alt="Description" width="800" height="600" loading="lazy" />
```

### Using Astro's Image Component

Astro provides a built-in image optimization component:

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/my-image.jpg';
---

<Image
  src={myImage}
  alt="Description"
  format="webp"
  quality={80}
/>
```

## JavaScript Optimizations

### Defer Non-Critical JavaScript

For scripts that aren't needed immediately:

```html
<script src="/path/to/script.js" defer></script>
```

### Efficiently Loading Third-Party Resources

```html
<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
```

## SVG Optimizations

Always include proper accessibility attributes:

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  aria-hidden="true"
>
  <!-- SVG paths -->
</svg>
```

## Mobile Optimizations

For mobile, add the theme-color meta tag and ensure your viewport settings are correct:

```html
<meta name="theme-color" content="#27272a" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

## Results and Testing

After implementing these optimizations on this site, I saw:

- LCP reduced by 32%
- CLS eliminated completely
- Overall Lighthouse score improved to 98+

## Conclusion

Performance optimization is an ongoing process, not a one-time task. Regularly testing your site with tools like Lighthouse and WebPageTest will help you identify new opportunities for improvement.

By following these techniques, you can create lightning-fast Astro sites that provide excellent user experiences and perform well in search rankings.

If you have questions or want to share your own optimization tips, reach out to me on [GitHub](https://github.com/ManuelGil) or [Twitter](https://twitter.com/imgildev)!
