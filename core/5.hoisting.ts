/**
 * ========================================================
 * HOISTING IN TYPESCRIPT (AND JAVASCRIPT)
 * ========================================================
 *
 * 🧠 THEORY:
 *
 * Hoisting is JavaScript's default behavior of moving
 * DECLARATIONS (not initializations) to the top of their scope
 * before execution.
 *
 * Important points:
 * 1. Only declarations are hoisted, not initializations.
 *    Example: var x = 5; → "var x;" is hoisted, "= 5" stays.
 *
 * 2. Function declarations are hoisted entirely.
 *    - You can call them before they appear in code.
 *
 * 3. Variables declared with "var" are hoisted and initialized
 *    with "undefined".
 *
 * 4. Variables declared with "let" and "const" are hoisted too,
 *    but placed in a "Temporal Dead Zone (TDZ)" until execution
 *    reaches the declaration line. Accessing them before that
 *    line throws a ReferenceError.
 *
 * 5. Function expressions and arrow functions are NOT hoisted
 *    like function declarations. They behave like variables,
 *    so their availability depends on var/let/const rules.
 *
 * --------------------------------------------------------
 * TL;DR:
 * - var → hoisted, initialized as undefined
 * - let/const → hoisted, but TDZ (no use before line)
 * - function declaration → fully hoisted
 * - function expression / arrow → behave like variable
 *
 * ========================================================
 * PRACTICAL CODE EXAMPLES
 * ========================================================
 */

// --------------------------------------------------------
// Example 1: var is hoisted
// --------------------------------------------------------
console.log("Example 1:");
console.log(a); // Output: undefined (var declaration hoisted, but not the value)
var a = 10;
// Internally: var a; console.log(a); a = 10;
console.log(a); // 10

console.log("-----------------------------------");

// --------------------------------------------------------
// Example 2: let and const are hoisted differently
// --------------------------------------------------------
console.log("Example 2:");

// Uncommenting these lines will throw ReferenceError due to TDZ
// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // ✅ 20

// console.log(c); // ❌ ReferenceError
const c = 30;
console.log(c); // ✅ 30

console.log("-----------------------------------");

// --------------------------------------------------------
// Example 3: Function Declarations are fully hoisted
// --------------------------------------------------------
console.log("Example 3:");
sayHello(); // ✅ Works even before its definition

function sayHello() {
  console.log("Hello, I'm hoisted!");
}

console.log("-----------------------------------");

// --------------------------------------------------------
// Example 4: Function Expressions with var
// --------------------------------------------------------
console.log("Example 4:");
// greet(); // ❌ TypeError: greet is not a function
var greet = function () {
  console.log("Hi there!");
};
greet(); // ✅ Works after assignment

console.log("-----------------------------------");

// --------------------------------------------------------
// Example 5: Arrow Functions with let/const
// --------------------------------------------------------
console.log("Example 5:");
// arrowGreet(); // ❌ ReferenceError
const arrowGreet = () => {
  console.log("Hello from arrow function");
};
arrowGreet(); // ✅ Works after definition

console.log("-----------------------------------");

// --------------------------------------------------------
// Example 6: Hoisting inside functions (local scope)
// --------------------------------------------------------
console.log("Example 6:");
function testScope() {
  console.log(innerVar); // undefined (var is hoisted inside scope)
  var innerVar = "I exist in function scope";

  // console.log(innerLet); // ❌ ReferenceError
  let innerLet = "I'm block scoped in function";
  console.log(innerLet);
}
testScope();
