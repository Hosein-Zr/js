/**
 * ===============================
 * 📘 ASYNC / AWAIT IN TYPESCRIPT
 * ===============================
 *
 * THEORY:
 * ----------
 * JavaScript (and TypeScript) is single-threaded, meaning it runs one line at a time.
 * If we perform long-running tasks (like fetching data from a server), the main thread
 * would block and the app would freeze. To fix this, JavaScript uses asynchronous programming.
 *
 * Before async/await, we had:
 *  - Callbacks  → messy ("callback hell")
 *  - Promises   → cleaner with `.then()` and `.catch()`
 *  - Async/Await → syntactic sugar over promises that makes async code look synchronous
 *
 * RULES:
 *  - `async` keyword: makes a function always return a Promise
 *  - `await` keyword: pauses execution until the Promise resolves (inside async functions only)
 *
 * Efficiency note:
 * Async/await doesn’t make code faster. It makes code *easier to read and maintain*.
 * For real performance gains, we decide whether to run tasks sequentially or in parallel.
 */

//
// 2. AWAIT KEYWORD
//
const fetchData = (msg: string, delay: number): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(`✅ ${msg}`), delay);
  });

async function demoAwait() {
  console.log("Start");
  const result = await fetchData("Fetched single item", 2000);
  // Here execution waits until the promise resolves, but other tasks in the event loop continue.
  console.log(result);
  console.log("End");
}
demoAwait();

//
// 3. PARALLEL EXECUTION
//
async function demoParallel() {
  console.log("Parallel Start");

  /**
   * Instead of awaiting one by one, we launch both promises simultaneously.
   * `Promise.all` waits for ALL promises to finish, then gives an array of results.
   *
   * Example:
   * const [a, b] = await Promise.all([fetchData("A", 2000), fetchData("B", 2000)]);
   *
   * - Both fetchData calls start at the same time
   * - After ~2s, both finish
   * - We destructure results into `a` and `b`
   */
  const [a, b] = await Promise.all([
    fetchData("Parallel A", 2000),
    fetchData("Parallel B", 2000),
  ]);

  console.log(a, b);
  console.log("Parallel End");
}
demoParallel();

//
// 4. SEQUENTIAL VS PARALLEL
//
async function demoSequentialVsParallel() {
  console.log("Sequential Example:");
  const a = await fetchData("Sequential A", 2000); // wait 2s
  const b = await fetchData("Sequential B", 2000); // wait another 2s
  console.log(a, b); // total ~4s

  console.log("\nParallel Example:");
  const promiseA = fetchData("Parallel A", 2000); // start immediately
  const promiseB = fetchData("Parallel B", 2000); // start immediately
  console.log(await promiseA, await promiseB); // both finish after ~2s total
}
demoSequentialVsParallel();

//
// 5. LOOPS WITH ASYNC/AWAIT
//
const ids = [1, 2, 3];

async function processSequential() {
  console.log("\nLoop Sequential:");
  for (const id of ids) {
    const result = await fetchData(`Item ${id}`, 1000);
    console.log("Processed:", result);
  }
  // Total time ~3s
}

async function processParallel() {
  console.log("\nLoop Parallel:");
  await Promise.all(
    ids.map(async (id) => {
      const result = await fetchData(`Item ${id}`, 1000);
      console.log("Processed:", result);
    })
  );
  // Total time ~1s because all run in parallel
}

processSequential().then(processParallel);

//
// 6. TYPESCRIPT SECTION
//
async function add(a: number, b: number): Promise<number> {
  // Async functions always return Promise<Type>
  return a + b;
}

add(5, 7).then((sum) => console.log("\nTS Typing Example →", sum));

//
// 7. ADVANCED HERO TRICKS
//
async function advancedTricks() {
  console.log("\nAdvanced Tricks:");

  // 🔹 Promise.race
  /**
   * Runs multiple promises, and the *first one that settles* (resolves OR rejects) wins.
   * Useful for implementing timeouts.
   */
  const raceResult = await Promise.race([
    fetchData("Fast result", 1000),
    fetchData("Slow result", 3000),
  ]);
  console.log("Promise.race result →", raceResult); // After ~1s: "Fast result"

  // 🔹 Promise.allSettled
  /**
   * Waits for ALL promises to finish (resolve OR reject).
   * Returns an array of objects with {status, value | reason}.
   * Useful when you want results of everything, even if some fail.
   */
  const settledResults = await Promise.allSettled([
    fetchData("Good", 1000),
    new Promise((_r, reject) => setTimeout(() => reject("Bad Error"), 1500)),
  ]);
  console.log("Promise.allSettled results →", settledResults);
  // Example output:
  // [
  //   { status: "fulfilled", value: "Good" },
  //   { status: "rejected", reason: "Bad Error" }
  // ]

  // 🔹 Top-level await (ES2022+ / Node 16+)
  /**
   * Allows using `await` outside async functions.
   * In modern TS/Node, you can just write:
   *    const user = await fetchData("Top-level await works!", 1000);
   *    console.log(user);
   * BUT: This must be in a module environment (not CommonJS).
   */
}

advancedTricks();
