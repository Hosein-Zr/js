/**
 * formdata-api.ts
 *
 * THEORY:
 * - FormData API is used to easily construct a set of key/value pairs representing form fields.
 * - Often used to send forms, including file uploads, via Fetch or XMLHttpRequest.
 * - Automatically sets the correct `Content-Type` headers when sending to server.
 * - Useful when dealing with <form> elements or building data to send programmatically.
 */

// Example: Collect form data from an HTML <form>
const formElement = document.querySelector<HTMLFormElement>("#my-form");

if (formElement) {
  formElement.addEventListener("submit", async (event) => {
    event.preventDefault(); // prevent page reload

    // Create FormData object from the form
    const formData = new FormData(formElement);

    // Log all key-value pairs
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // Send form data with Fetch API
    try {
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: formData, // send directly (no need for JSON.stringify)
      });

      const result = await response.json();
      console.log("Server Response:", result);
    } catch (error) {
      console.error("FormData submission failed:", error);
    }
  });
}

// Example: Build FormData manually without a <form>
const manualData = new FormData();
manualData.append("username", "Habib");
manualData.append("age", "27");

// Add a fake file (in real cases, use <input type="file">)
const blob = new Blob(["Hello File"], { type: "text/plain" });
manualData.append("file", blob, "hello.txt");

// Log manual FormData
for (const [key, value] of manualData.entries()) {
  console.log(`ManualData → ${key}:`, value);
}
