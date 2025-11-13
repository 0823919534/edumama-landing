const CACHE = "edumama-v1";
const FILES = [
  "/",
  "/index.html",
  "/grade-r.html",
  "/css/style.css",
  "/js/offline-tracker.js"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((resp) => resp || fetch(e.request))
  );
});
