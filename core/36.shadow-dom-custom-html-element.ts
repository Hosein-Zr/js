/**
 * ==========================================
 * Shadow DOM & Custom Elements
 * ==========================================
 *
 * 1. Shadow DOM
 * ------------------------------------------
 * - Purpose: Encapsulates a component’s DOM + styles so they don’t leak into the global page.
 * - Think of it like a “mini-DOM tree” inside an element.
 * - Benefits:
 *    - Style isolation (CSS in shadow does not affect outside, and vice versa).
 *    - Encapsulation of markup (hides implementation details).
 * - Modes:
 *    - "open" → accessible via element.shadowRoot
 *    - "closed" → not accessible via JS
 *
 * Example:
 *   const shadow = element.attachShadow({ mode: "open" });
 *   shadow.innerHTML = `<style>p { color: red; }</style><p>Hello</p>`;
 *
 *
 * 2. Custom Elements
 * ------------------------------------------
 * - Purpose: Create your own HTML elements with custom behavior.
 * - Steps:
 *    a) Create a class that extends HTMLElement
 *    b) Implement lifecycle callbacks
 *         - connectedCallback → when added to DOM
 *         - disconnectedCallback → when removed
 *         - attributeChangedCallback → when attributes change
 *    c) Register with customElements.define("tag-name", Class)
 *
 * Example:
 *   class MyButton extends HTMLElement { ... }
 *   customElements.define("my-button", MyButton);
 *   <my-button></my-button>
 *
 *
 * ==========================================
 * Zero → Hero Subtopics
 * ------------------------------------------
 * - Shadow DOM: open vs closed, style isolation
 * - Slots: <slot> for content projection
 * - Custom Elements: lifecycle callbacks
 * - Combining both: true reusable components
 * ==========================================
 */

// PRACTICAL EXAMPLES (TypeScript DOM API):

// 1. SHADOW DOM Example
const host = document.createElement("div");
host.textContent = "Outside Shadow DOM";
document.body.appendChild(host);

const shadow = host.attachShadow({ mode: "open" });
shadow.innerHTML = `
  <style>
    p { color: red; font-weight: bold; }
  </style>
  <p>Inside Shadow DOM</p>
`;

// 2. CUSTOM ELEMENT Example
class MyGreeting extends HTMLElement {
  connectedCallback() {
    this.textContent = "Hello from a custom element 👋";
  }
}
customElements.define("my-greeting", MyGreeting);

// Add it to page
const greetingEl = document.createElement("my-greeting");
document.body.appendChild(greetingEl);

// 3. CUSTOM ELEMENT with SHADOW DOM Example
class FancyButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>
        button { background: purple; color: white; padding: 6px 12px; border: none; border-radius: 6px; }
      </style>
      <button><slot></slot></button>
    `;
  }
}
customElements.define("fancy-button", FancyButton);

// Usage
const fancy = document.createElement("fancy-button");
fancy.textContent = "Click Me!";
document.body.appendChild(fancy);
