/**
 * ======================================
 * 📖 THEORY OF SCOPE IN TYPESCRIPT
 * ======================================
 *
 * 1. WHAT IS SCOPE?
 * -----------------
 * Scope defines where a variable, function, or class member is accessible.
 * In TS/JS, scope controls visibility and lifetime of identifiers.
 *
 * 2. TYPES OF SCOPE
 * -----------------
 * - Global Scope: declared outside functions/blocks, accessible everywhere.
 * - Function Scope: (var) only visible inside its function.
 * - Block Scope: (let, const) visible only inside { }.
 * - Module Scope: each file is its own module; exports must be explicit.
 * - Lexical Scope: functions remember the scope they were created in (closures).
 * - Class Scope: members have public/private/protected access rules.
 *
 * 3. VARIABLE SHADOWING
 * ---------------------
 * Inner scope variables can override outer ones temporarily.
 *
 * 4. CLOSURES
 * -----------
 * Functions that “remember” variables from their outer scope.
 *
 * 5. HOISTING
 * -----------
 * - var declarations are hoisted (initialized to undefined).
 * - let/const are hoisted too but live in the TDZ (Temporal Dead Zone).
 *
 * 6. BEST PRACTICE
 * ----------------
 * - Use let/const for predictable block scope.
 * - Avoid var unless needed for legacy code.
 *
 * ======================================
 * Below are PRACTICAL EXAMPLES
 * ======================================
 */

// 1. Global Scope
let globalVar = "I am global";

function printGlobal() {
  console.log(globalVar); // ✅ Accessible here
}
printGlobal();

// 2. Function Scope (var)
function functionScopeExample() {
  var funcVar = "I am inside a function";
  console.log(funcVar); // ✅ Works here
}
// console.log(funcVar); ❌ Error: Cannot find name 'funcVar'

// 3. Block Scope (let & const)
function blockScopeExample() {
  if (true) {
    let blockLet = "I am block scoped (let)";
    const blockConst = "I am block scoped (const)";
    var blockVar = "I am function scoped (var)";
    console.log(blockLet); // ✅
    console.log(blockConst); // ✅
    console.log(blockVar); // ✅
  }
  // console.log(blockLet);   ❌ Error
  // console.log(blockConst); ❌ Error
  console.log(blockVar); // ✅ var escapes block!
}
blockScopeExample();

// 4. Module Scope
export const moduleScoped = "Exported variable";
// Only accessible in other files if imported.

// 5. Lexical Scope (Closures)
function outer() {
  let outerVar = "I am defined in outer";

  function inner() {
    // Lexical scope means "inner" can always access outerVar,
    // even if outer() has finished running.
    console.log("Inner sees:", outerVar);
  }

  return inner;
}

const closureFn = outer();
// outer() is finished, but inner() still remembers outerVar
closureFn(); // ✅ prints: "Inner sees: I am defined in outer"


// 6. Variable Shadowing
let shadowVar = "I am outer";

function shadowing() {
  let shadowVar = "I am inner";
  console.log(shadowVar); // "I am inner"
}
shadowing();
console.log(shadowVar); // "I am outer"

// 7. Hoisting
function hoistingExample() {
  // ! If you see warning, it is because of typescript error.
  console.log(hoistedVar); // ✅ undefined (hoisted, but not initialized)
  var hoistedVar = "Now defined";

  // console.log(temporalVar); ❌ ReferenceError: TDZ
  let temporalVar = "TDZ until this line";
}
hoistingExample();

// 8. Class Scope
class Person {
  public name: string; // accessible everywhere
  private secret: string; // only inside this class
  protected nickname: string; // inside class & subclasses

  constructor(name: string, secret: string, nickname: string) {
    this.name = name;
    this.secret = secret;
    this.nickname = nickname;
  }

  revealSecret() {
    console.log(this.secret); // ✅ Allowed
  }
}

class Student extends Person {
  showNickname() {
    console.log(this.nickname); // ✅ Allowed (protected)
    // console.log(this.secret); ❌ Error (private)
  }
}

const john = new Person("John", "Likes pizza", "Johnny");
console.log(john.name); // ✅ "John"
// console.log(john.secret); ❌ Error
// console.log(john.nickname); ❌ Error

/**
 * ======================================
 * 📌 SUMMARY DIAGRAM (TEXT FORM)
 * ======================================
 * Global Scope
 *   └── Function Scope
 *         └── Block Scope
 *                └── Lexical Scope (closures)
 *
 * - var → function scoped, hoisted
 * - let/const → block scoped, TDZ
 * - Classes → add access modifiers
 * - Each .ts file is its own module scope
 */
