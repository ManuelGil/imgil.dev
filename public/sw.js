// Service Worker for offline caching and PWA support
// Caches essential assets and serves them when offline.
// Extend this file to add custom caching strategies as needed.
function cacheAssets() {
  return caches.open('v1').then((cache) => {
    return cache.addAll([
      '/',
      '/index.html',
      '/manifest.webmanifest',
      // Add more static assets as needed
    ])
  })
}

self.addEventListener('install', (event) => {
  event.waitUntil(cacheAssets())
})

function fetchHandler(event) {
  return caches.match(event.request).then((response) => {
    return response || fetch(event.request)
  })
}

self.addEventListener('fetch', (event) => {
  event.respondWith(fetchHandler(event))
})
