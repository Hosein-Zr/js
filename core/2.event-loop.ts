// event-loop-exercises.ts
// ==================================================
// 🎯 EVENT LOOP PRACTICE WORKBOOK
// ==================================================
//
// 📖 THEORY SUMMARY
// --------------------------------------------------
// 1. JavaScript is SINGLE-THREADED (only one call stack).
//
// 2. The Event Loop allows async tasks without blocking UI.
//    - JS runs code in the "Call Stack".
//    - When async work (timers, fetch, events) finishes,
//      callbacks are put into queues to wait for execution.
//
// 3. Queues
//    - Macro-task queue: setTimeout, setInterval, setImmediate, DOM events
//    - Micro-task queue: Promises (.then), queueMicrotask, MutationObserver
//
// 4. Event Loop steps
//    a) Run everything in Call Stack
//    b) Empty Micro-task queue
//    c) Take ONE Macro-task and run it
//    d) Repeat forever
//
// 5. Rule of thumb
//    - Microtasks run BEFORE any macrotasks
//    - Async/await = Promises
//
// 6. Why it matters?
//    - Explains why `Promise` beats `setTimeout`
//    - Helps predict async flow
//    - Essential for Node.js (streams, I/O) & browser apps
//
// --------------------------------------------------
// Now let’s PRACTICE!
// For each block:
//  1. Predict the output order
//  2. Run with ts-node
//  3. Check solutions at the bottom
// --------------------------------------------------

console.log("===== EXERCISE 1: Basic Call Stack vs setTimeout =====");

console.log("A");
setTimeout(() => console.log("B (from timeout)"), 0);
console.log("C");

console.log("\n===== EXERCISE 2: Promise vs Timeout =====");

setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));

console.log("\n===== EXERCISE 3: Nested Promises =====");

Promise.resolve().then(() => {
  console.log("First promise");
  Promise.resolve().then(() => console.log("Nested promise"));
});

console.log("\n===== EXERCISE 4: Mixed Flow =====");

console.log("script start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => {
  console.log("promise1");
  setTimeout(() => console.log("setTimeout inside promise"), 0);
});

Promise.resolve().then(() => console.log("promise2"));

console.log("script end");

console.log("\n===== EXERCISE 5: setTimeout delays =====");

setTimeout(() => console.log("timeout 0ms"), 0);
setTimeout(() => console.log("timeout 100ms"), 100);
setTimeout(() => console.log("timeout 200ms"), 200);

console.log("after scheduling timeouts");

console.log("\n===== EXERCISE 6: Microtask Explosion =====");

Promise.resolve().then(() => {
  console.log("P1");
  Promise.resolve().then(() => {
    console.log("P2");
    Promise.resolve().then(() => console.log("P3"));
  });
});

console.log("\n===== EXERCISE 7: Async/Await is Promises =====");

async function testAsync() {
  console.log("Inside async start");
  await null; // yields back to event loop
  console.log("Inside async end");
}

console.log("Before async");
testAsync();
console.log("After async");

console.log("\n===== EXERCISE 8: Complex Mix =====");

setTimeout(() => console.log("T1"), 0);

Promise.resolve().then(() => {
  console.log("P1");
  setTimeout(() => console.log("T2 inside P1"), 0);
  Promise.resolve().then(() => console.log("P2 inside P1"));
});

Promise.resolve().then(() => console.log("P3"));

console.log("End of script");

// ==================================================
// ✅ ANSWERS & EXPLANATIONS
// (Check only AFTER you’ve tried predicting!)
// ==================================================
//
// EX1: A, C, B
// - Call stack runs "A" and "C"
// - Timeout callback pushed to macrotask → runs later
//
// EX2: Promise, Timeout
// - Promises (microtask) always run before timeout (macrotask)
//
// EX3: First promise, Nested promise
// - Microtasks drain fully before next macrotask
//
// EX4:
// script start
// script end
// promise1
// promise2
// setTimeout
// setTimeout inside promise
//
// EX5:
// after scheduling timeouts
// timeout 0ms
// timeout 100ms
// timeout 200ms
//
// EX6:
// P1, P2, P3
// - Microtasks keep chaining until queue empties
//
// EX7:
// Before async
// Inside async start
// After async
// Inside async end
// - `await` breaks into microtask → resumes later
//
// EX8:
// End of script
// P1
// P2 inside P1
// P3
// T1
// T2 inside P1
// - Microtasks (P1, nested, P3) drain before timers
//
// ==================================================
