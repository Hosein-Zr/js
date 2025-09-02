/**
 * ========================================================
 * 📘 DOM & Events in TypeScript (Part A: DOM Basics)
 * ========================================================
 *
 * THEORY SECTION:
 *
 * 1. The DOM (Document Object Model)
 *    - A tree-like structure representing all elements in a web page.
 *    - The "document" object is the entry point to this structure.
 *    - Everything in the HTML (head, body, div, input, button, etc.)
 *      becomes a "node" in the DOM tree.
 *
 * 2. Selecting Elements
 *    - We can grab elements from the DOM using methods like:
 *      - document.getElementById("id")
 *      - document.querySelector(".class")
 *      - document.querySelectorAll("tag")
 *    - TypeScript requires us to typecast the element when we want to
 *      use its specific properties (like HTMLInputElement, HTMLDivElement).
 *
 * 3. Creating & Modifying Elements
 *    - document.createElement("tagName") → creates a new element.
 *    - element.appendChild(), element.append(), element.remove().
 *    - element.innerText / innerHTML → change content.
 *    - element.setAttribute("attr", "value") → change attributes.
 *
 * 4. DOM Properties vs. Attributes
 *    - Properties: direct JS access (input.value, div.id).
 *    - Attributes: HTML-level values (getAttribute, setAttribute).
 *    - Example: <input value="123" /> vs. input.value after user edits.
 *
 * 5. Traversing the DOM
 *    - parentElement, children, firstChild, lastChild, nextElementSibling, previousElementSibling.
 *
 * ========================================================
 * PRACTICAL SECTION:
 * Below are simple TypeScript examples for each concept.
 * Note: This code assumes you have an index.html with
 * some basic elements (<div id="app"></div>).
 * ========================================================
 */

// 1. Selecting Elements
const appDiv = document.getElementById("app"); // returns HTMLElement | null
console.log("App Div:", appDiv);

// Better with querySelector + typing
const inputEl = document.querySelector<HTMLInputElement>("#myInput");
if (inputEl) {
  inputEl.value = "Typed in TypeScript!"; // safe access
}

// 2. Creating & Modifying Elements
const newDiv = document.createElement("div");
newDiv.innerText = "Hello, I was created by TypeScript!";
newDiv.setAttribute("class", "new-div");

// Append it to the app container
appDiv?.appendChild(newDiv);

// 3. DOM Properties vs. Attributes
if (inputEl) {
  console.log("Property value:", inputEl.value); // live value
  console.log("Attribute value:", inputEl.getAttribute("value")); // initial value in HTML
}

// 4. Traversing the DOM
if (appDiv) {
  console.log("Children count:", appDiv.children.length);
  if (appDiv.firstElementChild) {
    console.log("First child:", appDiv.firstElementChild.tagName);
  }
}
