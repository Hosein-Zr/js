// RenderingLifecycleDemo.tsx
/*
===============================
📚 Rendering Lifecycle & Reflow/Repaint (Zero → Hero)
===============================

The browser takes HTML, CSS, and JS and turns it into pixels on the screen through the **Critical Rendering Path**:

1. HTML Parsing → DOM Tree
   - Browser reads HTML → builds **DOM nodes**.

2. CSS Parsing → CSSOM Tree
   - Browser parses CSS → builds the **CSSOM** (stylesheet rules).

3. Render Tree Construction
   - Combines DOM + CSSOM → creates the **Render Tree** (only visible elements, with computed styles).

4. Layout (Reflow)
   - Calculates **size, position, geometry** of each node (width, height, relative position).
   - Expensive because it may trigger a cascade: changing one element can force recalculating large parts of the tree.

5. Paint (Repaint)
   - Filling in **pixels** (colors, borders, shadows, text).

6. Composite
   - GPU combines painted layers (e.g., video, canvas, transforms, opacity).

-------------------------------
⚡ Reflow vs Repaint
-------------------------------
- Reflow (Layout):
  Happens when size/position/geometry changes.
  Example: changing width, font-size, DOM insertion/removal.
  → Expensive because it may affect the entire page.

- Repaint:
  Happens when visual style changes but layout doesn’t.
  Example: background-color, visibility, color.
  → Cheaper than reflow.

-------------------------------
📊 Rendering Metrics (Core Web Vitals)
-------------------------------
- FCP (First Contentful Paint): first text/image painted on screen.
- LCP (Largest Contentful Paint): the main content’s largest element painted (important SEO metric).
- CLS (Cumulative Layout Shift): how much layout jumps during load.
- INP (Interaction to Next Paint): measures input delay responsiveness.

-------------------------------
🛠 Optimization Strategies
-------------------------------
- Avoid inline styles that change layout often → better to apply classes or use CSS transitions.
- Batch DOM changes → instead of updating DOM multiple times, group them (documentFragment, batching state updates).
- Use requestAnimationFrame for smooth animations → ensures updates are in sync with the browser’s rendering cycle.
- Reduce repaints → avoid expensive CSS effects (e.g., heavy box-shadow on many elements).
- Monitor performance → use Chrome DevTools Performance tab.

===============================
*/
