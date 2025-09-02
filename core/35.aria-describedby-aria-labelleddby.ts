/**
 * ==========================================
 * ARIA Attributes: aria-labelledby & aria-describedby
 * ==========================================
 * 
 * 1. aria-labelledby
 * ------------------------------------------
 * - Purpose: Tells assistive technologies what element LABELS this element.
 * - Works like <label for="..."> but more flexible.
 * - You pass the ID of another element → that element’s text becomes the label.
 * - Can reference multiple IDs (space-separated).
 * 
 * Example:
 *   <div id="title">Delete File</div>
 *   <button aria-labelledby="title">X</button>
 * 
 *   → Screen reader announces: "Delete File, button"
 * 
 * Benefits:
 * - Better than aria-label when text already exists on screen.
 * - Keeps visible and accessible text in sync.
 * 
 * 
 * 2. aria-describedby
 * ------------------------------------------
 * - Purpose: Gives EXTRA description (help text, hints, warnings).
 * - Similar to aria-labelledby but adds **supplemental info**.
 * - You pass the ID of the element containing the description.
 * 
 * Example:
 *   <input2 id="username" type="text" aria-describedby="hint" />
 *   <div id="hint">Username must be at least 6 characters.</div>
 * 
 *   → Screen reader: "Edit text, Username must be at least 6 characters"
 * 
 * Benefits:
 * - Great for forms (error messages, hints).
 * - Does not replace the label, only extends it.
 * 
 * ==========================================
 * Zero → Hero Subtopics
 * ------------------------------------------
 * - aria-labelledby: multiple IDs, sync with visible text
 * - aria-describedby: supplemental info, not primary label
 * - Difference: label = "what it is", describedby = "extra info"
 * ==========================================
 */


// PRACTICAL EXAMPLES (TypeScript DOM API):

// 1. ARIA-LABELLEDBY Example
const title = document.createElement("div");
title.id = "deleteTitle";
title.textContent = "Delete File";
document.body.appendChild(title);

const deleteButton = document.createElement("button");
deleteButton.textContent = "X"; // visually just an "X"
deleteButton.setAttribute("aria-labelledby", "deleteTitle");
// Screen reader: "Delete File, button"
document.body.appendChild(deleteButton);


// 2. ARIA-DESCRIBEDBY Example
const input2 = document.createElement("input");
input2.type = "text";
input2.id = "usernameinput2";
document.body.appendChild(input2);

const hint = document.createElement("div");
hint.id = "usernameHint";
hint.textContent = "Username must be at least 6 characters.";
document.body.appendChild(hint);

// Link them
input2.setAttribute("aria-describedby", "usernameHint");
// Screen reader: "Edit text, Username must be at least 6 characters"

