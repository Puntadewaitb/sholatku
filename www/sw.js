// Cache-first agar bisa dimainkan offline; naikkan VERSION tiap rilis supaya cache lama dibuang
const VERSION='rakaatku-v3';
const FILES=['./','index.html','manifest.webmanifest','icon.svg','icon-192.png','icon-512.png','fonts/baloo2.woff2','fonts/nunito.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSION).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
  // halaman: network-first biar update cepat terlihat; aset: cache-first
  if(e.request.mode==='navigate'){e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(VERSION).then(x=>x.put('index.html',c));return r}).catch(()=>caches.match('index.html')));return}
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
