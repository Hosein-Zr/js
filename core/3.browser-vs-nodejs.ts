// ==================================================
// 📘 JavaScript vs Runtime APIs (Browser vs Node.js)
// ==================================================
//
// 📖 THEORY
// --------------------------------------------------
// - JavaScript (ECMAScript) is just the LANGUAGE spec.
//   (Variables, functions, arrays, promises, etc.)
// - To actually "do things" (like timers, DOM, files, network),
//   we need a RUNTIME environment.
//
// 🌐 Browser Runtime provides:
//   - DOM APIs (document, window, querySelector)
//   - Timers (setTimeout, setInterval)
//   - fetch (HTTP requests)
//
// 🖥️ Node.js Runtime provides:
//   - File system (fs)
//   - Process (process.env, process.nextTick)
//   - Networking (http, net)
//   - setTimeout, setImmediate, etc.
//   - (fetch is available in Node 18+)
//
// ✅ Pure JavaScript (ECMAScript):
//   - Works EVERYWHERE (browser, Node, Deno, Bun)
//
// --------------------------------------------------
// PRACTICAL DEMOS
// ==================================================

console.log("===== EXERCISE 1: Pure JavaScript (ECMAScript) =====");

const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);
console.log("Doubled:", doubled);

// ✅ This works the same in browser console AND Node.js
// Because Array.map is part of the ECMAScript spec.

console.log("\n===== EXERCISE 2: Browser-only APIs =====");

// ❌ The following would throw an error in Node.js
// (uncomment if running in browser console)
//
// console.log(document.querySelector("body"));
// console.log(window.innerWidth);

// ✅ Works in browser, because "document" and "window" exist there
// ❌ Fails in Node.js, because no DOM is available

console.log("\n===== EXERCISE 3: Node.js-only APIs =====");

// ❌ The following fails in browser, but works in Node.js
// (uncomment if running in Node)
//
// import * as fs from "fs";
// fs.readFile("package.json", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("Node readFile success, length:", data.length);
// });

// ✅ Works in Node.js, because "fs" module exists
// ❌ Fails in browser, because browser cannot access your computer's files

console.log("\n===== EXERCISE 4: Timers (both Browser + Node) =====");

setTimeout(() => console.log("Timeout fired"), 0);
console.log("After scheduling timeout");
// ✅ Works in both environments
// ❌ But remember: setTimeout is NOT part of ECMAScript itself!
// It’s provided by the runtime

console.log("\n===== EXERCISE 5: fetch =====");

// In browsers: fetch is standard
// In Node.js: fetch is built-in starting from v18+
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((json) => console.log("Fetched:", json))
  .catch((err) => console.log("Fetch error:", err));

// ==================================================
// ✅ SUMMARY
// --------------------------------------------------
// 1. Pure ECMAScript = Always works everywhere
//    - Numbers, Strings, Arrays, Objects, Promises, etc.
//
// 2. Browser-only APIs
//    - document, window, alert, DOM events
//
// 3. Node.js-only APIs
//    - fs, path, process, Buffer, http, os
//
// 4. Shared APIs (both Browser & Node)
//    - setTimeout, setInterval, fetch (Node 18+)
// --------------------------------------------------
