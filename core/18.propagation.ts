/**
 * ========================================================
 * 📘 propagation.ts – Standalone Demo
 * ========================================================




📘 Event Propagation (Detailed Explanation)
When an event (like click) happens on an element, it doesn’t just stop there. It goes through three phases:

1. Capturing Phase (a.k.a. "trickling down")
The browser starts from the top of the DOM tree (the document) and travels downward until it reaches the element where the event occurred.
Normally, we don’t handle events here unless we specify { capture: true }.

2. Target Phase
The event reaches the target element (the one that was actually clicked or interacted with).
Example: if you click on a <button>, the button is the target.

3. Bubbling Phase
After the target, the event travels back up the DOM tree (from child → parent → grandparent → document).
This is the default phase most event listeners use.

📍 Analogy
Imagine you drop a stone into water:
First, waves travel down (capturing).
Then they reach the stone (target).
Then waves bounce back up (bubbling).

🔹 Default Behavior
In JavaScript, event listeners without { capture: true } listen during the bubbling phase.
That’s why a parent <div> can “catch” a click even if you click a button inside it.

📘 stopPropagation()
If you call event.stopPropagation(), the event stops traveling further.

Example: if you click a child element and stopPropagation inside its listener, the parent won’t receive the event.

 * This file focuses ONLY on propagation, bubbling, capturing.
 *
 * How to test:
 *   1. Create an index.html with:
 *      <div id="outer" style="border:2px solid blue; padding:20px;">
 *        Outer Div
 *        <div id="inner" style="border:2px solid green; padding:20px;">
 *          Inner Div
 *          <button id="childBtn">Click Me</button>
 *        </div>
 *      </div>
 *   2. Compile TS → JS and include in HTML.
 *   3. Open in browser and click the button.
 *
 * ========================================================
 * THEORY:
 *  - Capturing: top → down
 *  - Target: element itself
 *  - Bubbling: bottom → up
 *  - stopPropagation: stops further travel
 * ========================================================
 */

const outerDiv2 = document.getElementById("outer");
const innerDiv2 = document.getElementById("inner");
const childBtn3 = document.getElementById("childBtn");

// Bubbling phase (default)
outerDiv2?.addEventListener("click", () => {
  console.log("[BUBBLE] Outer Div clicked");
});
innerDiv2?.addEventListener("click", () => {
  console.log("[BUBBLE] Inner Div clicked");
});
childBtn3?.addEventListener("click", () => {
  console.log("[BUBBLE] Button clicked");
});

// Capturing phase
outerDiv2?.addEventListener(
  "click",
  () => {
    console.log("[CAPTURE] Outer Div clicked");
  },
  { capture: true }
);
innerDiv2?.addEventListener(
  "click",
  () => {
    console.log("[CAPTURE] Inner Div clicked");
  },
  { capture: true }
);
childBtn3?.addEventListener(
  "click",
  () => {
    console.log("[CAPTURE] Button clicked");
  },
  { capture: true }
);

// Stop bubbling
childBtn3?.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Button clicked – bubbling stopped here.");
});
