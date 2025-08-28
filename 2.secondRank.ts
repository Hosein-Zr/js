/**
 * Problem:
 * Write a function that takes an array of numbers and returns the second largest number.
 *
 * Example:
 *   secondLargest([10, 40, 30, 20, 50])   → 40
 *   secondLargest([25, 143, 89, 13, 105]) → 105
 *   secondLargest([54, 23, 11, 17, 10])   → 23
 *
 * Assumption: The array will always contain at least 2 numbers.
 */

function findSecond(arr: number[]): number {
  // Used [...arr] before sorting → so you don’t mutate the original array (good practice).
  const sortedArr: number[] = [...arr].sort((a, b) => b - a);
  return arr.indexOf(sortedArr[1]);
}


// * More efficient. Why?
// ! hint: O(n) and o(n log n)
// function findSecond(arr: number[]): number {
//   let max = -Infinity,
//     second = -Infinity;
//   for (const num of arr) {
//     if (num > max) {
//       second = max;
//       max = num;
//     } else if (num > second && num < max) {
//       second = num;
//     }
//   }
//   return second;
// }

console.log(findSecond([10, 40, 30, 20, 50]));   // 40
console.log(findSecond([25, 143, 89, 13, 105])); // 105
console.log(findSecond([54, 23, 11, 17, 10]));   // 23