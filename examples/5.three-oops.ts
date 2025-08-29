/**
 * ==============================================================
 *  📘 Explanation: Set in JavaScript / TypeScript
 * ==============================================================
 * A `Set` is a built-in object introduced in ES6 that stores UNIQUE values.
 * - No duplicates are allowed.
 * - Maintains insertion order (but no index-based access).
 * - Provides very fast lookups with `.has(value)` (O(1)).
 *
 * Main Methods:
 *   - add(value)    → Add a new value
 *   - has(value)    → Check if value exists
 *   - delete(value) → Remove value
 *   - clear()       → Remove all values
 *   - size          → Number of elements
 *
 * Example:
 *   const mySet = new Set([1, 2, 2, 3]);
 *   console.log(mySet);       // Set { 1, 2, 3 }
 *   console.log(mySet.has(2)) // true
 *
 * ==============================================================
 *  Efficiency Comparison
 * ==============================================================
 * | Method        | Time Complexity   | Space Complexity | Best Use Case                        |
 * |---------------|-------------------|-----------------|--------------------------------------|
 * | For Loop      | O(n * k)          | O(1)            | One-time check (simpler, faster)     |
 * | Set-based     | O(n) + O(m * k)   | O(n)            | Many queries, or arrays w/ duplicates|
 *   - n = array length
 *   - k = number of digits per number (string conversion)
 *   - m = number of unique values
 *
 * Conclusion:
 * - Use **For Loop** when checking once.
 * - Use **Set** when checking multiple digits (e.g., 3, 7, 9) repeatedly.
 *
 * ==============================================================
 */

/**
 * --------------------------------------------------------------
 *  ❓ Problem Explanation
 * --------------------------------------------------------------
 * Create a function that takes an array of numbers.
 * - If any number contains the digit `3` → return "Oops!!"
 * - Otherwise → return "No Three here!"
 *
 * Example:
 *   Input: [1, 2, 4, 5]       → "No Three here!"
 *   Input: [7, 8, 9, 3]       → "Oops!!"
 *   Input: [13, 25, 46, 99]   → "Oops!!"  (because 13 has digit 3)
 *
 * We'll solve this problem in TWO ways:
 *   1. Simple For Loop (direct scan)
 *   2. Using Set (unique preprocessing + lookup)
 *
 * --------------------------------------------------------------
 */

// --------------------------------------------------------------
// Method 1: Simple For Loop
// --------------------------------------------------------------
export function threeOopsLoop(arr: number[]): string {
  for (let num of arr) {
    if (num.toString().includes("3")) {
      return "Oops!!";
    }
  }
  return "No Three here!";
}

// --------------------------------------------------------------
// Method 2: Using Set
// --------------------------------------------------------------
export function threeOopsSet(arr: number[]): string {
  // Build a Set of unique string values
  const set = new Set(arr.map((num) => num.toString()));

  // Check each unique number
  for (let val of set) {
    if (val.includes("3")) {
      return "Oops!!";
    }
  }
  return "No Three here!";
}

// --------------------------------------------------------------
// Test Cases
// --------------------------------------------------------------
console.log("=== Testing For Loop Method ===");
console.log(threeOopsLoop([1, 2, 4, 5, 6])); // "No Three here!"
console.log(threeOopsLoop([7, 8, 9, 3])); // "Oops!!"
console.log(threeOopsLoop([13, 25, 46, 99])); // "Oops!!"

console.log("\n=== Testing Set Method ===");
console.log(threeOopsSet([1, 2, 4, 5, 6])); // "No Three here!"
console.log(threeOopsSet([7, 8, 9, 3])); // "Oops!!"
console.log(threeOopsSet([13, 25, 46, 99])); // "Oops!!"
