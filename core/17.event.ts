/**
 * ========================================================
 * 📘 DOM & Events in TypeScript (Part B: Events Fundamentals)
 * ========================================================
 *
 * THEORY SECTION:
 *
 * 6. What is an Event?
 *    - An "event" is any interaction that happens in the browser:
 *      clicks, typing on keyboard, mouse movement, scrolling, form submit, etc.
 *    - Browser listens for these events and allows us to react.
 *
 * 7. Event Listeners
 *    - We use addEventListener("eventName", callback) to attach a function.
 *    - Example: button.addEventListener("click", () => { ... })
 *    - We can remove listeners using removeEventListener.
 *
 * 8. Event Object
 *    - The callback of an event listener receives an "event" object.
 *    - It gives details: event.target (the element that triggered),
 *      event.currentTarget (the element the listener is attached to),
 *      key pressed (for keyboard), mouse coordinates (for mouse).
 *
 * 9. Default Actions & preventDefault()
 *    - Some events have default browser behavior:
 *      - Clicking a link navigates away
 *      - Submitting a form reloads the page
 *    - We use event.preventDefault() to stop that.
 *
 * 10. stopPropagation()
 *    - Events "bubble up" from child → parent elements.
 *    - If you want to stop this bubbling, use event.stopPropagation().
 *
 * ========================================================
 * PRACTICAL SECTION:
 * Example HTML to test this:
 *
 * <div id="app">
 *   <input id="myInput" value="123" />
 *   <button id="myBtn">Click Me</button>
 *   <form id="myForm">
 *     <input type="text" name="username" />
 *     <button type="submit">Submit</button>
 *   </form>
 * </div>
 *
 * ========================================================
 */

// 6 & 7. Event Listener Example
const btn = document.querySelector<HTMLButtonElement>("#myBtn");
btn?.addEventListener("click", () => {
  console.log("Button clicked!");
});

// 8. Event Object Example
btn?.addEventListener("click", (event: MouseEvent) => {
  console.log("Event object:", event);
  console.log("Target element:", event.target); // the clicked element
});

// 9. preventDefault Example (form submission)
const form = document.querySelector<HTMLFormElement>("#myForm");
form?.addEventListener("submit", (event: Event) => {
  event.preventDefault(); // stop form from reloading the page
  console.log("Form submitted but prevented default reload!");
});

// 10. stopPropagation Example
const parentDiv = document.createElement("div");
parentDiv.setAttribute("id", "parent");
parentDiv.style.border = "2px solid red";
parentDiv.style.padding = "10px";
parentDiv.innerText = "Parent Div (click me!)";

const childBtn = document.createElement("button");
childBtn.innerText = "Child Button (click me!)";

parentDiv.appendChild(childBtn);
appDiv?.appendChild(parentDiv);

// Parent click
parentDiv.addEventListener("click", () => {
  console.log("Parent div clicked");
});

// Child click with stopPropagation
childBtn.addEventListener("click", (event: MouseEvent) => {
  event.stopPropagation(); // stops bubbling
  console.log("Child button clicked, event not passed to parent");
});
