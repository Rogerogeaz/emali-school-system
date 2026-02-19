const CACHE_NAME = "emali-school-v2";

const urlsToCache = [
  "/emali-school-system/",
  "/emali-school-system/index.html",
  "/emali-school-system/manifest.json",
  "/emali-school-system/icon-192.png"
];

// INSTALL
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", function(event) {
  event.waitUntil(
    self.clients.claim()
  );
});

// FETCH
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
