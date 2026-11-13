const CACHE='fit12-light-v1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png',
'walking','squat','sit_to_stand','glute_bridge','calf_raise','hip_abduction','cycling','hiking','split_squat','leg_press','chest_press','seated_row','lat_pulldown','shoulder_press','ab_roller','dead_bug','plank','step_up','stretch'].map(x=>x.includes('.')||x.startsWith('./')?x:'./exercises/'+x+'.svg');
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{if(r.ok){let copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return r})))})
