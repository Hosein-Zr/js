# Algorithm Complexity Table (for 2,3,4)

| Complexity     | Name        | Example use case             | Performance Priority |
| -------------- | ----------- | ---------------------------- | -------------------- |
| **O(1)**       | Constant    | Array index access, math ops | ✅ Fastest           |
| **O(log n)**   | Logarithmic | Binary search                | ✅ Very Fast         |
| **O(n)**       | Linear      | Single loop through array    | ⚡ Fast (good)       |
| **O(n log n)** | Log-linear  | Merge Sort, Quick Sort       | ⚖️ Moderate          |
| **O(n²)**      | Quadratic   | Nested loops, Bubble Sort    | ❌ Slow              |
| **O(2^n)**     | Exponential | Brute force recursion        | 🚨 Very Slow         |
| **O(n!)**      | Factorial   | Permutations / combinations  | 🛑 Worst             |

# 📘 JavaScript Big-O Complexity Cheatsheet

This document lists the time complexities of common JavaScript operations and methods.

---

## 🔹 Array Methods

| Method                       | Time Complexity | Why                                    |
| ---------------------------- | --------------- | -------------------------------------- |
| `arr[i]`                     | **O(1)**        | Direct index lookup                    |
| `.push()`                    | **O(1)**        | Add to end                             |
| `.pop()`                     | **O(1)**        | Remove from end                        |
| `.shift()`                   | **O(n)**        | Remove first → reindexes everything    |
| `.unshift()`                 | **O(n)**        | Insert at start → reindexes everything |
| `.indexOf()` / `.includes()` | **O(n)**        | May check every element                |
| `.sort()`                    | **O(n log n)**  | Uses sorting algorithms internally     |
| `.forEach()` / `.map()`      | **O(n)**        | Visits every element                   |
| `.filter()`                  | **O(n)**        | Visits every element                   |
| `.reduce()`                  | **O(n)**        | Visits every element                   |

---

## 🔹 Set and Map Methods

| Method              | Time Complexity  | Why          |
| ------------------- | ---------------- | ------------ |
| `set.add(value)`    | **O(1)** average | Hash insert  |
| `set.has(value)`    | **O(1)** average | Hash lookup  |
| `set.delete(value)` | **O(1)** average | Hash removal |
| `map.set(key, v)`   | **O(1)** average | Hash insert  |
| `map.get(key)`      | **O(1)** average | Hash lookup  |
| `map.has(key)`      | **O(1)** average | Hash lookup  |

---

## 🔹 Object Operations

| Operation             | Time Complexity | Why                            |
| --------------------- | --------------- | ------------------------------ |
| `obj.key` access      | **O(1)**        | Hash table lookup              |
| `obj[key] = value`    | **O(1)**        | Hash insert                    |
| `Object.keys(obj)`    | **O(n)**        | Must collect all keys          |
| `Object.values(obj)`  | **O(n)**        | Must collect all values        |
| `Object.entries(obj)` | **O(n)**        | Must collect all keys & values |

---
