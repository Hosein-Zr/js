/**
 * ==========================================
 * ARIA Attributes: aria-hidden, aria-live
 * ==========================================
 *
 * 1. aria-hidden
 * ------------------------------------------
 * - Purpose: Hides elements from assistive technologies (like screen readers).
 * - Visual users STILL see the element.
 * - Useful when:
 *    a) You have duplicate content (e.g., icon + text).
 *    b) You want to hide decorative elements (like SVGs).
 *
 * Example:
 *   <span aria-hidden="true">★</span>
 *   <span>Favorite</span>
 *
 *   → Screen reader ignores the star, but still reads "Favorite".
 *
 * ⚠️ Warning: Never use `aria-hidden="true"` on interactive elements (buttons, inputs).
 *    That would make them invisible to screen readers → major accessibility issue.
 *
 *
 * 2. aria-live
 * ------------------------------------------
 * - Purpose: Announces **dynamic updates** to screen readers (without requiring focus).
 * - Used in areas where content updates automatically (like notifications, chat, or form validation).
 * - Values:
 *    - "off" (default): Screen readers ignore changes.
 *    - "polite": Announces changes when user is idle (non-intrusive).
 *    - "assertive": Interrupts immediately → only for urgent messages.
 *
 * Example:
 *   <div aria-live="polite">Form submitted successfully</div>
 *
 *   → If the message appears dynamically, screen readers will announce it automatically.
 *
 * ==========================================
 * Zero → Hero Subtopics
 * ------------------------------------------
 * - aria-hidden: hide duplicates, hide decoration, avoid misuse
 * - aria-live: polite vs assertive, use cases
 * ==========================================
 */

// PRACTICAL EXAMPLES (TypeScript DOM API):

// 1. ARIA-HIDDEN Example
const star = document.createElement("span");
star.textContent = "★";
star.setAttribute("aria-hidden", "true"); // screen reader ignores this
document.body.appendChild(star);

const favoriteText = document.createElement("span");
favoriteText.textContent = "Favorite"; // only this is announced
document.body.appendChild(favoriteText);

// 2. ARIA-LIVE Example
const liveRegion = document.createElement("div");
liveRegion.setAttribute("aria-live", "polite"); // announce changes politely
liveRegion.style.border = "1px solid gray";
liveRegion.style.padding = "8px";
liveRegion.textContent = "Waiting for updates...";
document.body.appendChild(liveRegion);

// Simulate a dynamic update
setTimeout(() => {
  liveRegion.textContent = "✅ Form submitted successfully!";
  // Screen reader will announce this automatically
}, 3000);
