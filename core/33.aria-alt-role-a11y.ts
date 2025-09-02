/**
 * ==========================================
 * Semantic HTML: alt, aria-label, and role
 * ==========================================
 *
 * 1. alt (Alternative Text for Images)
 * ------------------------------------------
 * - Purpose: Describes the content of an image for users who cannot see it.
 * - Screen readers read the `alt` text when images don’t load or for visually impaired users.
 * - Always describe the image meaning, NOT the file name.
 * - If image is decorative → use `alt=""` (empty string) so screen readers skip it.
 *
 * Example:
 *   <img src="cat.jpg" alt="A black cat sitting on a chair" />
 *
 *
 * 2. aria-label
 * ------------------------------------------
 * - Purpose: Gives an accessible name to an element that otherwise has no visible label.
 * - Used when text is not visually present but needed for assistive tech.
 * - Works on interactive elements (buttons, links, inputs).
 * - DO NOT use `aria-label` when a visible label exists (prefer semantic HTML first).
 * * A visible label is simply text on the screen that already describes the element. 
 * * for example if there is a button which there is only an icon, you need to add it.
 *
 * Example:
 *   <button aria-label="Play music">
 *      <svg>...</svg>   // icon only
 *   </button>
 *
 *
 * 3. role
 * ------------------------------------------
 * - Purpose: Defines what an element *is* to assistive tech.
 * - Many elements already have "implicit roles":
 *     <button> → role="button"
 *     <a href> → role="link"
 *     <nav> → role="navigation"
 * - You only add `role` if:
 *   a) You’re creating a custom component (like a <div> acting as a button).
 *   b) You’re overriding semantics carefully (rarely needed).
 *
 * Example:
 *   <div role="button" tabindex="0">Click me</div>
 *
 * ⚠️ Warning: Never duplicate or misuse roles → it confuses users.
 *
 * ==========================================
 * Zero → Hero Subtopics
 * ------------------------------------------
 * - alt: descriptive vs decorative images
 * - aria-label: when no text is present
 * - role: implicit roles vs explicit roles
 * ==========================================
 */

// PRACTICAL EXAMPLES (TypeScript DOM API):

// 1. ALT attribute example
const img = document.createElement("img");
img.src = "cat.jpg";
img.alt = "A black cat sitting on a chair"; // descriptive alt
document.body.appendChild(img);

// Decorative image → empty alt
const decoImg = document.createElement("img");
decoImg.src = "border.png";
decoImg.alt = ""; // screen reader will skip
document.body.appendChild(decoImg);

// 2. ARIA-LABEL example
const iconButton = document.createElement("button");
iconButton.setAttribute("aria-label", "Play music");
// Adding only an icon inside (no visible text)
iconButton.innerHTML = "🎵";
document.body.appendChild(iconButton);

// 3. ROLE example
const customDiv = document.createElement("div");
customDiv.textContent = "Click me";
customDiv.setAttribute("role", "button"); // tell assistive tech it acts like a button
customDiv.setAttribute("tabindex", "0"); // make it keyboard-focusable
customDiv.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    alert("Div clicked via keyboard");
  }
});
document.body.appendChild(customDiv);
