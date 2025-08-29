/**
 * Problem:
 * Write a function that searches an array of names (unsorted) for the name "Tom"
 * and returns the index where "Tom" is found. If "Tom" is not in the array,
 * return -1.
 *
 * Example:
 *   findTom(["Jimmy", "Layla", "Tom"])    → 2
 *   findTom(["Tom", "Layla", "Kaitlyn"]) → 0
 *   findTom(["Jimmy", "Layla", "James"]) → -1
 */

function findTom(names: string[]): number {
  // Use the built-in indexOf method to search for "Tom"
  return names.indexOf("Tom");
}

// ✅ Test cases
console.log(findTom(["Jimmy", "Layla", "Tom"])); // 2
console.log(findTom(["Tom", "Layla", "Kaitlyn"])); // 0
console.log(findTom(["Jimmy", "Layla", "James"])); // -1
