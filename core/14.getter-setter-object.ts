// Define testObject
const testObj = { counter: 0 };

// Define setters and getters
Object.defineProperty(testObj, "reset", {
  get: function () {
    this.counter = 0;
  },
});
Object.defineProperty(testObj, "increment", {
  get: function () {
    this.counter++;
  },
});
Object.defineProperty(testObj, "decrement", {
  get: function () {
    this.counter--;
  },
});
Object.defineProperty(testObj, "add", {
  set: function (value) {
    this.counter += value;
  },
});
Object.defineProperty(testObj, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});

// Play with the counter:
testObj.reset;
testObj.add = 5;
testObj.subtract = 1;
testObj.increment;
testObj.decrement;
