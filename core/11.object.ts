/**
 * 📘 Theory:
 * The `Object.assign()` method in JavaScript/TypeScript is used to copy
 * properties from one or more source objects into a target object.
 *
 * - Syntax: Object.assign(target, ...sources)
 * - It **modifies the target object** and returns it.
 * - If the source object has the same property as the target,
 *   the source value will overwrite the target value.
 *
 * In this example:
 * - `person1` is the target.
 * - `person2` is the source.
 * - Properties from `person2` will overwrite those in `person1` if they share the same keys.
 */

// Create Target Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };

// Assign Source to Target (overwrites firstName and lastName in person1)
Object.assign(person1, person2);

console.log(person1);

/**
 * 💻 Result of running this code:
 * {
 *   firstName: "Anne",
 *   lastName: "Smith",
 *   age: 50,
 *   eyeColor: "blue"
 * }
 */


// *____________________________________________________________________________________

/**
 * 📘 Theory:
 * Objects in TypeScript can contain nested objects.
 * You can access these properties using:
 * 
 * 1. Dot Notation → `myObj.myCars.car2`
 * 2. Mixed Dot + Bracket → `myObj.myCars["car2"]`
 * 3. Full Bracket → `myObj["myCars"]["car2"]`
 * 4. Dynamic Access with Variables → `myObj[p1][p2]`
 * 
 * 🗑 Deleting a Property:
 * - Use the `delete` keyword → `delete myObj.myCars.car2;`
 * - This removes the property completely from the object.
 */
/**
 * Fixed version with proper types for dynamic access and delete.
 */

type Cars = {
  car1?: string;
  car2?: string;
  car3?: string;
};

type MyObj = {
  [key: string]: Cars;
};

const myObj: MyObj = {
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
};

// 🔑 Dynamic property access
let p1: keyof MyObj = "myCars";
let p2: keyof Cars = "car2";

console.log(myObj[p1][p2]); 
// Result: BMW

// 🗑 Deleting a property
delete myObj.myCars.car2;

console.log(myObj);
/**
 * Result:
 * {
 *   myCars: {
 *     car1: "Ford",
 *     car3: "Fiat"
 *   }
 * }
 */


// *____________________________________________________________________________________

/**
 * 📘 Theory:
 * - Objects in TypeScript can contain methods (functions as properties).
 * - To call a method, use `object.methodName()`.
 * - If you access the method without `()`, you get the function definition itself.
 * - You can also use built-in JavaScript methods (like `toUpperCase()`) inside object methods.
 */

type Person = {
  firstName: string;
  lastName: string;
  id: number;
  fullName: () => string;
  name?: () => string; // optional, we’ll add later
};

const person: Person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};



// 1️⃣ Calling the method with `()`
let name1 = person.fullName();
console.log(name1);
/**
 * Result:
 * John Doe
 */

// 2️⃣ Accessing the method without `()`
let name2 = person.fullName;
console.log(name2);
/**
 * Result:
 * [Function: fullName]
 * (function definition is returned, not executed)
 */

// 3️⃣ Adding a new method using a JavaScript string method
person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

let name3 = person.name();
console.log(name3);
/**
 * Result:
 * JOHN DOE
 */
// *____________________________________________________________________________________



/**
 * 📘 Theory:
 * - `Object.values(obj)` returns an array of all property values in the object.
 * - `for...in` loop iterates over the keys of the object, and you can access values via obj[key].
 *
 * 🔎 Big-O Complexity:
 * - `Object.values(obj)` → O(n) because it must traverse all properties once and create a new array.
 * - `for...in` loop → O(n) because it also traverses all properties, but doesn’t create a new array.
 *
 * 🚀 Difference:
 * - Use `Object.values()` if you need values as an array (good for mapping, filtering, reducing).
 * - Use `for...in` when you want to iterate dynamically over keys and maybe apply custom logic.
 */

type Person3 = {
  name: string;
  age: number;
  city: string;
};

const person3: Person3 = {
  name: "John",
  age: 30,
  city: "New York"
};

// 1️⃣ Using Object.values()
const myArray = Object.values(person);
console.log(myArray);
/**
 * Result:
 * [ 'John', 30, 'New York' ]
 */

// You can also convert array to string
let text1 = myArray.toString();
console.log(text1);
/**
 * Result:
 * John,30,New York
 */

// 2️⃣ Using for...in loop
let text2 = "";
for (let key in person) {
  // TS needs type assertion since key is string
  text2 += (person as any)[key] + " ";
}
console.log(text2.trim());
/**
 * Result:
 * John 30 New York
 */

// *____________________________________________________________________________________

