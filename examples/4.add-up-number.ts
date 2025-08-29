function addUpNumber(num: number): number {
  if (num === 1) return 1; // base case → stop at 1
  return num + addUpNumber(num - 1); // reduce problem
}

// * Which one is more efficient? Why ?
// ! Hint: O(n) and O(1)

// function addUpNumber(num: number): number {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// ✅ Test cases
console.log(addUpNumber(1));
console.log(addUpNumber(13));
console.log(addUpNumber(600));
