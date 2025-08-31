/*
What is a Module?
A module is any file containing TypeScript/JavaScript code.
By default, if a file has at least one import or export statement, TypeScript treats it as a module (otherwise it’s considered a script in the global scope).
Modules help you organize your code into smaller, reusable, maintainable chunks.

Why Use Modules?
Encapsulation: Keeps variables and functions scoped locally.
Reusability: Export and import code across files.
Maintainability: Easier to manage large projects.


Key Syntax:
Importing named exports
import { PI, add } from "./math";

Importing everything
import * as MathUtils from "./math";

Importing default export
import Calculator from "./calculator";


* Advanced Topics:

1. Module Augmentation
lodash.d.ts
declare module "lodash" {
  export function customUtil(x: number): number;
}

2. Ambient Modules
declare module "mystery-lib" {
  export function doMagic(x: string): string;
}


3.Circular Dependencies

Modules that import each other can lead to runtime undefined bugs.

Example:

a.ts
import { b } from "./b";
export const a = "A" + b;

b.ts
import { a } from "./a";
export const b = "B" + a;  // ❌ undefined


👉 Fix:
Move shared logic to a third module.
Use import type if only types are needed.

*/