const VERSION = 'v1';
// Como el this. pero para los serviceWorker
self.addEventListener('install', (event) => {
    event.waitUntil(precache());
});

self.addEventListener('fetch', (event) => {
    const request = event.request;
    // solo los get
    if (request.method !== 'GET') {
        return;
    }

    // Buscar en cache
    event.respondWith(cachedResponse(request));

    // Actualizar el cache
    event.waitUntil(updateCache(request));
});

async function precache() {
    // Instanciamos el cache con el nombre v1
    const cache = await caches.open(VERSION);
    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.js',
        // '/assets/index.css',
        // '/assets/video.mp4',
    ]);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    // console.log(response);
    return cache.put(request, response);
}