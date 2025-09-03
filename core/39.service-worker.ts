// service-worker.ts
/*
===============================
📚 Service Worker & Stale-While-Revalidate (TypeScript Concepts)
===============================

🔹 What is a Service Worker?
- A script running in the background, separate from the main JS thread.
- Acts as a programmable **network proxy** between browser and server.
- Can intercept HTTP requests, serve cached responses, update cache in background.

-------------------------------
📌 Key Capabilities
-------------------------------
1. **Offline Support**
   - Serve cached resources when user is offline.

2. **Caching Strategies**
   - Cache First → Use cache if available, fallback to network.
   - Network First → Use network, fallback to cache if offline.
   - Stale-While-Revalidate → Serve cache immediately, update cache with fresh response.

3. **Push Notifications**
   - SW can listen to push events for background messages.

4. **Background Sync**
   - Retry failed requests when connectivity is restored.

-------------------------------
🛠 Service Worker Lifecycle
-------------------------------
1. Register (in main thread)
   - navigator.serviceWorker.register("/sw.js")

2. Install (inside sw.js)
   - Pre-cache assets in Cache Storage.

3. Activate
   - Clean old caches, take control of clients.

4. Fetch
   - Intercept network requests and decide how to respond.

===============================
*/

// -------------------------------
// 1. Registering a Service Worker (main thread)
// -------------------------------
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => {
      console.log("✅ Service Worker registered:", reg.scope);
    })
    .catch((err) => {
      console.error("❌ Service Worker registration failed:", err);
    });
}

// -------------------------------
// 2. Example Service Worker (public/sw.js equivalent, written in TS style)
// -------------------------------

// Typing cache name
const CACHE_NAME = "demo-cache-v1";
const PRECACHE_URLS: string[] = ["/", "/offline.html"];

// @ts-ignore → because self is a special ServiceWorkerGlobalScope
self.addEventListener("install", (event: ExtendableEvent) => {
  console.log("🛠 Installing Service Worker...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("✅ Pre-caching resources");
      return cache.addAll(PRECACHE_URLS);
    })
  );
});

// Activate → remove old caches
// @ts-ignore
self.addEventListener("activate", (event: ExtendableEvent) => {
  console.log("⚡ Activating new Service Worker...");
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
      )
  );
});

// Fetch → Stale-While-Revalidate strategy
// @ts-ignore
self.addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Fetch new version in background
      const networkFetch = fetch(event.request).then((networkResponse) => {
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      });

      // Serve cache immediately if available, else wait for network
      return cachedResponse || networkFetch;
    })
  );
});

/*
===============================
🧪 How to Test This Concept
===============================
1. Place this file under `/public/sw.js` in Next.js (compiled TS → JS).
2. Register in a client component or _app.tsx.
3. Open Chrome DevTools → Application → Service Workers.
4. Go offline → refresh page → cached version served.
5. Come back online → SW fetches new version and updates cache silently.
===============================
*/
