/**
 * Example: Counter object with getters and setters
 * using Object.defineProperty.
 *
 * The object name here is `counterObj` instead of `obj`.
 */

const counterObj: any = { counter: 0 };

Object.defineProperty(counterObj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(counterObj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(counterObj, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(counterObj, "add", {
  set: function (value: number) {
    this.counter += value;
  },
});
Object.defineProperty(counterObj, "subtract", {
  set: function (value: number) {
    this.counter -= value;
  },
});

// ✅ Play with the counter
counterObj.reset; // set to 0
counterObj.add = 5; // +5
counterObj.subtract = 1; // -1
counterObj.increment; // +1
counterObj.decrement; // -1

console.log("Final counter =", counterObj.counter);
/**
 * Result:
 * Final counter = 4
 */
