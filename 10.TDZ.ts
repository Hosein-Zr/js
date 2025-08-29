/**
 * ========================================================
 * TEMPORAL DEAD ZONE (TDZ) IN TYPESCRIPT
 * ========================================================
 *
 * 🧠 THEORY:
 *
 * The "Temporal Dead Zone" is the period between:
 *   - The moment a block scope is entered
 *   - And the point where a variable (declared with let/const) is initialized
 *
 * During the TDZ:
 * - Accessing the variable → ReferenceError
 *
 * Why?
 * - Because let/const are hoisted but not given a default value.
 * - They stay uninitialized until the execution reaches their line.
 *
 * --------------------------------------------------------
 * Key Rules:
 * - var: initialized as undefined → NO TDZ
 * - let/const: hoisted but uninitialized → TDZ applies
 * - TDZ ends only when code execution reaches declaration line
 *
 * ========================================================
 * PRACTICAL CODE EXAMPLES
 * ========================================================
 */

// --------------------------------------------------------
// Example 1: Simple TDZ with let
// --------------------------------------------------------
console.log("Example 1:");

// console.log(x); // ❌ ReferenceError (x is in TDZ)
let x = 10;
console.log(x); // ✅ 10

console.log("-----------------------------------");

// --------------------------------------------------------
// Example 2: TDZ with const
// --------------------------------------------------------
console.log("Example 2:");

// console.log(y); // ❌ ReferenceError
const y = 20;
console.log(y); // ✅ 20

console.log("-----------------------------------");

// --------------------------------------------------------
// Example 3: TDZ inside a block
// --------------------------------------------------------
console.log("Example 3:");

{
  // console.log(blockVar); // ❌ ReferenceError (TDZ active)
  let blockVar = "Now I exist after this line";
  console.log(blockVar); // ✅ Works
}

console.log("-----------------------------------");

// --------------------------------------------------------
// Example 4: TDZ in functions
// --------------------------------------------------------
console.log("Example 4:");

function showTDZ() {
  // console.log(funcVar); // ❌ ReferenceError (TDZ)
  let funcVar = "Declared inside function scope";
  console.log(funcVar); // ✅ Works here
}

showTDZ();

console.log("-----------------------------------");

// --------------------------------------------------------
// Example 5: TDZ with default parameters
// --------------------------------------------------------
console.log("Example 5:");

function tdzDefault(value = z) {
  // ❌ ReferenceError: Cannot access 'z' before initialization
  return value;
}

// Uncommenting below will throw error
// let z = 50;
// console.log(tdzDefault());

console.log("Default parameter TDZ demo skipped to avoid crash.");

console.log("-----------------------------------");

// --------------------------------------------------------
// Example 6: var vs let contrast
// --------------------------------------------------------
console.log("Example 6:");

// var is hoisted and initialized
console.log(varExample); // ✅ undefined
var varExample = "I am var";
console.log(varExample); // ✅ I am var

// let is hoisted but in TDZ
// console.log(letExample); // ❌ ReferenceError
let letExample = "I am let";
console.log(letExample); // ✅ I am let
