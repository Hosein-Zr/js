/**
 * 📘 General Object Methods in JavaScript/TypeScript
 *
 * These methods help with creating, copying, and transforming objects.
 * Instead of complexity analysis, below you’ll see simple explanations
 * for when and why each is useful.
 */

const person8 = { name: "Alice", age: 28, city: "Paris" };

// ----------------------------------------------------
// 1️⃣ Object.assign(target, source)
// ----------------------------------------------------
/**
 * Copies properties from one or more source objects to a target object.
 * If the same property exists, the source overwrites the target.
 * Common use: merging objects, cloning objects (shallow copy).
 */
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const merged = Object.assign(target, source);
console.log("Object.assign →", merged);
/**
 * Result:
 * { a: 1, b: 4, c: 5 }
 */

// ----------------------------------------------------
// 2️⃣ Object.create(proto)
// ----------------------------------------------------
/**
 * Creates a new object with its prototype set to another object.
 * Very useful for inheritance: the new object can use properties
 * and methods defined in the prototype object.
 */
const proto = {
  greet: function () {
    return "Hello from proto";
  },
};
const obj = Object.create(proto); // obj has no own properties
obj.name = "Bob"; // we add a property to it
console.log("Object.create →", obj.greet(), "Name:", obj.name);
/**
 * Result:
 * Hello from proto Name: Bob
 *
 * Explanation:
 * - `greet` comes from the prototype (proto).
 * - `name` is the object’s own property.
 */

// ----------------------------------------------------
// 3️⃣ Object.entries(object)
// ----------------------------------------------------
/**
 * Returns an array of [key, value] pairs.
 * Common use: iterating keys and values together with loops or map.
 */
const entries2 = Object.entries(person8);
console.log("Object.entries →", entries2);
/**
 * Result:
 * [ ['name', 'Alice'], ['age', 28], ['city', 'Paris'] ]
 */

// ----------------------------------------------------
// 4️⃣ Object.fromEntries(iterable)
// ----------------------------------------------------
/**
 * Opposite of Object.entries: turns an array of [key, value] pairs
 * back into an object.
 * Common use: transforming data before rebuilding into an object.
 */
const pairs = [
  ["x", 10],
  ["y", 20],
];
const objFromEntries = Object.fromEntries(pairs);
console.log("Object.fromEntries →", objFromEntries);
/**
 * Result:
 * { x: 10, y: 20 }
 */

// ----------------------------------------------------
// 5️⃣ Object.keys(object)
// ----------------------------------------------------
/**
 * Returns an array of the object’s keys.
 * Common use: iterate over just the property names.
 */
console.log("Object.keys →", Object.keys(person8));
/**
 * Result:
 * [ 'name', 'age', 'city' ]
 */

// ----------------------------------------------------
// 6️⃣ Object.values(object)
// ----------------------------------------------------
/**
 * Returns an array of the object’s values.
 * Common use: iterate over just the property values.
 */
console.log("Object.values →", Object.values(person8));
/**
 * Result:
 * [ 'Alice', 28, 'Paris' ]
 */

// ----------------------------------------------------
// 7️⃣ Object.groupBy(array, callback) (Stage 3 proposal)
// ----------------------------------------------------
/**
 * Groups items of an array based on the return value of a callback.
 * Useful for categorizing data.
 * ⚠️ Only available in Node.js 20+ and modern browsers.
 */
const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
];

if ((Object as any).groupBy) {
  const grouped = (Object as any).groupBy(students, (s: any) => s.grade);
  console.log("Object.groupBy →", grouped);
  /**
   * Result:
   * {
   *   A: [ { name: 'Alice', grade: 'A' }, { name: 'Charlie', grade: 'A' } ],
   *   B: [ { name: 'Bob', grade: 'B' } ]
   * }
   */
}
