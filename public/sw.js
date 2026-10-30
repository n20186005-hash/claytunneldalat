// Retire only this guide's former offline cache; do not intercept requests.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('ctd-'))await caches.delete(key);await self.registration.unregister();await self.clients.claim();})()));
