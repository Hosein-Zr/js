/**
 * ==============================================================
 *  ❓ Problem: Number of Boomerangs
 * ==============================================================
 * A boomerang is a V-shaped sequence of length 3 in an array:
 *   - The first and last numbers must be the same.
 *   - The middle number must be different.
 *
 * Examples of boomerangs:
 *   [3, 7, 3], [1, -1, 1], [5, 6, 5]
 *
 * Example Input:
 *   [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
 * Example Output:
 *   3 boomerangs → [3,7,3], [1,5,1], [2,-2,2]
 *
 * Boomerangs can overlap:
 *   [1, 7, 1, 7, 1, 7, 1]
 *   5 boomerangs → [1,7,1], [7,1,7], [1,7,1], [7,1,7], [1,7,1]
 *
 * --------------------------------------------------------------
 *  Efficiency
 * --------------------------------------------------------------
 * Time Complexity:  O(n)   → one pass through the array
 * Space Complexity: O(1)   → no extra structures used
 * ==============================================================
 */

// --------------------------------------------------------------
// Function Implementation
// --------------------------------------------------------------
export function boomerang(arr: number[]): number {
  let boomerangCounter: number = 0;

  for (let i = 0; i + 2 < arr.length; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      boomerangCounter++;
    }
  }

  return boomerangCounter;
}

// --------------------------------------------------------------
// Test Cases
// --------------------------------------------------------------
console.log(boomerang([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
// Output: 3 → [3,7,3], [1,5,1], [2,-2,2]

console.log(boomerang([1, 7, 1, 7, 1, 7, 1]));
// Output: 5 → [1,7,1], [7,1,7], [1,7,1], [7,1,7], [1,7,1]

console.log(boomerang([1, 2, 3, 4, 5]));
// Output: 0 → no boomerangs
