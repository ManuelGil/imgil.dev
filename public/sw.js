// Service Worker for offline caching and basic PWA support.
// Caches a small set of essential assets during installation
// and serves cached responses when available.

const CACHE_NAME = 'imgil-dev-v1'

async function cacheAssets() {
  const cache = await caches.open(CACHE_NAME)

  return cache.addAll(['/', '/index.html', '/manifest.webmanifest'])
}

self.addEventListener('install', (event) => {
  event.waitUntil(cacheAssets())
})

async function fetchHandler(event) {
  const response = await caches.match(event.request)

  return response || fetch(event.request)
}

self.addEventListener('fetch', (event) => {
  event.respondWith(fetchHandler(event))
})
