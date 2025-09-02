/**
 * websocket-api.ts
 *
 * THEORY:
 * - WebSockets provide a persistent, bi-directional connection between client and server.
 * - Unlike HTTP (request → response), WebSockets allow continuous communication (real-time).
 * - Common use cases: chat apps, live notifications, stock tickers, multiplayer games.
 *
 * Flow:
 *   1. Create a WebSocket connection with new WebSocket(url)
 *   2. Listen for events: open, message, error, close
 *   3. Send messages using socket.send()
 *   4. Server pushes messages back anytime
 */

// Connect to a public echo WebSocket server (will return what you send)
const socket = new WebSocket("wss://echo.websocket.org");

const connectBtn = document.querySelector<HTMLButtonElement>("#connect");
const sendBtn = document.querySelector<HTMLButtonElement>("#send");
const input = document.querySelector<HTMLInputElement>("#message");
const output1 = document.querySelector<HTMLDivElement>("#output1");

if (connectBtn) {
  connectBtn.addEventListener("click", () => {
    socket.onopen = () => {
      console.log("Connected to WebSocket ✅");
      if (output1) output1.innerHTML += "<p>Connected ✅</p>";
    };

    socket.onmessage = (event) => {
      console.log("Received:", event.data);
      if (output1) output1.innerHTML += `<p>Server: ${event.data}</p>`;
    };

    socket.onerror = (err) => {
      console.error("WebSocket Error:", err);
    };

    socket.onclose = () => {
      console.log("WebSocket closed ❌");
      if (output1) output1.innerHTML += "<p>Disconnected ❌</p>";
    };
  });
}

if (sendBtn && input) {
  sendBtn.addEventListener("click", () => {
    const msg = input.value;
    if (msg) {
      socket.send(msg); // send message to server
      if (output1) output1.innerHTML += `<p>You: ${msg}</p>`;
      input.value = "";
    }
  });
}
