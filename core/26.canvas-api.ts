/**
 * canvas-api.ts
 *
 * THEORY:
 * - The Canvas API lets you draw graphics using JavaScript.
 * - It's a 2D drawing surface where you can render shapes, text, images, and animations.
 * - Steps:
 *    1. Create <canvas> in HTML with width & height.
 *    2. Get 2D rendering context: canvas.getContext("2d").
 *    3. Use drawing methods: fillRect, arc, strokeText, etc.
 * - Common use cases: charts, games, animations, image manipulation.
 */

const canvas = document.querySelector<HTMLCanvasElement>("#my-canvas");

if (canvas) {
  const ctx = canvas.getContext("2d");

  if (ctx) {
    // ✅ Draw rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(20, 20, 120, 80); // x, y, width, height

    // ✅ Draw circle
    ctx.beginPath();
    ctx.arc(200, 60, 40, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
    ctx.fillStyle = "red";
    ctx.fill();

    // ✅ Draw text
    ctx.font = "20px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Hello Canvas!", 20, 150);
  }
}
