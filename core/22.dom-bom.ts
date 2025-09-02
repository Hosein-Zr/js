    /**
 * dom-bom.ts
 *
 * THEORY:
 * - DOM (Document Object Model) API lets you manipulate HTML elements (add, remove, change).
 * - BOM (Browser Object Model) refers to browser-provided objects like window, history, location, navigator.
 * As a frontend developer, these are your foundation for interacting with the browser environment.
 */

// Example: Access and update an element
const heading = document.getElementById("my-heading"); // get element by id
if (heading) {
  heading.textContent = "Updated via DOM API"; // update text
  heading.style.color = "blue"; // change style
}

// Example: Create and append a new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This paragraph was added dynamically!";
document.body.appendChild(newParagraph);

// Example: BOM – working with window and location
console.log("Window inner size:", window.innerWidth, window.innerHeight);
console.log("Current URL:", window.location.href);

// Example: Redirect to another page (commented out)
// window.location.href = "https://example.com";

// Example: Navigator API (part of BOM)
console.log("User Agent:", navigator.userAgent);
console.log("Online Status:", navigator.onLine);

// Example: History API
console.log("History length:", history.length);
// history.back(); // go to previous page
// history.forward(); // go to next page