/**
 * 📘 Theory:
 * - `Object.entries(obj)` returns an array of `[key, value]` pairs from the object.
 * - Each entry is a tuple: [string, any].
 *
 * Example:
 *   const obj = { a: 1, b: 2 };
 *   Object.entries(obj) → [ ["a", 1], ["b", 2] ]
 *
 * 🔎 Big-O Complexity:
 * - Time Complexity: O(n), where n = number of keys in the object (must traverse all).
 * - Space Complexity: O(n), because it creates a new array of tuples.
 *
 * 🚀 Use Cases:
 * - When you need both keys and values together.
 * - Useful for iterating via `.forEach`, `.map`, or `for...of`.
 * - More structured than `for...in` and safer with `Object.hasOwnProperty` checks.
 */

type Person4 = {
  name: string;
  age: number;
  city: string;
};

const person4: Person4 = {
  name: "John",
  age: 30,
  city: "New York"
};

// 1️⃣ Using Object.entries()
const entries = Object.entries(person);
console.log(entries);
/**
 * Result:
 * [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ] ]
 */

// 2️⃣ Iterating with for...of
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
/**
 * Result:
 * name: John
 * age: 30
 * city: New York
 */

// 3️⃣ Using forEach
entries.forEach(([key, value]) => {
  console.log(`Key = ${key}, Value = ${value}`);
});
/**
 * Result:
 * Key = name, Value = John
 * Key = age, Value = 30
 * Key = city, Value = New York
 */

// 4️⃣ Converting entries back to object
const backToObject = Object.fromEntries(entries);
console.log(backToObject);
/**
 * Result:
 * { name: 'John', age: 30, city: 'New York' }
 */
// *____________________________________________________________________________________
/**
 * 📘 Better Approach in TypeScript:
 * Use a `class` instead of constructor functions. Classes give type safety
 * and support methods directly.
 */

class PersonClass {
  firstName: string;
  lastName: string;
  age: number;
  eyeColor: string;

  constructor(first: string, last: string, age: number, eye: string) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

// ✅ Usage
const person5 = new PersonClass("Jane", "Smith", 25, "green");
console.log(person5.fullName());
/**
 * Result:
 * Jane Smith
 */
// *____________________________________________________________________________________
/**
 * 📘 In modern TypeScript, you don’t need to manually use prototypes.
 * - You just define methods inside a `class`.
 * - The compiler automatically attaches them to the prototype behind the scenes.
 */

class PersonClass2 {
  firstName: string;
  lastName: string;

  constructor(first: string, last: string) {
    this.firstName = first;
    this.lastName = last;
  }

  changeName(name: string) {
    this.lastName = name;
  }
}

const myMother2 = new PersonClass2("Sally", "Rally");
myMother2.changeName("Doe");
console.log(myMother2);
/**
 * Result:
 * PersonClass { firstName: 'Sally', lastName: 'Doe' }
 */
// *____________________________________________________________________________________
/**
 * 📘 Theory:
 * Destructuring in JavaScript/TypeScript allows you to unpack values
 * from objects and arrays into separate variables.
 * 
 * - Object Destructuring → { key } = obj
 * - Array Destructuring → [a, b] = arr
 * - Skipping Values → use commas to skip positions
 * - Specific Positions → use object-like mapping for array indices
 * - Rest Property → collect remaining items into an array
 * 
 * 🔎 Complexity:
 * - Accessing object or array values during destructuring is O(1).
 * - Destructuring an array/object of size n is O(n) (because it must walk through elements).
 */

// ----------------------------------------------------
// 1️⃣ Object Destructuring
// ----------------------------------------------------
const person6 = { firstName: "John", lastName: "Doe", age: 30 };

let { firstName, lastName } = person6;
console.log(firstName, lastName);
/**
 * Result:
 * John Doe
 */

// ----------------------------------------------------
// 2️⃣ Array Destructuring
// ----------------------------------------------------
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

let [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2);
/**
 * Result:
 * Bananas Oranges
 */

// ----------------------------------------------------
// 3️⃣ Skipping Array Values
// ----------------------------------------------------
let [f1, , , f2] = fruits;
console.log(f1, f2);
/**
 * Result:
 * Bananas Mangos
 */

// ----------------------------------------------------
// 4️⃣ Picking Array Values by Position
// ----------------------------------------------------
let { 0: firstFruit, 2: thirdFruit } = fruits;
console.log(firstFruit, thirdFruit);
/**
 * Result:
 * Bananas Apples
 */

// ----------------------------------------------------
// 5️⃣ Rest Property
// ----------------------------------------------------
const numbers = [10, 20, 30, 40, 50, 60, 70];

const [n1, n2, ...rest] = numbers;
console.log(n1, n2, rest);
/**
 * Result:
 * 10 20 [30, 40, 50, 60, 70]
 */

// ----------------------------------------------------
// 🔎 Big-O Comparison
// ----------------------------------------------------
/**
 * Object Destructuring → O(n) where n = # of keys unpacked
 * Array Destructuring → O(n) where n = # of values unpacked
 * Skipping Values → Still O(n) (must traverse skipped indexes)
 * Picking Specific Positions → O(k), k = number of picks (direct index access O(1))
 * Rest Property → O(n) because it collects remaining values into a new array
 */
