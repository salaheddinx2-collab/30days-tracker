const CACHE_NAME = 'tracker30-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css', // ila kan 3ndk
  './script.js'  // ila kan 3ndk
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
