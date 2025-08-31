/**
 * 📘 Theory about return in Generators:
 * - You can use `return` inside a generator to give a final value.
 * - That value will show up in the `.next()` result as `{ value: ..., done: true }`.
 * - ⚠️ But: return values are NOT included in `for...of` loops.
 */

// ----------------------------------------------------
// 6️⃣ Generator with Return Value
// ----------------------------------------------------
function* numbersWithReturn() {
  yield 1;
  yield 2;
  return 999; // final return value
}

const gen3 = numbersWithReturn();

console.log("Generator with return:");
console.log(gen3.next()); // { value: 1, done: false }
console.log(gen3.next()); // { value: 2, done: false }
console.log(gen3.next()); // { value: 999, done: true }
console.log(gen3.next()); // { value: undefined, done: true }

// ----------------------------------------------------
// 7️⃣ for...of ignores return value
// ----------------------------------------------------
console.log("\nIterating with for...of:");
for (const val of numbersWithReturn()) {
  console.log(val);
}
/**
 * Result:
 * 1
 * 2
 * (999 is NOT shown, because return value is not part of iteration)
 */

// ----------------------------------------------------
// 8️⃣ Capturing return value directly
// ----------------------------------------------------
const gen4 = numbersWithReturn();

let step;
do {
  step = gen4.next();
  console.log(step);
} while (!step.done);
/**
 * Result:
 * { value: 1, done: false }
 * { value: 2, done: false }
 * { value: 999, done: true }
 */
