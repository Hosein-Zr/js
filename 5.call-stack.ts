// ==================================================
// 📘 CALL STACK WORKBOOK
// ==================================================
//
// 📖 THEORY
// --------------------------------------------------
// The Call Stack is a stack data structure (LIFO = last in, first out).
// - It keeps track of the currently running function and its context.
// - Each function call PUSHES onto the stack.
// - When the function finishes, it POPS off the stack.
// - JavaScript is single-threaded: only one stack, one thing at a time.
//
// Example (mental model):
// []        → empty
// [a]       → call a()
// [a, b]    → inside a → b()
// [a, b, c] → inside b → c()
// [a, b]    → c finished
// [a]       → b finished
// []        → a finished
//
// --------------------------------------------------
// Stack Overflow happens if recursion never ends.
// Example: function recurse() { recurse(); }
//
// ==================================================
// PRACTICAL EXERCISES
// ==================================================

console.log("===== EXERCISE 1: Simple Calls =====");

function c() {
  console.log("c called");
}
function b() {
  console.log("b start");
  c();
  console.log("b end");
}
function a() {
  console.log("a start");
  b();
  console.log("a end");
}
a();
// ❓ Predict the order

console.log("\n===== EXERCISE 2: Nested Functions =====");

function outer() {
  console.log("outer start");

  function inner() {
    console.log("inner function");
  }

  inner();
  console.log("outer end");
}
outer();
// ❓ What’s the stack evolution?

console.log("\n===== EXERCISE 3: Return Values =====");

function add(x: number, y: number): number {
  return x + y;
}
function calc() {
  const result = add(2, 3);
  console.log("result is", result);
}
calc();
// ❓ Where is `add` on the stack and when is it popped?

console.log("\n===== EXERCISE 4: Stack Overflow =====");

function recurse(n: number) {
  console.log("depth", n);
  recurse(n + 1);
}
// ⚠️ Uncomment to see stack overflow
// recurse(1);

// ==================================================
// ✅ ANSWERS & EXPLANATIONS
// ==================================================
//
// EX1:
// a start → b start → c called → b end → a end
// Stack goes: [a] → [a,b] → [a,b,c] → pop c → [a,b] → pop b → [a]
//
// EX2:
// outer start → inner function → outer end
// Stack goes: [outer] → [outer,inner] → pop inner → [outer]
//
// EX3:
// Stack: [calc] → [calc,add] → add returns → [calc]
// Output: result is 5
//
// EX4:
// Infinite push until RangeError: Maximum call stack size exceeded
//
// --------------------------------------------------
