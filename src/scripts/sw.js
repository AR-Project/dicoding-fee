import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './images/assets/bg.webp',
  './images/heros/hero-image_4.jpg',
  './images/icons/icon.svg',
  './images/icons/icon_large.png',
  './icon_96x96.png',
  './icon_128x128.png',
  './icon_192x192.png',
  './icon_256x256.png',
  './icon_384x384.png',
  './icon_512x512.png',
  './index.html',
  './manifest.json',
  './app.bundle.js',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');
  self.skipWaiting();
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
