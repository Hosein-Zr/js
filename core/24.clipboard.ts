/**
 * clipboard-api.ts
 *
 * THEORY:
 * - Clipboard API allows you to read from and write to the user's clipboard.
 * - Common use cases: "Copy to clipboard" buttons, pasting content, or integrating with editors.
 * - Modern methods:
 *    navigator.clipboard.writeText(text) → copies text
 *    navigator.clipboard.readText() → reads text
 * - Requires secure context (HTTPS) and user interaction (click/keypress).
 */


// * Raw API works fine, but libraries exist:
// * react-use-clipboard
// * usehooks-ts → useCopyToClipboard()
const copyButton = document.querySelector<HTMLButtonElement>("#copy-btn");
const pasteButton = document.querySelector<HTMLButtonElement>("#paste-btn");
const output = document.querySelector<HTMLParagraphElement>("#output");

// ✅ Copy text to clipboard
if (copyButton) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText("Hello from Clipboard API!");
      console.log("Copied to clipboard ✅");
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  });
}

// ✅ Paste text from clipboard
if (pasteButton && output) {
  pasteButton.addEventListener("click", async () => {
    try {
      const text = await navigator.clipboard.readText();
      output.textContent = `Pasted: ${text}`;
      console.log("Pasted from clipboard:", text);
    } catch (err) {
      console.error("Failed to paste:", err);
    }
  });
}
