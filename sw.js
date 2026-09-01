const CACHE = 'gavvas-astro-analyzer-v1.6.0';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png',
  './favicon-32.png',
  './data/world_atlas_2015.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Dynamic APIs and the large atlas binary must always stay network-driven.
  const dynamicHost = !url.origin.includes(self.location.origin) ||
    url.pathname.endsWith('/data/world_atlas_2015.bin');
  if (dynamicHost) return;

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(response => {
      if (response && response.ok && response.type === 'basic') {
        const clone = response.clone();
        caches.open(CACHE).then(cache => cache.put(req, clone));
      }
      return response;
    }))
  );
});
