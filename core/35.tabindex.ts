/**
 * ==========================================
 * Keyboard Navigation: tabindex & Focus Management
 * ==========================================
 *
 * 1. tabindex
 * ------------------------------------------
 * - Purpose: Controls the order in which elements receive focus when using TAB.
 * - Values:
 *    - 0   → Element is focusable in normal tab order.
 *    - -1  → Element is focusable only with JavaScript (.focus()), not by TAB.
 *    - >0  → Custom tab order (AVOID: breaks natural flow).
 *
 * Examples:
 *   <button>One</button>
 *   <button tabindex="2">Two</button>   // discouraged
 *   <button tabindex="1">Three</button> // discouraged
 *   → Focus order will be: Three → Two → One
 *
 * ✅ Best practice: Only use 0 and -1
 *
 *
 * 2. Focus Management
 * ------------------------------------------
 * - `.focus()` → Programmatically move focus to an element.
 * - Used for:
 *    - Modals: trap focus inside modal
 *    - Skip links: jump to main content
 *    - Error handling: move focus to invalid field
 *
 * Example:
 *   element.focus();
 *
 * ⚠️ Rule: Never steal focus unexpectedly (annoying & confusing).
 *
 *
 * ==========================================
 * Zero → Hero Subtopics
 * ------------------------------------------
 * - Tabindex: 0, -1, >0 (why avoid >0)
 * - Focus trap in modals
 * - Skip links
 * - Managing focus on error
 * ==========================================
 */

// PRACTICAL EXAMPLES (TypeScript DOM API):

// 1. TABINDEX Example
const divFocusable = document.createElement("div");
divFocusable.textContent = "Focusable div (tabindex=0)";
divFocusable.setAttribute("tabindex", "0");
document.body.appendChild(divFocusable);

const divNotTabbable = document.createElement("div");
divNotTabbable.textContent = "Not tabbable (tabindex=-1)";
divNotTabbable.setAttribute("tabindex", "-1");
document.body.appendChild(divNotTabbable);

// 2. FOCUS Example (simulate modal)
const modal = document.createElement("div");
modal.setAttribute("role", "dialog");
modal.style.border = "2px solid black";
modal.style.padding = "10px";
modal.textContent = "This is a modal";
document.body.appendChild(modal);

// Add a close button
const closeBtn = document.createElement("button");
closeBtn.textContent = "Close modal";
modal.appendChild(closeBtn);

// When modal opens → move focus inside
modal.focus = () => {
  closeBtn.focus(); // focus the first interactive element
};

// Simulate modal opening after 2s
setTimeout(() => {
  modal.focus();
}, 2000);

// 3. ERROR HANDLING Example
const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Enter your email";
document.body.appendChild(emailInput);

const errorMsg = document.createElement("div");
errorMsg.style.color = "red";
document.body.appendChild(errorMsg);

setTimeout(() => {
  errorMsg.textContent = "❌ Invalid email address";
  emailInput.focus(); // move focus back to input for correction
}, 5000);
