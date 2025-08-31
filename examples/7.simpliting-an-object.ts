
/*
✅ To become expert in object handling:

Master dot/bracket notation, Object.keys/values/entries.
- Object.keys(obj);    → array of keys
- Object.values(obj);  → array of values
- Object.entries(obj)  → array of [key, value]
Learn destructuring, spread, optional chaining.
Understand when to use Map/Set instead of plain objects.
Always keep Big-O complexity in mind:
- Array search = O(n)
- Object/Map lookup = O(1)
- Sorting = O(n log n)
*/


type Item = {
  brand: string;
  name: string;
};

type SimplifiedItem = Item & {
  count: number;
};

function simplifyList(items: Item[]): SimplifiedItem[] {
  const obj: { [key: string]: SimplifiedItem } = {};

  for (const item of items) {
    const key = item.brand + "-" + item.name;

    if (obj[key]) {
      obj[key].count++;
    } else {
      obj[key] = { ...item, count: 1 };
    }
  }

  return Object.values(obj);
}

// Example
const result = simplifyList([
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "NARS", name: "Cosmetics Voyageur Pallete" },
  { brand: "Urban Decay", name: "Naked Honey Pallete" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick" },
]);

console.log(result);

/*
[
  { brand: "NARS", name: "Cosmetics Voyageur Pallete", count: 2 },
  { brand: "Urban Decay", name: "Naked Honey Pallete", count: 1 },
  { brand: "Stila", name: "Stay All Day Liquid Lipstick", count: 3 }
]
*/
