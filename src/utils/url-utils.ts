/**
 * Normalizes a request pathname to the site's canonical clean-URL form.
 *
 * `astro dev` resolves `Astro.url.pathname` to the clean route (e.g. `/about`),
 * but this project's static build uses `build.format: 'file'`, which makes
 * `Astro.url.pathname` reflect the physical output filename at build time
 * (e.g. `/about.html`, or `/index.html` for the homepage). Every internal
 * link in the codebase already targets the clean form, so anything deriving
 * canonical/OG/share URLs from `Astro.url.pathname` must go through this
 * first or it will point at a URL nothing else on the site ever links to.
 */
export function getCleanPathname(pathname: string): string {
  if (pathname === '/index.html') return '/'
  if (pathname.endsWith('/index.html')) return pathname.slice(0, -'index.html'.length)
  if (pathname.endsWith('.html')) return pathname.slice(0, -'.html'.length)
  return pathname
}
