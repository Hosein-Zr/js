/**
 * ========================================================
 * 📘 DOM & Events in TypeScript
 * Parts A + B + C + D
 * ========================================================
 *
 * We now add:
 *  - D.1 Typing Event Objects
 *  - D.2 Strongly typing querySelector with generics
 *  - D.3 Handling null-safety
 *  - D.4 Using interfaces for custom events
 * ========================================================
 */

/**
 * D.1 Typing Event Objects
 * ------------------------
 * In TypeScript, different events have specific types:
 *  - MouseEvent → for click, mousemove, etc.
 *  - KeyboardEvent → for keydown, keyup
 *  - InputEvent → for input fields
 *  - Event → for generic cases (form submit, change)
 *
 * This prevents mistakes, because you get IntelliSense for the right properties.
 */

const typedBtn = document.querySelector<HTMLButtonElement>("#typedBtn");

typedBtn?.addEventListener("click", (event: MouseEvent) => {
  console.log("Mouse clicked at:", event.clientX, event.clientY);
});

document.addEventListener("keydown", (event: KeyboardEvent) => {
  console.log("Key pressed:", event.key);
});

/**
 * D.2 Strongly Typing querySelector with Generics
 * -----------------------------------------------
 * querySelector<T>() allows us to specify the exact element type.
 * Example:
 *  - querySelector<HTMLInputElement>("#username")
 *  - querySelector<HTMLFormElement>("#myForm")
 */

const usernameInput = document.querySelector<HTMLInputElement>("#username");
if (usernameInput) {
  usernameInput.value = "TypeScript ensures this is an input!";
}

/**
 * D.3 Handling Null-Safety
 * ------------------------
 * querySelector may return null. To handle this:
 *  - Use if checks
 *  - Use optional chaining (?.)
 *  - Use non-null assertion (!), but carefully
 */

const safeInput = document.querySelector<HTMLInputElement>("#safeInput");

// Option 1: if-check
if (safeInput) {
  safeInput.value = "Checked for null!";
}

// Option 2: optional chaining
console.log("Safe input value:", safeInput?.value);

// Option 3: non-null assertion (!) – be careful!
const forcedInput = document.querySelector<HTMLInputElement>("#forcedInput")!;
forcedInput.value = "I assume it exists!";

/**
 * D.4 Custom Events with Interfaces
 * ---------------------------------
 * We can create strongly typed custom events.
 * Example: passing data with detail field in CustomEvent.
 */

interface UserLoginDetail {
  username: string;
  time: Date;
}

const loginEvent = new CustomEvent<UserLoginDetail>("userLogin", {
  detail: { username: "Habib", time: new Date() },
});

document.addEventListener("userLogin", (event) => {
  const customEvent = event as CustomEvent<UserLoginDetail>;
  console.log("User logged in:", customEvent.detail.username);
});

// Dispatch the custom event
document.dispatchEvent(loginEvent);
