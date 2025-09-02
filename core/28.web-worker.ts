/**
 * web-worker-main.ts
 *
 * THEORY:
 * - JavaScript is single-threaded → long computations block the UI.
 * - Web Workers let you run code in background threads.
 * - Workers cannot access DOM directly, but can communicate with the main thread via messages.
 * - Perfect for heavy tasks: data processing, image manipulation, math computations, etc.
 *
 * Flow:
 * 1. Create a Worker (new Worker("worker.ts", { type: "module" }))
 * 2. Send messages with worker.postMessage(data)
 * 3. Receive results with worker.onmessage
 * 4. Worker runs in parallel without freezing UI
 */

// ✅ Create worker
const worker = new Worker(new URL("./web-worker-worker.ts", import.meta.url), {
  type: "module",
});

const startBtn = document.querySelector<HTMLButtonElement>("#start");
const resultOutput = document.querySelector<HTMLParagraphElement>("#result");

// Send a task to worker
if (startBtn && resultOutput) {
  startBtn.addEventListener("click", () => {
    resultOutput.textContent = "Calculating primes up to 1,000,000... ⏳";

    // Post message to worker
    worker.postMessage({ limit: 1_000_000 });
  });

  // Receive result from worker
  worker.onmessage = (event) => {
    const { primes, duration } = event.data;
    resultOutput.textContent = `Found ${primes.length} primes in ${duration} ms 🎉`;
    console.log("Primes:", primes.slice(0, 20), "..."); // show first 20
  };
}



/**
 * web-worker-worker.ts
 *
 * This is the worker script (runs in a background thread).
 * It receives a limit number, computes primes, and sends results back.

// * below is a sample of web workr

self.onmessage = (event: MessageEvent) => {
    const { limit } = event.data;
    
    const start = performance.now();
    const primes: number[] = [];
    
    for (let n = 2; n <= limit; n++) {
        let isPrime = true;
        for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) primes.push(n);
}

const duration = Math.round(performance.now() - start);

// ✅ Send result back to main thread
postMessage({ primes, duration });
};



*/