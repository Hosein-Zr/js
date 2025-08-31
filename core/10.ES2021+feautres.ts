/**
 * ES2021+ FEATURES (Zero → Hero, Fixed)
 * -------------------------------------
 * This file contains all examples from ES2021 → ES2024
 * with explanations in comments. All variables renamed
 * to avoid redeclaration errors in TypeScript.
 *
 * REQUIREMENTS:
 *   - TypeScript >= 5.2
 *   - tsconfig.json: "target": "ES2022", "lib": ["ES2024", "DOM"]
 */

/* ============================
   ES2021 (ES12) FEATURES
   ============================ */

// 1. Logical Assignment Operators (??=, ||=, &&=)
let a21: number | null = null;
a21 ??= 10; // assign if null/undefined
console.log("a21 ??=", a21);

let b21: number = 5;
b21 ||= 0; // assign if falsy
console.log("b21 ||= ", b21);

let c21: string = "hello";
c21 &&= "world"; // assign if truthy
console.log("c21 &&=", c21);

// -----------------------------------------------

// 2. Numeric Separators (_)
let bigNumber21 = 1_000_000_000;
let creditCard21 = 1234_5678_9012_3456;
console.log("Big:", bigNumber21, "Card:", creditCard21);

// -----------------------------------------------

// 3. Promise.any & AggregateError
const p21a = Promise.reject("fail fast");
const p21b = new Promise((res) => setTimeout(() => res("ok after 1s"), 1000));
const p21c = new Promise((res) => setTimeout(() => res("ok after 2s"), 2000));
Promise.any([p21a, p21b, p21c])
  .then((res) => console.log("Promise.any result:", res))
  .catch((err: AggregateError) => console.error("All failed:", err.errors));

// -----------------------------------------------

// 4. String.prototype.replaceAll
const text21 = "foo bar foo baz foo";
console.log("replaceAll:", text21.replaceAll("foo", "xxx"));

// -----------------------------------------------

// 5. WeakRef & FinalizationRegistry
let obj21: { name: string } | null = { name: "Habib" };
const weak21 = new WeakRef(obj21);
console.log("WeakRef deref:", weak21.deref()?.name); // "Habib"
obj21 = null; // eligible for GC (in theory)

/* ============================
   ES2022 (ES13) FEATURES
   ============================ */

// 1. Class Fields & Private Methods
class Counter22 {
  #count = 0;
  increment() {
    this.#count++;
  }
  #log() {
    console.log("Count is:", this.#count);
  }
  show() {
    this.#log();
  }
}
const ctr22 = new Counter22();
ctr22.increment();
ctr22.show(); // Count is: 1

// -----------------------------------------------

// 2. Array.prototype.at (negative indexing)
const arr22 = [10, 20, 30, 40];
console.log("arr22.at(-1):", arr22.at(-1));
console.log("string.at(-2):", "Habib".at(-2));

// -----------------------------------------------

// 3. Object.hasOwn
const user22 = { name: "Sam" };
console.log("hasOwn(name):", Object.hasOwn(user22, "name")); // true
console.log("hasOwn(age):", Object.hasOwn(user22, "age")); // false

// -----------------------------------------------

// 4. Error Cause
try {
  const err22 = new Error("Database error") as Error & { cause?: string };
  err22.cause = "Connection refused";
  throw err22;
} catch (err: any) {
  console.log("Error message:", err.message);
  console.log("Error cause:", err.cause);
}

/* ============================
   ES2023 (ES14) FEATURES
   ============================ */

// 1. Array findLast & findLastIndex
const nums23 = [5, 12, 50, 130, 44];
console.log(
  "findLast >45:",
  nums23.findLast((n) => n > 45)
);
console.log(
  "findLastIndex >45:",
  nums23.findLastIndex((n) => n > 45)
);

// -----------------------------------------------

// 2. Hashbang Grammar (works in standalone .js files)
// Example: add at top of file
// #!/usr/bin/env node

// -----------------------------------------------

// 3. Symbol.prototype.description
const sym23 = Symbol("mySymbol");
console.log("Symbol desc:", sym23.description);

/* ============================
   ES2024 (ES15) FEATURES
   ============================ */

// 1. Set Methods
const setA24 = new Set([1, 2, 3]);
const setB24 = new Set([3, 4, 5]);
console.log("Set.intersection:", setA24.intersection(setB24));
console.log("Set.union:", setA24.union(setB24));
console.log("Set.difference:", setA24.difference(setB24));
console.log("Set.symmetricDifference:", setA24.symmetricDifference(setB24));

// -----------------------------------------------

// 2. Object.groupBy (Array Grouping)
const scores24 = [60, 75, 90, 45];
const grouped24 = Object.groupBy(scores24, (score) =>
  score >= 60 ? "pass" : "fail"
);
console.log("Grouped scores:", grouped24);

// -----------------------------------------------

// 3. Temporal API (proposal, not in all runtimes yet)
// Example (pseudo):
// const today = Temporal.PlainDate.from("2025-08-30");
// console.log("Temporal date:", today);
