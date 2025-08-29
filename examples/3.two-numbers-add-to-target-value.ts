function twoNumbersAddToTargetValue(
  arr1: number[],
  arr2: number[],
  target: number
): boolean {
  for (let x = 0; x < arr1.length; x++) {
    for (let y = 0; y < arr2.length; y++) {
      if (arr1[x] + arr2[y] === target) {
        return true;
      }
    }
  }

  return false;
}

// * Which one is more efficient? Why?
// ! Hint: O(1) and o(n)?
// function twoNumbersAddToTargetValue(
//   arr1: number[],
//   arr2: number[],
//   target: number
// ): boolean {
//   const set = new Set(arr1);

//   for (const num of arr2) {
//     if (set.has(target - num)) {
//       return true;
//     }
//   }

//   return false;
// }

console.log(twoNumbersAddToTargetValue([1, 2], [4, 5, 6], 5)); // true
console.log(twoNumbersAddToTargetValue([1, 2], [4, 5, 6], 8)); // true
console.log(twoNumbersAddToTargetValue([1, 2], [4, 5, 6], 3)); // false
console.log(twoNumbersAddToTargetValue([1, 2], [4, 5, 6], 9)); // false
