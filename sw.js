const CACHE = 'gavvas-astro-analyzer-v1.7.9-android';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './apple-touch-icon-167.png',
  './apple-touch-icon-152.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-192.png',
  './icon-maskable-512.png',
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

  // Für Navigation und index.html zuerst das Netz verwenden, damit iPhones
  // nach einem GitHub-Pages-Update nicht an einer alten App-Version hängen.
  if (req.mode === 'navigate' || url.pathname.endsWith('/index.html') || url.pathname.endsWith('/')) {
    event.respondWith(
      fetch(req).then(response => {
        if (response && response.ok && response.type === 'basic') {
          caches.open(CACHE).then(cache => cache.put(req, response.clone()));
        }
        return response;
      }).catch(() => caches.match(req))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(response => {
      if (response && response.ok && response.type === 'basic') {
        caches.open(CACHE).then(cache => cache.put(req, response.clone()));
      }
      return response;
    }))
  );
});
