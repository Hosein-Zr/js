/**
 * streams-api.ts
 *
 * THEORY:
 * - The Streams API allows you to work with data as it arrives (instead of waiting for the whole response).
 * - Great for large files, live data feeds, or progressive rendering.
 * - Core concepts:
 *    1. ReadableStream → source of data
 *    2. WritableStream → destination of data
 *    3. TransformStream → modify data in between
 *
 * Flow:
 * - Fetch a resource
 * - Use response.body.getReader() to read chunks
 * - Process them progressively
 */

const streamBtn = document.querySelector<HTMLButtonElement>("#start-stream");
const output2 = document.querySelector<HTMLPreElement>("#stream-output2");

if (streamBtn && output2) {
  streamBtn.addEventListener("click", async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      if (!response.body) {
        output2.textContent = "ReadableStream not supported ❌";
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder(); // convert Uint8Array → string
      let resultText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break; // no more data

        resultText += decoder.decode(value, { stream: true });

        // Show progressively (avoid blocking UI)
        output2.textContent = resultText.slice(0, 500) + "..."; // preview
      }

      console.log("Full streamed data:", resultText);
    } catch (err) {
      console.error("Streaming failed:", err);
    }
  });
}
